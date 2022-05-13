import { GraphQLField } from "graphql";
import { MarkdownConverterOptions } from "../types";
import { pushArguments } from "./pushArguments";

export function convertQueryToMarkdown(
  query: GraphQLField<any, any>,
  { getTypePath }: MarkdownConverterOptions
): string {
  const lines: string[] = [];

  lines.push(`## ${query.name}`, `\n\n`);
  lines.push(
    `**Type:** [${query.type.toJSON()}](${getTypePath(query.type)})`,
    `\n\n`
  );

  if (query.deprecationReason) {
    lines.push(`> Deprecated: ${query.deprecationReason}`, `\n\n`);
  }

  lines.push(query.description || "", `\n\n`);

  if (query.args.length > 0) {
    pushArguments(lines, query.args, { getTypePath });
  }

  return lines.join("");
}
