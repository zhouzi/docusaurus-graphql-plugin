import path from "path";
import fse from "fs-extra";
import {
  LoadContext,
  Plugin,
  OptionValidationContext,
  ValidationResult,
} from "@docusaurus/types";
import {
  GraphQLArgument,
  GraphQLEnumType,
  GraphQLField,
  GraphQLInputField,
  GraphQLInputObjectType,
  GraphQLInterfaceType,
  GraphQLList,
  GraphQLNamedType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLSchema,
  GraphQLUnionType,
  isEnumType,
  isInputObjectType,
  isInterfaceType,
  isListType,
  isNonNullType,
  isObjectType,
  isScalarType,
  isUnionType,
} from "graphql";
import Joi from "joi";
import { loadSchema } from "@graphql-tools/load";
import { UrlLoader } from "@graphql-tools/url-loader";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { JsonFileLoader } from "@graphql-tools/json-file-loader";
import marked, { Slugger } from "marked";
import joinURL from "url-join";

interface PluginContent {
  schema: GraphQLSchema;
}

interface PluginOptions {
  schema: string;
  routeBasePath: string;
}

const OptionsSchema = Joi.object({
  schema: Joi.string().required(),
  routeBasePath: Joi.string().default("/docs/api/"),
});

interface TypeItem<T> {
  type: T;
}

interface QueryItem extends TypeItem<GraphQLField<any, any>> {}

interface MutationItem extends TypeItem<GraphQLField<any, any>> {}

interface ObjectItem extends TypeItem<GraphQLObjectType> {}

interface InterfaceItem extends TypeItem<GraphQLInterfaceType> {
  implementedBy: GraphQLObjectType[];
}

interface EnumItem extends TypeItem<GraphQLEnumType> {}

interface UnionItem extends TypeItem<GraphQLUnionType> {}

interface InputObjectItem extends TypeItem<GraphQLInputObjectType> {}

interface ScalarItem extends TypeItem<GraphQLScalarType> {}

interface GroupedTypes {
  queries: QueryItem[];
  mutations: MutationItem[];
  objects: ObjectItem[];
  interfaces: InterfaceItem[];
  enums: EnumItem[];
  unions: UnionItem[];
  inputObjects: InputObjectItem[];
  scalars: ScalarItem[];
}

interface MarkdownOptions {
  getTypePath: (
    type:
      | GraphQLScalarType
      | GraphQLObjectType
      | GraphQLInterfaceType
      | GraphQLUnionType
      | GraphQLEnumType
      | GraphQLList<any>
      | GraphQLInputObjectType
      | GraphQLNonNull<any>
  ) => string;
}

