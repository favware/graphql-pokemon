import { TypeArgs } from '#arguments/TypeArgs';
import { TypeService } from '#services/TypeService';
import { TypeMatchup } from '#structures/TypeMatchup';
import { getRequestedFields } from '#utils/getRequestedFields';
import { GraphQLSet } from '#utils/GraphQLSet';
import { Args, Query, Resolver } from 'type-graphql';

@Resolver(TypeMatchup)
export class TypeResolver {
  @Query(() => TypeMatchup, { description: 'Gets the type matchup data for the given type or types' })
  public getTypeMatchup(@Args(() => TypeArgs) args: TypeArgs, @getRequestedFields() requestedFields: GraphQLSet<keyof TypeMatchup>): TypeMatchup {
    const entry = TypeService.mapTypesToTypeMatchupGraphQL(args, requestedFields);

    if (entry === undefined) {
      throw new Error(`Failed to get type matchups for: ${args.types.join(', ')}`);
    }

    return entry;
  }
}
