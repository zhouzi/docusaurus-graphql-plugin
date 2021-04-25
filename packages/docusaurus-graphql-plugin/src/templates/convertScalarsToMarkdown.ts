import { MarkdownOptions, ScalarItem } from "../types";

export function convertScalarsToMarkdown(
  scalars: ScalarItem[],
  _: MarkdownOptions
): string {
  const lines: string[] = [];

  scalars.forEach(({ type: scalar }) => {
    lines.push(`## ${scalar.name}`, `\n\n`);
    lines.push(scalar.description || "", `\n\n`);
  });

  return lines.join("");
}
