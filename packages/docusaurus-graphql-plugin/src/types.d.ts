import {
  GraphQLEnumType,
  GraphQLField,
  GraphQLInputObjectType,
  GraphQLInterfaceType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLUnionType,
} from "graphql";

export interface TypeItem<T> {
  type: T;
}
export interface QueryItem extends TypeItem<GraphQLField<any, any>> {}
export interface MutationItem extends TypeItem<GraphQLField<any, any>> {}
export interface ObjectItem extends TypeItem<GraphQLObjectType> {}
export interface InterfaceItem extends TypeItem<GraphQLInterfaceType> {
  implementedBy: Array<GraphQLObjectType | GraphQLInterfaceType>;
}
export interface EnumItem extends TypeItem<GraphQLEnumType> {}
export interface UnionItem extends TypeItem<GraphQLUnionType> {}
export interface InputObjectItem extends TypeItem<GraphQLInputObjectType> {}
export interface ScalarItem extends TypeItem<GraphQLScalarType> {}
export interface GroupedTypes {
  queries: QueryItem[];
  mutations: MutationItem[];
  objects: ObjectItem[];
  interfaces: InterfaceItem[];
  enums: EnumItem[];
  unions: UnionItem[];
  inputObjects: InputObjectItem[];
  scalars: ScalarItem[];
}
export interface MarkdownOptions {
  getTypePath: (
    type:
      | GraphQLScalarType
      | GraphQLObjectType
      | GraphQLInterfaceType
      | GraphQLUnionType
      | GraphQLEnumType
      | GraphQLList<any>
      | GraphQLInputObjectType
      | GraphQLNonNull<any>
  ) => string;
}

export interface PluginOptions {
  id: string;
  schema: string;
  routeBasePath: string;
  sidebar?: {
    label: string;
    position: number;
  }
}
