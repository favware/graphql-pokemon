import { GraphQLSet } from '#utils/GraphQLSet';
import { FieldsByTypeName, parseResolveInfo, ResolveTree } from 'graphql-parse-resolve-info';
import { createParamDecorator } from 'type-graphql';

function infoIsResolveTree(info?: ResolveTree | FieldsByTypeName | null): info is ResolveTree {
  if (!info) return false;
  return (info as ResolveTree).fieldsByTypeName !== undefined;
}

function collectRequestedFields(
  fieldsToParse: Record<string, ResolveTree>,
  collectedFields: GraphQLSet<string> = new GraphQLSet(),
  parent = ''
): GraphQLSet<string> {
  for (const fieldValue of Object.values(fieldsToParse)) {
    if (Object.keys(fieldValue.fieldsByTypeName).length === 0) {
      if (parent && !collectedFields.has(parent)) collectedFields.add(parent);
      collectedFields.add(`${parent ? `${parent}.` : ''}${fieldValue.name}`);
    } else {
      collectRequestedFields(Object.values(fieldValue.fieldsByTypeName)[0], collectedFields, `${parent ? `${parent}.` : ''}${fieldValue.name}`);
    }
  }
  return collectedFields;
}

export function getRequestedFields(): ParameterDecorator {
  return createParamDecorator(({ info }) => {
    const resolvedInfo = parseResolveInfo(info, { deep: true });

    if (infoIsResolveTree(resolvedInfo)) {
      return collectRequestedFields(Object.values(resolvedInfo.fieldsByTypeName)[0]);
    }

    return new GraphQLSet<string>();
  });
}
