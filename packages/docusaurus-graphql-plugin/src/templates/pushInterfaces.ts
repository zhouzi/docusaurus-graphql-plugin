import { GraphQLInterfaceType } from "graphql";
import { MarkdownOptions } from "../types";

export function pushInterfaces(
  lines: string[],
  interfaces: GraphQLInterfaceType[],
  { getTypePath }: MarkdownOptions
): void {
  lines.push(
    `<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>`,
    `\n\n`
  );
  interfaces.forEach((inter) => {
    lines.push(`- [${inter.name}](${getTypePath(inter)})`, `\n`);
  });
  lines.push(`\n`);
}
