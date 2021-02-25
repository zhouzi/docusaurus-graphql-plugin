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
import Joi, { ValidationError } from "joi";
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
  routeBasePath: Joi.string().default("/docs/"),
});

interface GroupedTypes {
  queries: GraphQLField<any, any>[];
  mutations: GraphQLField<any, any>[];
  objects: GraphQLObjectType[];
  interfaces: GraphQLInterfaceType[];
  enums: GraphQLEnumType[];
  unions: GraphQLUnionType[];
  inputObjects: GraphQLInputObjectType[];
  scalars: GraphQLScalarType[];
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
): Plugin<PluginContent, typeof OptionsSchema> {
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
      const slugify = (name: string) => slugger.slug(name, { dryrun: true });
      const baseUrl = joinURL(
        context.baseUrl,

        // Docs can be served over a path different than "/docs"
        // That's done through its routeBasePath option which we have to duplicate
        options.routeBasePath === "/" ? "" : options.routeBasePath
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
          return joinURL(baseUrl, `/api/scalars#${slugify(type.name)}`);
        }

        if (isObjectType(type)) {
          return joinURL(baseUrl, `/api/objects#${slugify(type.name)}`);
        }

        if (isInterfaceType(type)) {
          return joinURL(baseUrl, `/api/interfaces#${slugify(type.name)}`);
        }

        if (isUnionType(type)) {
          return joinURL(baseUrl, `/api/unions#${slugify(type.name)}`);
        }

        if (isEnumType(type)) {
          return joinURL(baseUrl, `/api/enums#${slugify(type.name)}`);
        }

        return joinURL(baseUrl, `/api/inputObjects#${slugify(type.name)}`);
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
          path.join(context.siteDir, "docs", "api", `${file.id}.md`),
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
}: OptionValidationContext<PluginOptions, ValidationError>): ValidationResult<
  PluginOptions,
  ValidationError
> {
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
            queries: Object.values(type.getFields()),
          };
        }

        if (type.name === "Mutation") {
          return {
            ...acc,
            mutations: Object.values(type.getFields()),
          };
        }

        return {
          ...acc,
          objects: acc.objects.concat([type]),
        };
      }

      if (isInterfaceType(type)) {
        return {
          ...acc,
          interfaces: acc.interfaces.concat([type]),
        };
      }

      if (isEnumType(type)) {
        return {
          ...acc,
          enums: acc.enums.concat([type]),
        };
      }

      if (isUnionType(type)) {
        return {
          ...acc,
          unions: acc.unions.concat([type]),
        };
      }

      if (isInputObjectType(type)) {
        return {
          ...acc,
          inputObjects: acc.inputObjects.concat([type]),
        };
      }

      if (isScalarType(type)) {
        return {
          ...acc,
          scalars: acc.scalars.concat([type]),
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

function sortByName<T extends { name: string }>(types: T[]): T[] {
  return types.sort((a, b) => a.name.localeCompare(b.name));
}

export function convertQueriesToMarkdown(
  queries: GraphQLField<any, any>[],
  { getTypePath }: MarkdownOptions
) {
  const lines: string[] = [];

  queries.forEach((query) => {
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
  mutations: GraphQLField<any, any>[],
  { getTypePath }: MarkdownOptions
) {
  const lines: string[] = [];

  mutations.forEach((mutation) => {
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
  objects: GraphQLObjectType[],
  { getTypePath }: MarkdownOptions
) {
  const lines: string[] = [];

  objects.forEach((object) => {
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
  interfaces: GraphQLInterfaceType[],
  { getTypePath }: MarkdownOptions
) {
  const lines: string[] = [];

  interfaces.forEach((inter) => {
    lines.push(`## ${inter.name}`, `\n\n`);
    lines.push(inter.description || "", `\n\n`);

    const subInterfaces = inter.getInterfaces();
    if (subInterfaces.length > 0) {
      pushInterfaces(lines, subInterfaces, { getTypePath });
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
  enums: GraphQLEnumType[],
  { getTypePath }: MarkdownOptions
) {
  const lines: string[] = [];

  enums.forEach((en) => {
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
  unions: GraphQLUnionType[],
  { getTypePath }: MarkdownOptions
) {
  const lines: string[] = [];

  unions.forEach((union) => {
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
  inputObjects: GraphQLInputObjectType[],
  { getTypePath }: MarkdownOptions
) {
  const lines: string[] = [];

  inputObjects.forEach((inputObject) => {
    lines.push(`## ${inputObject.name}`, `\n\n`);
    lines.push(inputObject.description || "", `\n\n`);

    pushArguments(lines, Object.values(inputObject.getFields()), {
      getTypePath,
    });
  });

  return lines.join("");
}

export function convertScalarsToMarkdown(
  scalars: GraphQLScalarType[],
  { getTypePath }: MarkdownOptions
) {
  const lines: string[] = [];

  scalars.forEach((scalar) => {
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
