import { GraphQLInputObjectType } from "graphql";
import { MarkdownConverterOptions } from "../types";
import { parseMarkdown } from "./parseMarkdown";
import { pushArguments } from "./pushArguments";

export function convertInputObjectToMarkdown(
  inputObject: GraphQLInputObjectType,
  options: MarkdownConverterOptions
): string {
  const lines: string[] = [];

  lines.push(`## ${inputObject.name}`, `\n\n`);
  lines.push(parseMarkdown(inputObject.description || ""), `\n\n`);

  pushArguments(lines, Object.values(inputObject.getFields()), options);

  return lines.join("");
}
