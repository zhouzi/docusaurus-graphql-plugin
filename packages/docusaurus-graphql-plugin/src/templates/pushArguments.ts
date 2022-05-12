import { GraphQLArgument, GraphQLInputField } from "graphql";
import { MarkdownOptions } from "../types";
import { parseMarkdown } from "./parseMarkdown";

export function pushArguments(
  lines: string[],
  args: readonly GraphQLArgument[] | GraphQLInputField[],
  { getTypePath }: MarkdownOptions
): void {
  lines.push(
    `<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>`,
    `\n\n`
  );

  lines.push(`<table>`, `\n`);
  lines.push(`<thead><tr><th>Name</th><th>Description</th></tr></thead>`, `\n`);
  lines.push(`<tbody>`, `\n`);

  args.forEach((arg) => {
    lines.push(`<tr>`, `\n`);
    lines.push(
      `<td>`,
      `\n`,
      `${arg.name}`,
      `<br />\n`,
      `<a href="${getTypePath(
        arg.type
      )}"><code>${arg.type.toJSON()}</code></a>`,
      `\n`,
      `</td>`,
      `\n`
    );

    lines.push(`<td>`, `\n`);

    if (arg.deprecationReason) {
      lines.push(
        `<blockquote>Deprecated: ${arg.deprecationReason}</blockquote>`,
        `\n\n`
      );
    }

    lines.push(parseMarkdown(arg.description || ""), `\n`);

    lines.push(`</td>`, `\n`);

    lines.push(`</tr>`, `\n`);
  });

  lines.push(`</tbody>`, `\n`);
  lines.push(`</table>`, `\n\n`);
}
