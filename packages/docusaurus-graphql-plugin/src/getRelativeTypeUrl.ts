import {
  GraphQLNamedType,
  GraphQLType,
  isListType,
  isNonNullType,
} from "graphql";
import { Slugger } from "marked";
import { convertersList } from "./converters";

const slugger = new Slugger();
const sluggify = (name: string) => slugger.slug(name, { dryrun: true });

function getBaseType(type: GraphQLType): GraphQLNamedType {
  if (isNonNullType(type)) {
    return getBaseType(type.ofType);
  }

  if (isListType(type)) {
    return getBaseType(type.ofType);
  }

  return type;
}

export function getRelativeTypeUrl(type: GraphQLType): string {
  const baseType = getBaseType(type);
  const converter = convertersList.find((otherConverter) =>
    otherConverter.matches(baseType)
  );

  if (converter == null) {
    console.warn(
      `Failed to generate a relative URL to type "${baseType.name}"`
    );
    return `#`;
  }

  return `/${converter.id}#${sluggify(baseType.name)}`;
}
