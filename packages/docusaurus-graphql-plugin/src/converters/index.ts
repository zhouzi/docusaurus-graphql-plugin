import {
  GraphQLEnumType,
  GraphQLInputObjectType,
  GraphQLInterfaceType,
  GraphQLNamedType,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLSchema,
  GraphQLUnionType,
  isEnumType,
  isInputObjectType,
  isInterfaceType,
  isObjectType,
  isScalarType,
  isUnionType,
  OperationTypeNode,
} from "graphql";
import { MarkdownConverterOptions } from "../types";
import { convertEnumToMarkdown } from "./convertEnumToMarkdown";
import { convertInputObjectToMarkdown } from "./convertInputObjectToMarkdown";
import { convertInterfaceToMarkdown } from "./convertInterfaceToMarkdown";
import { convertMutationToMarkdown } from "./convertMutationToMarkdown";
import { convertObjectToMarkdown } from "./convertObjectToMarkdown";
import { convertQueryToMarkdown } from "./convertQueryToMarkdown";
import { convertScalarToMarkdown } from "./convertScalarToMarkdown";
import { convertUnionToMarkdown } from "./convertUnionToMarkdown";

function sortTypesByName<T extends { name: string }>(types: T[]): T[] {
  return types.sort((a, b) => a.name.localeCompare(b.name));
}

export const convertersMap = {
  queries: {
    id: "queries",
    title: "Queries",
    matches(): boolean {
      return false;
    },
    convertToMarkdown(
      schema: GraphQLSchema,
      options: MarkdownConverterOptions
    ): string {
      const rootType = schema.getRootType(OperationTypeNode.QUERY);
      const queries = rootType
        ? sortTypesByName(Object.values(rootType.getFields()))
        : [];
      return queries
        .map((query) => convertQueryToMarkdown(query, options))
        .join("");
    },
  },
  mutations: {
    id: "mutations",
    title: "Mutations",
    matches(): boolean {
      return false;
    },
    convertToMarkdown(
      schema: GraphQLSchema,
      options: MarkdownConverterOptions
    ): string {
      const rootType = schema.getRootType(OperationTypeNode.MUTATION);
      const mutations = rootType
        ? sortTypesByName(Object.values(rootType.getFields()))
        : [];
      return mutations
        .map((mutation) => convertMutationToMarkdown(mutation, options))
        .join("");
    },
  },
  objects: {
    id: "objects",
    title: "Objects",
    matches(type: GraphQLNamedType): boolean {
      return (
        isObjectType(type) &&
        !["Query", "Mutation", "Subscription"].includes(type.name) &&
        !type.name.startsWith("__")
      );
    },
    convertToMarkdown(
      schema: GraphQLSchema,
      options: MarkdownConverterOptions
    ): string {
      const objects = sortTypesByName(
        Object.values(
          schema.getTypeMap()
        ).filter((type): type is GraphQLObjectType => this.matches(type))
      );
      return objects
        .map((object) => convertObjectToMarkdown(object, options))
        .join("");
    },
  },
  interfaces: {
    id: "interfaces",
    title: "Interfaces",
    matches(type: GraphQLNamedType): boolean {
      return isInterfaceType(type);
    },
    convertToMarkdown(
      schema: GraphQLSchema,
      options: MarkdownConverterOptions
    ): string {
      const interfaces = sortTypesByName(
        Object.values(
          schema.getTypeMap()
        ).filter((type): type is GraphQLInterfaceType => this.matches(type))
      );
      return interfaces
        .map((inter) => {
          const implementedBy = Object.values(schema.getTypeMap()).filter(
            (type): type is GraphQLObjectType | GraphQLInterfaceType =>
              (isObjectType(type) || isInterfaceType(type)) &&
              type
                .getInterfaces()
                .some((otherInter) => otherInter.name === inter.name)
          );
          return convertInterfaceToMarkdown(inter, implementedBy, options);
        })
        .join("");
    },
  },
  enums: {
    id: "enums",
    title: "Enums",
    matches(type: GraphQLNamedType): boolean {
      return isEnumType(type) && !type.name.startsWith("__");
    },
    convertToMarkdown(
      schema: GraphQLSchema,
      options: MarkdownConverterOptions
    ): string {
      const enums = sortTypesByName(
        Object.values(
          schema.getTypeMap()
        ).filter((type): type is GraphQLEnumType => this.matches(type))
      );
      return enums.map((enm) => convertEnumToMarkdown(enm, options)).join("");
    },
  },
  unions: {
    id: "unions",
    title: "Unions",
    matches(type: GraphQLNamedType): boolean {
      return isUnionType(type);
    },
    convertToMarkdown(
      schema: GraphQLSchema,
      options: MarkdownConverterOptions
    ): string {
      const unions = sortTypesByName(
        Object.values(
          schema.getTypeMap()
        ).filter((type): type is GraphQLUnionType => this.matches(type))
      );
      return unions
        .map((union) => convertUnionToMarkdown(union, options))
        .join("");
    },
  },
  inputObjects: {
    id: "inputObjects",
    title: "Input objects",
    matches(type: GraphQLNamedType): boolean {
      return isInputObjectType(type);
    },
    convertToMarkdown(
      schema: GraphQLSchema,
      options: MarkdownConverterOptions
    ): string {
      const inputObjects = sortTypesByName(
        Object.values(
          schema.getTypeMap()
        ).filter((type): type is GraphQLInputObjectType => this.matches(type))
      );
      return inputObjects
        .map((inputObject) =>
          convertInputObjectToMarkdown(inputObject, options)
        )
        .join("");
    },
  },
  scalars: {
    id: "scalars",
    title: "Scalars",
    matches(type: GraphQLNamedType): boolean {
      return isScalarType(type);
    },
    convertToMarkdown(
      schema: GraphQLSchema,
      options: MarkdownConverterOptions
    ): string {
      const scalars = sortTypesByName(
        Object.values(
          schema.getTypeMap()
        ).filter((type): type is GraphQLScalarType => this.matches(type))
      );
      return scalars
        .map((scalar) => convertScalarToMarkdown(scalar, options))
        .join("");
    },
  },
};

export const convertersList = Object.values(convertersMap);
