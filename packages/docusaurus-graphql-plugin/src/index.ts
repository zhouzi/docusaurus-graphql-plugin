import path from "path";
import fse from "fs-extra";
import {
  LoadContext,
  Plugin,
  OptionValidationContext,
  ValidationResult,
} from "@docusaurus/types";
import { GraphQLType } from "graphql";
import Joi from "joi";
import { loadSchema } from "@graphql-tools/load";
import { UrlLoader } from "@graphql-tools/url-loader";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { JsonFileLoader } from "@graphql-tools/json-file-loader";
import joinURL from "url-join";
import { convertersList } from "./converters";
import { getRelativeTypeUrl } from "./getRelativeTypeUrl";

interface PluginOptions {
  id: string;
  schema: string;
  routeBasePath: string;
  sidebar?: {
    label: string;
    position: number;
  };
}

const OptionsSchema = Joi.object<PluginOptions>({
  id: Joi.string(),
  schema: Joi.string().required(),
  routeBasePath: Joi.string().default("/docs/api/"),
  sidebar: Joi.object({
    label: Joi.string(),
    position: Joi.number(),
  }),
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

          for (let i = 0; i < convertersList.length; i++) {
            const converter = convertersList[i];
            const sidebarPosition = i + 1;

            await fse.outputFile(
              path.join(outputPath, `${converter.id}.md`),
              [
                `---`,
                `\n`,
                `id: ${converter.id}`,
                `\n`,
                `title: ${converter.title}`,
                `\n`,
                `slug: ${converter.id}`,
                `\n`,
                `sidebar_position: ${sidebarPosition}`,
                `\n`,
                `---`,
                `\n\n`,
                converter.convertToMarkdown(schema, {
                  getTypePath: (type: GraphQLType) => {
                    const relativeTypeUrl = getRelativeTypeUrl(type);
                    return relativeTypeUrl
                      ? joinURL(baseUrl, relativeTypeUrl)
                      : undefined;
                  },
                }),
              ].join("")
            );
          }

          if (options.sidebar) {
            await fse.outputFile(
              path.join(outputPath, "_category_.json"),
              JSON.stringify(
                {
                  label: options.sidebar.label,
                  position: options.sidebar.position,
                },
                null,
                2
              )
            );
          }
        });
    },
  };
}
