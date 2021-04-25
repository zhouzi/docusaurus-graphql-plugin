import { MarkdownOptions, UnionItem } from "../types";

export function convertUnionsToMarkdown(
  unions: UnionItem[],
  { getTypePath }: MarkdownOptions
): string {
  const lines: string[] = [];

  unions.forEach(({ type: union }) => {
    lines.push(`## ${union.name}`, `\n\n`);
    lines.push(union.description || "", `\n\n`);

    lines.push(
      `<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>`,
      `\n\n`
    );
    union.getTypes().forEach((type) => {
      lines.push(`- [${type.name}](${getTypePath(type)})`, `\n`);
    });
    lines.push(`\n`);
  });

  return lines.join("");
}
