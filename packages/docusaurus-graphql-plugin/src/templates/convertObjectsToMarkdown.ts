import { MarkdownOptions, ObjectItem } from "../types";
import { pushFields } from "./pushFields";
import { pushInterfaces } from "./pushInterfaces";

export function convertObjectsToMarkdown(
  objects: ObjectItem[],
  { getTypePath }: MarkdownOptions
): string {
  const lines: string[] = [];

  objects.forEach(({ type: object }) => {
    lines.push(`## ${object.name}`, `\n\n`);
    lines.push(object.description || "", `\n\n`);

    const interfaces = object.getInterfaces();
    if (interfaces.length > 0) {
      pushInterfaces(lines, interfaces, { getTypePath });
    }

    const fields = Object.values(object.getFields());
    pushFields(lines, fields, { getTypePath });
  });

  return lines.join("");
}
