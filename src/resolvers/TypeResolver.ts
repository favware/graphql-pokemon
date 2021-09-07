import { TypeArgs } from '#arguments/TypeArgs';
import { TypeService } from '#services/TypeService';
import { TypeMatchups } from '#structures/TypeMatchups';
import { getRequestedFields } from '#utils/getRequestedFields';
import { GraphQLSet } from '#utils/GraphQLSet';
import { Args, Query, Resolver } from 'type-graphql';

@Resolver(TypeMatchups)
export class TypeResolver {
  private typeService: TypeService;

  public constructor() {
    this.typeService = new TypeService();
  }

  @Query(() => TypeMatchups, { description: 'Gets the type matchup data for the given type or types' })
  public getTypeMatchup(@Args() { types }: TypeArgs, @getRequestedFields() requestedFields: GraphQLSet<keyof TypeMatchups>): TypeMatchups {
    const entry = this.typeService.findTypeMatchups({ types }, requestedFields);

    if (entry === undefined) {
      throw new Error(`Failed to get type matchups for: ${types.join(', ')}`);
    }

    return entry;
  }
}
