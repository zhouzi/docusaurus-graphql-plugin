import marked from "marked";

export function parseMarkdown(markdown: string): string {
  const walkTokens = (token: marked.Token) => {
    // make the Markdown compatible with MDX by escaping curly braces
    if (token.type === "text") {
      token.text = token.text
        .replace(/\{/g, "&lbrace;")
        .replace(/\}/g, "&rbrace;");
    }

    if (token.type === "codespan" || token.type === "code") {
      token.text = token.text.replace(/\{/g, "&#123;").replace(/\}/g, "&#125;");
    }
  };
  return marked
    .parse(markdown, {
      // marked's types are buggy
      walkTokens: walkTokens as any,
    })
    .trim();
}
