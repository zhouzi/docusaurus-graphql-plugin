import { MarkdownOptions, MutationItem } from "../types";
import { pushArguments } from "./pushArguments";

export function convertMutationsToMarkdown(
  mutations: MutationItem[],
  { getTypePath }: MarkdownOptions
): string {
  const lines: string[] = [];

  mutations.forEach(({ type: mutation }) => {
    lines.push(`## ${mutation.name}`, `\n\n`);
    lines.push(
      `**Type:** [${mutation.type.inspect()}](${getTypePath(mutation.type)})`,
      `\n\n`
    );
    lines.push(mutation.description || "", `\n\n`);

    if (mutation.args.length > 0) {
      pushArguments(lines, mutation.args, { getTypePath });
    }
  });

  return lines.join("");
}
