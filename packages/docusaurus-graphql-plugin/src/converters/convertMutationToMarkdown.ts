import { GraphQLField } from "graphql";
import { MarkdownConverterOptions } from "../types";
import { pushArguments } from "./pushArguments";

export function convertMutationToMarkdown(
  mutation: GraphQLField<any, any>,
  { getTypePath }: MarkdownConverterOptions
): string {
  const lines: string[] = [];

  lines.push(`## ${mutation.name}`, `\n\n`);
  lines.push(
    `**Type:** [${mutation.type.toJSON()}](${getTypePath(mutation.type)})`,
    `\n\n`
  );

  if (mutation.deprecationReason) {
    lines.push(`> Deprecated: ${mutation.deprecationReason}`, `\n\n`);
  }

  lines.push(mutation.description || "", `\n\n`);

  if (mutation.args.length > 0) {
    pushArguments(lines, mutation.args, { getTypePath });
  }

  return lines.join("");
}
