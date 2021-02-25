import marked from "marked";

declare module "marked" {
  namespace Tokens {
    interface Def {
      type: "def";
      raw: string;
      href: string;
      title: string;
    }
  }
}