export default function plugin(
  context: LoadContext,
  options: PluginOptions
): Plugin<PluginContent> {
  return {
    name: "docusaurus-plugin-content-graphql",
    loadContent: async () => {
      const schema = await loadSchema(options.schema, {
        loaders: [
          new UrlLoader(),
          new GraphQLFileLoader(),
          new JsonFileLoader(),
        ],
      });
      return { schema };
    },
    contentLoaded: async ({ content }) => {
      const slugger = new Slugger();
      const sluggify = (name: string) => slugger.slug(name, { dryrun: true });
      const baseUrl = joinURL(context.baseUrl, options.routeBasePath);
      const outputPath = path.join(
        context.siteDir,
        "docs",

        ...options.routeBasePath

          // the files are generated in the docs folder even if the routeBasePath doesn't contain /docs
          // e.g /docs/api and /api both result in the files being generated in docs/api
          .replace(/^\/docs/, "")

          // routeBasePath is an URL path so the delimiter is known
          // but outputPath is used to write files, with OS dependent delimiters
          // so that's taken care of by path.join
          .split("/")
      );

      const getTypePath = (
        type:
          | GraphQLScalarType
          | GraphQLObjectType
          | GraphQLInterfaceType
          | GraphQLUnionType
          | GraphQLEnumType
          | GraphQLList<any>
          | GraphQLInputObjectType
          | GraphQLNonNull<any>
      ): string => {
        if (isListType(type)) {
          return getTypePath(type.ofType);
        }

        if (isNonNullType(type)) {
          return getTypePath(type.ofType);
        }

        if (isScalarType(type)) {
          return joinURL(baseUrl, `/scalars#${sluggify(type.name)}`);
        }

        if (isObjectType(type)) {
          return joinURL(baseUrl, `/objects#${sluggify(type.name)}`);
        }

        if (isInterfaceType(type)) {
          return joinURL(baseUrl, `/interfaces#${sluggify(type.name)}`);
        }

        if (isUnionType(type)) {
          return joinURL(baseUrl, `/unions#${sluggify(type.name)}`);
        }

        if (isEnumType(type)) {
          return joinURL(baseUrl, `/enums#${sluggify(type.name)}`);
        }

        return joinURL(baseUrl, `/inputObjects#${sluggify(type.name)}`);
      };
      const {
        queries,
        mutations,
        objects,
        interfaces,
        enums,
        unions,
        inputObjects,
        scalars,
      } = sortGroupedTypes(
        groupTypes(Object.values(content.schema.getTypeMap()))
      );
      const files = [
        {
          id: "queries",
          title: "Queries",
          content: convertQueriesToMarkdown(queries, { getTypePath }),
        },
        {
          id: "mutations",
          title: "Mutations",
          content: convertMutationsToMarkdown(mutations, { getTypePath }),
        },
        {
          id: "objects",
          title: "Objects",
          content: convertObjectsToMarkdown(objects, { getTypePath }),
        },
        {
          id: "interfaces",
          title: "Interfaces",
          content: convertInterfacesToMarkdown(interfaces, { getTypePath }),
        },
        {
          id: "enums",
          title: "Enums",
          content: convertEnumsToMarkdown(enums, { getTypePath }),
        },
        {
          id: "unions",
          title: "Unions",
          content: convertUnionsToMarkdown(unions, { getTypePath }),
        },
        {
          id: "inputObjects",
          title: "Input objects",
          content: convertInputObjectsToMarkdown(inputObjects, { getTypePath }),
        },
        {
          id: "scalars",
          title: "Scalars",
          content: convertScalarsToMarkdown(scalars, { getTypePath }),
        },
      ];

      for (const file of files) {
        await fse.outputFile(
          path.join(outputPath, `${file.id}.md`),
          [
            `---`,
            `\n`,
            `id: ${file.id}`,
            `\n`,
            `title: ${file.title}`,
            `\n`,
            `slug: ${file.id}`,
            `\n`,
            `---`,
            `\n\n`,
            file.content,
          ].join("")
        );
      }
    },
  };
}

export function validateOptions({
  options,
  validate,
}: OptionValidationContext<PluginOptions>): ValidationResult<PluginOptions> {
  return validate(OptionsSchema, options);
}

export function groupTypes(types: GraphQLNamedType[]): GroupedTypes {
  return types.reduce<GroupedTypes>(
    (acc, type) => {
      if (type.name.startsWith("__")) {
        return acc;
      }

      if (isObjectType(type)) {
        if (type.name === "Query") {
          return {
            ...acc,
            queries: Object.values(type.getFields()).map((query) => ({
              type: query,
            })),
          };
        }

        if (type.name === "Mutation") {
          return {
            ...acc,
            mutations: Object.values(type.getFields()).map((mutation) => ({
              type: mutation,
            })),
          };
        }

        type.getInterfaces().forEach((inter) => {
          acc.interfaces.forEach((otherInter) => {
            if (otherInter.type.name === inter.name) {
              otherInter.implementedBy.push(type);
            }
          });
        });

        return {
          ...acc,
          objects: acc.objects.concat([{ type }]),
        };
      }

      if (isInterfaceType(type)) {
        const interfaceItem: InterfaceItem = {
          type,
          implementedBy: [],
        };

        acc.objects.forEach(({ type: object }) => {
          object.getInterfaces().forEach((otherInterface) => {
            if (otherInterface.name === interfaceItem.type.name) {
              interfaceItem.implementedBy.push(object);
            }
          });
        });

        return {
          ...acc,
          interfaces: acc.interfaces.concat([interfaceItem]),
        };
      }

      if (isEnumType(type)) {
        return {
          ...acc,
          enums: acc.enums.concat([{ type }]),
        };
      }

      if (isUnionType(type)) {
        return {
          ...acc,
          unions: acc.unions.concat([{ type }]),
        };
      }

      if (isInputObjectType(type)) {
        return {
          ...acc,
          inputObjects: acc.inputObjects.concat([{ type }]),
        };
      }

      if (isScalarType(type)) {
        return {
          ...acc,
          scalars: acc.scalars.concat([{ type }]),
        };
      }

      return acc;
    },
    {
      queries: [],
      mutations: [],
      objects: [],
      interfaces: [],
      enums: [],
      unions: [],
      inputObjects: [],
      scalars: [],
    }
  );
}

