import { GraphQLField } from "graphql";
import { MarkdownConverterOptions } from "../types";
import { escapeSpecialCharacters } from "./parseMarkdown";
import { pushArguments } from "./pushArguments";

export function convertQueryToMarkdown(
  query: GraphQLField<any, any>,
  options: MarkdownConverterOptions
): string {
  const lines: string[] = [];

  lines.push(`## ${query.name}`, `\n\n`);
  const typeUrl = options.getTypePath(query.type);
  lines.push(
    `**Type:** ${
      typeUrl ? `[${query.type.toJSON()}](${typeUrl})` : query.type.toJSON()
    }`,
    `\n\n`
  );

  if (query.deprecationReason) {
    lines.push(
      `> Deprecated: ${escapeSpecialCharacters(query.deprecationReason)}`,
      `\n\n`
    );
  }

  lines.push(query.description || "", `\n\n`);

  if (query.args.length > 0) {
    pushArguments(lines, query.args, options);
  }

  return lines.join("");
}
