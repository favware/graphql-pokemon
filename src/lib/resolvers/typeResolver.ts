import { mapTypesToTypeMatchupGraphQL } from '#mappers/typeMatchupMapper';
import type { TypeMatchup } from '#types/graphql-mapped-types';
import type { GraphQLSet } from '#utils/GraphQLSet';
import { validateGetTypeMatchupArgs, type GetTypeMatchupArgs } from '#validations/getTypeMatchupArgs';

export function getTypeMatchup(args: GetTypeMatchupArgs, requestedFields: GraphQLSet<keyof TypeMatchup>): TypeMatchup {
  args = validateGetTypeMatchupArgs(args);

  const entry = mapTypesToTypeMatchupGraphQL(args, requestedFields);

  if (entry === undefined) {
    const resolvedTypeMatchupArgs = args.secondaryType ? `${args.primaryType} and ${args.secondaryType}` : args.primaryType;
    throw new Error(`Failed to get type matchups for ${resolvedTypeMatchupArgs}`);
  }

  return entry;
}