export function sortGroupedTypes(groupedTypes: GroupedTypes): GroupedTypes {
  return {
    queries: sortByName(groupedTypes.queries),
    mutations: sortByName(groupedTypes.mutations),
    objects: sortByName(groupedTypes.objects),
    interfaces: sortByName(groupedTypes.interfaces),
    enums: sortByName(groupedTypes.enums),
    unions: sortByName(groupedTypes.unions),
    inputObjects: sortByName(groupedTypes.inputObjects),
    scalars: sortByName(groupedTypes.scalars),
  };
}

function sortByName<T extends TypeItem<{ name: string }>>(types: T[]): T[] {
  return types.sort((a, b) => a.type.name.localeCompare(b.type.name));
}

export function convertQueriesToMarkdown(
  queries: QueryItem[],
  { getTypePath }: MarkdownOptions
): string {
  const lines: string[] = [];

  queries.forEach(({ type: query }) => {
    lines.push(`## ${query.name}`, `\n\n`);
    lines.push(
      `**Type:** [${query.type.inspect()}](${getTypePath(query.type)})`,
      `\n\n`
    );
    lines.push(query.description || "", `\n\n`);

    if (query.args.length > 0) {
      pushArguments(lines, query.args, { getTypePath });
    }
  });

  return lines.join("");
}

export function convertMutationsToMarkdown(
  mutations: MutationItem[],
  { getTypePath }: MarkdownOptions
): string {
  const lines: string[] = [];

  mutations.forEach(({ type: mutation }) => {
    lines.push(`## ${mutation.name}`, `\n\n`);
    lines.push(
      `**Type:** [${mutation.type.inspect()}](${getTypePath(mutation.type)})`,
      `\n\n`
    );
    lines.push(mutation.description || "", `\n\n`);

    if (mutation.args.length > 0) {
      pushArguments(lines, mutation.args, { getTypePath });
    }
  });

  return lines.join("");
}

function pushArguments(
  lines: string[],
  args: Array<GraphQLArgument | GraphQLInputField>,
  { getTypePath }: MarkdownOptions
) {
  lines.push(`**Arguments**`, `\n\n`);

  lines.push(`<table>`, `\n`);
  lines.push(
    `<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>`,
    `\n`
  );
  lines.push(`<tbody>`, `\n`);

  args.forEach((arg) => {
    lines.push(`<tr>`, `\n`);
    lines.push(`<td><code>${arg.name}</code></td>`, `\n`);
    lines.push(
      `<td><a href="${getTypePath(
        arg.type
      )}"><code>${arg.type.inspect()}</code></a></td>`,
      `\n`
    );

    lines.push(`<td>`, `\n`);

    if (arg.deprecationReason) {
      lines.push(
        `<blockquote>Deprecated: ${arg.deprecationReason}</blockquote>`,
        `\n\n`
      );
    }

    lines.push(parseMarkdown(arg.description || ""), `\n`);

    lines.push(`</td>`, `\n`);

    lines.push(`</tr>`, `\n`);
  });

  lines.push(`</tbody>`, `\n`);
  lines.push(`</table>`, `\n\n`);
}

export function convertObjectsToMarkdown(
  objects: ObjectItem[],
  { getTypePath }: MarkdownOptions
): string {
  const lines: string[] = [];

  objects.forEach(({ type: object }) => {
    lines.push(`## ${object.name}`, `\n\n`);
    lines.push(object.description || "", `\n\n`);

    const interfaces = object.getInterfaces();
    if (interfaces.length > 0) {
      pushInterfaces(lines, interfaces, { getTypePath });
    }

    const fields = Object.values(object.getFields());
    pushFields(lines, fields, { getTypePath });
  });

  return lines.join("");
}

export function convertInterfacesToMarkdown(
  interfaces: InterfaceItem[],
  { getTypePath }: MarkdownOptions
): string {
  const lines: string[] = [];

  interfaces.forEach(({ type: inter, implementedBy }) => {
    lines.push(`## ${inter.name}`, `\n\n`);
    lines.push(inter.description || "", `\n\n`);

    const subInterfaces = inter.getInterfaces();
    if (subInterfaces.length > 0) {
      pushInterfaces(lines, subInterfaces, { getTypePath });
    }

    if (implementedBy.length > 0) {
      lines.push(`**Implemented by**`, `\n\n`);
      implementedBy.forEach((object) => {
        lines.push(`- [${object.name}](${getTypePath(object)})`, `\n`);
      });
      lines.push(`\n`);
    }

    const fields = Object.values(inter.getFields());
    pushFields(lines, fields, { getTypePath });
  });

  return lines.join("");
}

