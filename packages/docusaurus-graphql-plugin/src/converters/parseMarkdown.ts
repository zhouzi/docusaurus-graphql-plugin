import marked from "marked";

export function escapeSpecialCharacters(str: string): string {
  return str.replace(/\{/g, "&#123;").replace(/\}/g, "&#125;");
}

export function parseMarkdown(markdown: string): string {
  const walkTokens = (token: marked.Token) => {
    if (token.type === "text" || token.type === "codespan") {
      // make the Markdown compatible with MDX by escaping curly braces
      token.text = escapeSpecialCharacters(token.text);
    }
  };
  return marked
    .parse(markdown, {
      // marked's types are buggy
      walkTokens: walkTokens as any,
    })
    .trim();
}
