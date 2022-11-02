import { GraphQLObjectType } from "graphql";
import { MarkdownConverterOptions } from "../types";
import { parseMarkdown } from "./parseMarkdown";
import { pushFields } from "./pushFields";
import { pushInterfaces } from "./pushInterfaces";

export function convertObjectToMarkdown(
  object: GraphQLObjectType,
  options: MarkdownConverterOptions
): string {
  const lines: string[] = [];

  lines.push(`## ${object.name}`, `\n\n`);
  lines.push(parseMarkdown(object.description || ""), `\n\n`);

  const interfaces = object.getInterfaces();
  if (interfaces.length > 0) {
    pushInterfaces(lines, interfaces, options);
  }

  const fields = Object.values(object.getFields());
  pushFields(lines, fields, options);

  return lines.join("");
}
