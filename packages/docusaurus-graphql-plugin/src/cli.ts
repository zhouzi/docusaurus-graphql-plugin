import { LoadContext, Plugin } from "@docusaurus/types";
import {
  PluginOptions,
  PluginContent,
  loadContent,
  contentLoaded,
  validateOptions,
} from "./content";

export default function plugin(
  context: LoadContext,
  options: PluginOptions
): Plugin<PluginContent> {
  return {
    name: "docusaurus-graphql-plugin-cli",
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
          const content = await loadContent(context, options);
          await contentLoaded(context, options, content);
        });
    },
  };
}

export { validateOptions };
