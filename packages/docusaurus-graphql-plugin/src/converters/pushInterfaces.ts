import { GraphQLInterfaceType } from "graphql";
import { MarkdownConverterOptions } from "../types";

export function pushInterfaces(
  lines: string[],
  interfaces: readonly GraphQLInterfaceType[],
  { getTypePath }: MarkdownConverterOptions
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
