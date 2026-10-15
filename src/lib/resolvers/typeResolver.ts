import { mapTypesToTypeMatchupGraphQL } from '#mappers/typeMatchupMapper';
import type { TypeMatchup } from '#types/graphql-mapped-types';
import type { GraphQLSet } from '#utils/GraphQLSet';
import { validateGetTypeMatchupArgs, type GetTypeMatchupArgs } from '#validations/getTypeMatchupArgs';

export function getTypeMatchup(args: GetTypeMatchupArgs, requestedFields: GraphQLSet<keyof TypeMatchup>): TypeMatchup {
	const validatedArgs = validateGetTypeMatchupArgs(args);

	const entry = mapTypesToTypeMatchupGraphQL(validatedArgs, requestedFields);

	if (entry === undefined) {
		const resolvedTypeMatchupArgs = validatedArgs.secondaryType
			? `${validatedArgs.primaryType} and ${validatedArgs.secondaryType}`
			: validatedArgs.primaryType;
		throw new Error(`Failed to get type matchups for ${resolvedTypeMatchupArgs}`);
	}

	return entry;
}
