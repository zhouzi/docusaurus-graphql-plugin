import { MarkdownOptions, InputObjectItem } from "../types";
import { pushArguments } from "./pushArguments";

export function convertInputObjectsToMarkdown(
  inputObjects: InputObjectItem[],
  { getTypePath }: MarkdownOptions
): string {
  const lines: string[] = [];

  inputObjects.forEach(({ type: inputObject }) => {
    lines.push(`## ${inputObject.name}`, `\n\n`);
    lines.push(inputObject.description || "", `\n\n`);

    pushArguments(lines, Object.values(inputObject.getFields()), {
      getTypePath,
    });
  });

  return lines.join("");
}