function pushInterfaces(
  lines: string[],
  interfaces: GraphQLInterfaceType[],
  { getTypePath }: MarkdownOptions
) {
  lines.push(`**Implements**`, `\n\n`);
  interfaces.forEach((inter) => {
    lines.push(`- [${inter.name}](${getTypePath(inter)})`, `\n`);
  });
  lines.push(`\n`);
}

function pushFields(
  lines: string[],
  fields: GraphQLField<any, any>[],
  { getTypePath }: MarkdownOptions
) {
  lines.push(`**Fields**`, `\n\n`);

  lines.push(`<table>`, `\n`);
  lines.push(
    `<thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead>`,
    `\n`
  );
  lines.push(`<tbody>`, `\n`);

  fields.forEach((field) => {
    lines.push(`<tr>`, `\n`);
    lines.push(`<td><code>${field.name}</code></td>`, `\n`);
    lines.push(
      `<td><a href="${getTypePath(
        field.type
      )}"><code>${field.type.inspect()}</code></a></td>`,
      `\n`
    );

    lines.push(`<td>`, `\n`);

    if (field.deprecationReason) {
      lines.push(
        `<blockquote>Deprecated: ${field.deprecationReason}</blockquote>`,
        `\n\n`
      );
    }

    lines.push(parseMarkdown(field.description || ""), `\n`);

    if (field.args.length > 0) {
      lines.push(`\n`);
      pushArguments(lines, field.args, { getTypePath });
    }

    lines.push(`</td>`, `\n`);

    lines.push(`</tr>`, `\n`);
  });

  lines.push(`</tbody>`, `\n`);
  lines.push(`</table>`, `\n\n`);
}

export function convertEnumsToMarkdown(
  enums: EnumItem[],
  _: MarkdownOptions
): string {
  const lines: string[] = [];

  enums.forEach(({ type: en }) => {
    lines.push(`## ${en.name}`, `\n\n`);
    lines.push(en.description || "", `\n\n`);

    lines.push(`**Values**`, `\n\n`);

    lines.push(`<table>`, `\n`);
    lines.push(
      `<thead><tr><th>Value</th><th>Description</th></tr></thead>`,
      `\n`
    );
    lines.push(`<tbody>`, `\n`);

    en.getValues().forEach((value) => {
      lines.push(`<tr>`, `\n`);
      lines.push(`<td>${value.value}</td>`, `\n`);
      lines.push(`<td>`, `\n`);
      lines.push(parseMarkdown(value.description || ""), `\n`);
      lines.push(`</td>`, `\n`);
      lines.push(`</tr>`, `\n`);
    });

    lines.push(`</tbody>`, `\n`);
    lines.push(`</table>`, `\n\n`);
  });

  return lines.join("");
}

export function convertUnionsToMarkdown(
  unions: UnionItem[],
  { getTypePath }: MarkdownOptions
): string {
  const lines: string[] = [];

  unions.forEach(({ type: union }) => {
    lines.push(`## ${union.name}`, `\n\n`);
    lines.push(union.description || "", `\n\n`);

    lines.push(`**Possible types**`, `\n\n`);
    union.getTypes().forEach((type) => {
      lines.push(`- [${type.name}](${getTypePath(type)})`, `\n`);
    });
    lines.push(`\n`);
  });

  return lines.join("");
}

export function convertInputObjectsToMarkdown(
  inputObjects: InputObjectItem[],
  { getTypePath }: MarkdownOptions
): string {
  const lines: string[] = [];

  inputObjects.forEach(({ type: inputObject }) => {
    lines.push(`## ${inputObject.name}`, `\n\n`);
    lines.push(inputObject.description || "", `\n\n`);

    pushArguments(lines, Object.values(inputObject.getFields()), {
      getTypePath,
    });
  });

  return lines.join("");
}

export function convertScalarsToMarkdown(
  scalars: ScalarItem[],
  _: MarkdownOptions
): string {
  const lines: string[] = [];

  scalars.forEach(({ type: scalar }) => {
    lines.push(`## ${scalar.name}`, `\n\n`);
    lines.push(scalar.description || "", `\n\n`);
  });

  return lines.join("");
}

function parseMarkdown(markdown: string): string {
  const walkTokens = (token: marked.Token) => {
    if (token.type === "text") {
      // make the Markdown compatible with MDX by escaping curly braces
      token.text = token.text
        .replace(/\{/g, "&lbrace;")
        .replace(/\}/g, "&rbrace;");
    }
  };
  return marked
    .parse(markdown, {
      // marked's types are buggy
      walkTokens: walkTokens as any,
    })
    .trim();
}
