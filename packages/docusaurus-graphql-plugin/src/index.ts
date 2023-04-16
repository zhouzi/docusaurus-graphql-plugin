import path from "path";
import fse from "fs-extra";
import {
  LoadContext,
  Plugin,
  OptionValidationContext,
  ValidationResult,
} from "@docusaurus/types";
import Joi from "joi";
import { loadSchema } from "@graphql-tools/load";
import { UrlLoader } from "@graphql-tools/url-loader";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { JsonFileLoader } from "@graphql-tools/json-file-loader";
import * as converters from "./converters";
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

          const convertersList = Object.values(converters);
          for (let index = 0; index < convertersList.length; index++) {
            const converter = convertersList[index];
            const markdown = converter.convertToMarkdown(schema, {
              getTypePath: getRelativeTypeUrl,
            });

            if (!markdown) {
              // do not create an empty file
              continue;
            }

            await fse.outputFile(
              path.join(outputPath, `${converter.id}.md`),
              [
                `---`,
                `id: ${converter.id}`,
                `title: ${converter.title}`,
                `slug: ${converter.id}`,
                `sidebar_position: ${index + 1}`,
                `---`,
                ``,
                markdown,
              ].join(`\n`)
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
