import { QueryItem, MarkdownOptions } from "../types";
import { pushArguments } from "./pushArguments";

export function convertQueriesToMarkdown(
  queries: QueryItem[],
  { getTypePath }: MarkdownOptions
): string {
  const lines: string[] = [];

  queries.forEach(({ type: query }) => {
    lines.push(`## ${query.name}`, `\n\n`);
    lines.push(
      `**Type:** [${query.type.inspect()}](${getTypePath(query.type)})`,
      `\n\n`
    );

    if (query.deprecationReason) {
      lines.push(`> Deprecated: ${query.deprecationReason}`, `\n\n`);
    }

    lines.push(query.description || "", `\n\n`);

    if (query.args.length > 0) {
      pushArguments(lines, query.args, { getTypePath });
    }
  });

  return lines.join("");
}
