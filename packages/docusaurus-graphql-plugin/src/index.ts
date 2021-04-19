import { LoadContext, Plugin } from "@docusaurus/types";
import content, {
  PluginContent,
  PluginOptions,
  validateOptions,
} from "./content";
import cli from "./cli";

export default function plugin(
  context: LoadContext,
  options: PluginOptions
): Plugin<PluginContent> {
  return {
    ...content(context, options),
    ...cli(context, options),
    name: "docusaurus-graphql-plugin",
  };
}

export { validateOptions };
