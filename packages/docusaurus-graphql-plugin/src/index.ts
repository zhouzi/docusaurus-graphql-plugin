import path from "path";
import fse from "fs-extra";
import {
  LoadContext,
  Plugin,
  OptionValidationContext,
  ValidationResult,
} from "@docusaurus/types";
import {
  GraphQLEnumType,
  GraphQLInputObjectType,
  GraphQLInterfaceType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLUnionType,
  isEnumType,
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
import { Slugger } from "marked";
import joinURL from "url-join";
import { PluginOptions } from "./types";
import {
  convertEnumsToMarkdown,
  convertInputObjectsToMarkdown,
  convertInterfacesToMarkdown,
  convertMutationsToMarkdown,
  convertObjectsToMarkdown,
  convertQueriesToMarkdown,
  convertScalarsToMarkdown,
  convertUnionsToMarkdown,
} from "./templates";
import { groupSortedTypes } from "./groupSortedTypes";

const OptionsSchema = Joi.object<PluginOptions>({
  id: Joi.string(),
  schema: Joi.string().required(),
  routeBasePath: Joi.string().default("/docs/api/"),
});

export function validateOptions({
  options,
  validate,
}: OptionValidationContext<PluginOptions>): ValidationResult<PluginOptions> {
  return validate(OptionsSchema, options);
}

export default function plugin(
  context: LoadContext,
  options: PluginOptions
): Plugin<void> {
  return {
    name: "docusaurus-graphql-plugin",
    extendCli: (cli) => {
      cli
        .command(
          [
            "docs",
            "generate",
            "graphql",
            options.id === "default" ? null : options.id,
          ]
            .filter(Boolean)
            .join(":")
        )
        .description("Generate the GraphQL documentation based on the schema")
        .action(async () => {
          const schema = await loadSchema(options.schema, {
            loaders: [
              new UrlLoader(),
              new GraphQLFileLoader(),
              new JsonFileLoader(),
            ],
          });
          const slugger = new Slugger();
          const sluggify = (name: string) =>
            slugger.slug(name, { dryrun: true });
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
          } = groupSortedTypes(Object.values(schema.getTypeMap()));
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
              content: convertInputObjectsToMarkdown(inputObjects, {
                getTypePath,
              }),
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
        });
    },
  };
}
