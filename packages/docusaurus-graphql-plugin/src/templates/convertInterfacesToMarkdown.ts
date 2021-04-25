import { InterfaceItem, MarkdownOptions } from "../types";
import { pushFields } from "./pushFields";
import { pushInterfaces } from "./pushInterfaces";

export function convertInterfacesToMarkdown(
  interfaces: InterfaceItem[],
  { getTypePath }: MarkdownOptions
): string {
  const lines: string[] = [];

  interfaces.forEach(({ type: inter, implementedBy }) => {
    lines.push(`## ${inter.name}`, `\n\n`);
    lines.push(inter.description || "", `\n\n`);

    const subInterfaces = inter.getInterfaces();
    if (subInterfaces.length > 0) {
      pushInterfaces(lines, subInterfaces, { getTypePath });
    }

    if (implementedBy.length > 0) {
      lines.push(
        `<p style={{ marginBottom: "0.4em" }}><strong>Implemented by</strong></p>`,
        `\n\n`
      );
      implementedBy.forEach((object) => {
        lines.push(`- [${object.name}](${getTypePath(object)})`, `\n`);
      });
      lines.push(`\n`);
    }

    const fields = Object.values(inter.getFields());
    pushFields(lines, fields, { getTypePath });
  });

  return lines.join("");
}
