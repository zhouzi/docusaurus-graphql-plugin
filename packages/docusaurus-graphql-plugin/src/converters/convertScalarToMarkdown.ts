import { GraphQLScalarType } from "graphql";
import { MarkdownConverterOptions } from "../types";
import { parseMarkdown } from "./parseMarkdown";

export function convertScalarToMarkdown(
  scalar: GraphQLScalarType,
  _: MarkdownConverterOptions
): string {
  const lines: string[] = [];

  lines.push(`## ${scalar.name}`, `\n\n`);
  lines.push(parseMarkdown(scalar.description || ""), `\n\n`);

  return lines.join("");
}
