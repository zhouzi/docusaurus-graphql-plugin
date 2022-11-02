import marked from "marked";

export function parseMarkdown(markdown: string): string {
  const walkTokens = (token: marked.Token) => {
    if (
      token.type === "text" ||
      token.type === "codespan" ||
      token.type === "code"
    ) {
      // make the Markdown compatible with MDX by escaping curly braces
      token.text = token.text
        .replace(/\{/g, "&lbrace;")
        .replace(/\}/g, "&rbrace;");
    }
  };
  return marked
    .parse(markdown, {
      // marked's types are buggy
      walkTokens: walkTokens as any,
    })
    .trim();
}
