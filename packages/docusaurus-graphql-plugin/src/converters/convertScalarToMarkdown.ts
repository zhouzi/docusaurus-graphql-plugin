import { GraphQLScalarType } from "graphql";
import { MarkdownConverterOptions } from "../types";

export function convertScalarToMarkdown(
  scalar: GraphQLScalarType,
  _: MarkdownConverterOptions
): string {
  const lines: string[] = [];

  lines.push(`## ${scalar.name}`, `\n\n`);
  lines.push(scalar.description || "", `\n\n`);

  return lines.join("");
}
