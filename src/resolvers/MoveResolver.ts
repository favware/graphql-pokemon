import { FuzzyMoveArgs } from '#arguments/FuzzyArgs/FuzzyMoveArgs';
import { MoveArgs } from '#arguments/MoveArgs';
import { MoveService } from '#services/MoveService';
import { Move } from '#structures/Move';
import { getRequestedFields } from '#utils/getRequestedFields';
import type { GraphQLSet } from '#utils/GraphQLSet';
import { Args, Query, Resolver } from 'type-graphql';

@Resolver(Move)
export class MoveResolver {
  @Query(() => Move, {
    description: 'Gets the details on a Pokémon move, using the move name'
  })
  public getMove(@Args(() => MoveArgs) args: MoveArgs, @getRequestedFields() requestedFields: GraphQLSet<keyof Move>): Move {
    const moveData = MoveService.getByMoveName(args);

    if (!moveData) {
      throw new Error(`No move found for ${args.move}`);
    }

    const graphqlObject = MoveService.mapMoveDataToMoveGraphQL({
      data: moveData,
      requestedFields
    });

    if (!graphqlObject) {
      throw new Error(`Failed to get data for move: ${args.move}`);
    }

    return graphqlObject;
  }

  @Query(() => [Move], {
    description: [
      'Gets details on a Pokémon move, using a fuzzy search on name',
      'This can be used to find multiple results based on the query',
      'By default only 1 result is returned. You can provide the arguments "take", "offset", and "reverse" to modify this behaviour.'
    ].join('\n')
  })
  public getFuzzyMove(@Args(() => FuzzyMoveArgs) args: FuzzyMoveArgs, @getRequestedFields() requestedFields: GraphQLSet<keyof Move>): Move[] {
    const fuzzyEntry = MoveService.findByFuzzy(args);

    if (!fuzzyEntry.length) {
      throw new Error(`No moves found for: ${args.move}`);
    }

    const graphqlObjects = fuzzyEntry.map((moveData) => MoveService.mapMoveDataToMoveGraphQL({ data: moveData, requestedFields }));

    if (!graphqlObjects.length) {
      throw new Error(`Failed to get data for move: ${args.move}`);
    }

    return graphqlObjects;
  }
}
