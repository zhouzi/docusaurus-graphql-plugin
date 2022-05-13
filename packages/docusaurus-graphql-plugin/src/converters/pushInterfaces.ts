import { GraphQLInterfaceType } from "graphql";
import { MarkdownConverterOptions } from "../types";

export function pushInterfaces(
  lines: string[],
  interfaces: readonly GraphQLInterfaceType[],
  options: MarkdownConverterOptions
): void {
  lines.push(
    `<p style={{ marginBottom: "0.4em" }}><strong>Implements</strong></p>`,
    `\n\n`
  );
  interfaces.forEach((inter) => {
    const typeUrl = options.getTypePath(inter);
    lines.push(
      typeUrl ? `- [${inter.name}](${typeUrl})` : `- ${inter.name}`,
      `\n`
    );
  });
  lines.push(`\n`);
}
