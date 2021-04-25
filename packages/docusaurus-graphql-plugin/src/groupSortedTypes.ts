import {
  GraphQLNamedType,
  isEnumType,
  isInputObjectType,
  isInterfaceType,
  isObjectType,
  isScalarType,
  isUnionType,
} from "graphql";
import { GroupedTypes, InterfaceItem, TypeItem } from "./types";

function groupTypes(types: GraphQLNamedType[]): GroupedTypes {
  return types.reduce<GroupedTypes>(
    (acc, type) => {
      if (type.name.startsWith("__")) {
        return acc;
      }

      if (isObjectType(type)) {
        if (type.name === "Query") {
          return {
            ...acc,
            queries: Object.values(type.getFields()).map((query) => ({
              type: query,
            })),
          };
        }

        if (type.name === "Mutation") {
          return {
            ...acc,
            mutations: Object.values(type.getFields()).map((mutation) => ({
              type: mutation,
            })),
          };
        }

        type.getInterfaces().forEach((inter) => {
          acc.interfaces.forEach((otherInter) => {
            if (otherInter.type.name === inter.name) {
              otherInter.implementedBy.push(type);
            }
          });
        });

        return {
          ...acc,
          objects: acc.objects.concat([{ type }]),
        };
      }

      if (isInterfaceType(type)) {
        const interfaceItem: InterfaceItem = {
          type,
          implementedBy: [],
        };

        acc.objects.forEach(({ type: object }) => {
          object.getInterfaces().forEach((otherInterface) => {
            if (otherInterface.name === interfaceItem.type.name) {
              interfaceItem.implementedBy.push(object);
            }
          });
        });

        return {
          ...acc,
          interfaces: acc.interfaces.concat([interfaceItem]),
        };
      }

      if (isEnumType(type)) {
        return {
          ...acc,
          enums: acc.enums.concat([{ type }]),
        };
      }

      if (isUnionType(type)) {
        return {
          ...acc,
          unions: acc.unions.concat([{ type }]),
        };
      }

      if (isInputObjectType(type)) {
        return {
          ...acc,
          inputObjects: acc.inputObjects.concat([{ type }]),
        };
      }

      if (isScalarType(type)) {
        return {
          ...acc,
          scalars: acc.scalars.concat([{ type }]),
        };
      }

      return acc;
    },
    {
      queries: [],
      mutations: [],
      objects: [],
      interfaces: [],
      enums: [],
      unions: [],
      inputObjects: [],
      scalars: [],
    }
  );
}

function sortByName<T extends TypeItem<{ name: string }>>(types: T[]): T[] {
  return types.sort((a, b) => a.type.name.localeCompare(b.type.name));
}

function sortGroupedTypes(groupedTypes: GroupedTypes): GroupedTypes {
  return {
    queries: sortByName(groupedTypes.queries),
    mutations: sortByName(groupedTypes.mutations),
    objects: sortByName(groupedTypes.objects),
    interfaces: sortByName(groupedTypes.interfaces),
    enums: sortByName(groupedTypes.enums),
    unions: sortByName(groupedTypes.unions),
    inputObjects: sortByName(groupedTypes.inputObjects),
    scalars: sortByName(groupedTypes.scalars),
  };
}

export function groupSortedTypes(types: GraphQLNamedType[]): GroupedTypes {
  return sortGroupedTypes(groupTypes(types));
}
