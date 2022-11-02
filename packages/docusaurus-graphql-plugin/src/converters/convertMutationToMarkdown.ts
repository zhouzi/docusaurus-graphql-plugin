import { GraphQLField } from "graphql";
import { MarkdownConverterOptions } from "../types";
import { parseMarkdown } from "./parseMarkdown";
import { pushArguments } from "./pushArguments";

export function convertMutationToMarkdown(
  mutation: GraphQLField<any, any>,
  options: MarkdownConverterOptions
): string {
  const lines: string[] = [];

  lines.push(`## ${mutation.name}`, `\n\n`);

  const typeUrl = options.getTypePath(mutation.type);
  lines.push(
    `**Type:** ${
      typeUrl
        ? `[${mutation.type.toJSON()}](${typeUrl})`
        : mutation.type.toJSON()
    }`,
    `\n\n`
  );

  if (mutation.deprecationReason) {
    lines.push(`> Deprecated: ${mutation.deprecationReason}`, `\n\n`);
  }

  lines.push(parseMarkdown(mutation.description || ""), `\n\n`);

  if (mutation.args.length > 0) {
    pushArguments(lines, mutation.args, options);
  }

  return lines.join("");
}
