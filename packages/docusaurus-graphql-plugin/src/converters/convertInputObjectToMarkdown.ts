import { GraphQLInputObjectType } from "graphql";
import { MarkdownConverterOptions } from "../types";
import { pushArguments } from "./pushArguments";

export function convertInputObjectToMarkdown(
  inputObject: GraphQLInputObjectType,
  options: MarkdownConverterOptions
): string {
  const lines: string[] = [];

  lines.push(`## ${inputObject.name}`, `\n\n`);
  lines.push(inputObject.description || "", `\n\n`);

  pushArguments(lines, Object.values(inputObject.getFields()), options);

  return lines.join("");
}
