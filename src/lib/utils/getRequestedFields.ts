import { GraphQLSet } from '#utils/GraphQLSet';
import type { GraphQLResolveInfo } from 'graphql';
import { parseResolveInfo, type FieldsByTypeName, type ResolveTree } from 'graphql-parse-resolve-info';

function infoIsResolveTree(info?: ResolveTree | FieldsByTypeName | null): info is ResolveTree {
  if (!info) return false;
  return (info as ResolveTree).fieldsByTypeName !== undefined;
}

function collectRequestedFields<T extends string>(
  fieldsToParse: Record<string, ResolveTree>,
  collectedFields: GraphQLSet<T> = new GraphQLSet<T>(),
  parent = ''
): GraphQLSet<T> {
  for (const fieldValue of Object.values(fieldsToParse)) {
    if (Object.keys(fieldValue.fieldsByTypeName).length === 0) {
      if (parent && !collectedFields.has(parent as T)) {
        collectedFields.add(parent as T);
      }
      collectedFields.add(`${parent ? `${parent}.` : ''}${fieldValue.name}` as T);
    } else {
      collectRequestedFields(Object.values(fieldValue.fieldsByTypeName)[0], collectedFields, `${parent ? `${parent}.` : ''}${fieldValue.name}`);
    }
  }

  return collectedFields;
}

export function graphqlResolveInfoToRequestedFields<T extends string>(info: GraphQLResolveInfo): GraphQLSet<T> {
  const resolvedInfo = parseResolveInfo(info, { deep: true });
  if (infoIsResolveTree(resolvedInfo)) {
    return collectRequestedFields<T>(Object.values(resolvedInfo.fieldsByTypeName)[0]);
  }

  return new GraphQLSet<T>();
}
