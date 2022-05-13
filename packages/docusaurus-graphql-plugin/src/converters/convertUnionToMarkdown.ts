import { GraphQLUnionType } from "graphql";
import { MarkdownConverterOptions } from "../types";

export function convertUnionToMarkdown(
  union: GraphQLUnionType,
  { getTypePath }: MarkdownConverterOptions
): string {
  const lines: string[] = [];

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

  return lines.join("");
}
