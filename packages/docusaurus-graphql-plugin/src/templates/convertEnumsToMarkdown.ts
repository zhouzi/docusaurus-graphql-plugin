import { MarkdownOptions, EnumItem } from "../types";
import { parseMarkdown } from "./parseMarkdown";

export function convertEnumsToMarkdown(
  enums: EnumItem[],
  _: MarkdownOptions
): string {
  const lines: string[] = [];

  enums.forEach(({ type: en }) => {
    lines.push(`## ${en.name}`, `\n\n`);
    lines.push(en.description || "", `\n\n`);

    lines.push(
      `<p style={{ marginBottom: "0.4em" }}><strong>Values</strong></p>`,
      `\n\n`
    );

    lines.push(`<table>`, `\n`);
    lines.push(
      `<thead><tr><th>Value</th><th>Description</th></tr></thead>`,
      `\n`
    );
    lines.push(`<tbody>`, `\n`);

    en.getValues().forEach((value) => {
      lines.push(`<tr>`, `\n`);
      lines.push(`<td>${value.value}</td>`, `\n`);
      lines.push(`<td>`, `\n`);
      lines.push(parseMarkdown(value.description || ""), `\n`);
      lines.push(`</td>`, `\n`);
      lines.push(`</tr>`, `\n`);
    });

    lines.push(`</tbody>`, `\n`);
    lines.push(`</table>`, `\n\n`);
  });

  return lines.join("");
}
