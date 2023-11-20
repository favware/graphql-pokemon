import { GraphQLSet } from '#utils/GraphQLSet';
import type { GraphQLResolveInfo } from 'graphql';
import { parseResolveInfo, type FieldsByTypeName, type ResolveTree } from 'graphql-parse-resolve-info';

/**
 * Checks if the provided `info` object is an instance of `ResolveTree`.
 * @param info - The object to be checked.
 * @returns `true` if `info` is an instance of `ResolveTree`, `false` otherwise.
 */
function infoIsResolveTree(info?: ResolveTree | FieldsByTypeName | null): info is ResolveTree {
  if (!info) return false;
  return (info as ResolveTree).fieldsByTypeName !== undefined;
}

/**
 * Collects the requested fields from a given set of fields to parse.
 *
 * @template T - The type of the collected fields.
 * @param fieldsToParse - The fields to parse.
 * @param collectedFields - The set of collected fields (optional, defaults to an empty set).
 * @param parent - The parent field (optional, defaults to an empty string).
 * @returns The set of collected fields.
 */
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

/**
 * Converts a GraphQLResolveInfo object to a set of requested fields.
 * @param info The GraphQLResolveInfo object.
 * @returns A GraphQLSet containing the requested fields.
 */
export function graphqlResolveInfoToRequestedFields<T extends string>(info: GraphQLResolveInfo): GraphQLSet<T> {
  const resolvedInfo = parseResolveInfo(info, { deep: true });
  if (infoIsResolveTree(resolvedInfo)) {
    return collectRequestedFields<T>(Object.values(resolvedInfo.fieldsByTypeName)[0]);
  }

  return new GraphQLSet<T>();
}
