import { GraphQLType } from "graphql";

export interface MarkdownConverterOptions {
  getTypePath: (type: GraphQLType) => string;
}
