import { GraphQLInterfaceType, GraphQLObjectType } from "graphql";
import { MarkdownConverterOptions } from "../types";
import { pushFields } from "./pushFields";
import { pushInterfaces } from "./pushInterfaces";

export function convertInterfaceToMarkdown(
  inter: GraphQLInterfaceType,
  implementedBy: Array<GraphQLObjectType | GraphQLInterfaceType>,
  options: MarkdownConverterOptions
): string {
  const lines: string[] = [];

  lines.push(`## ${inter.name}`, `\n\n`);
  lines.push(inter.description || "", `\n\n`);

  const subInterfaces = inter.getInterfaces();
  if (subInterfaces.length > 0) {
    pushInterfaces(lines, subInterfaces, options);
  }

  if (implementedBy.length > 0) {
    lines.push(
      `<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>`,
      `\n\n`
    );
    implementedBy.forEach((object) => {
      const typeUrl = options.getTypePath(object);
      lines.push(
        typeUrl ? `- [${object.name}](${typeUrl})` : `- ${object.name}`,
        `\n`
      );
    });
    lines.push(`\n`);
  }

  const fields = Object.values(inter.getFields());
  pushFields(lines, fields, options);

  return lines.join("");
}
