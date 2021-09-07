import { MovePaginatedArgs, moves } from '#arguments/MovePaginatedArgs';
import { moveAliases } from '#assets/aliases';
import { MoveService } from '#services/MoveService';
import { MoveEntry } from '#structures/MoveEntry';
import { getRequestedFields } from '#utils/getRequestedFields';
import type { GraphQLSet } from '#utils/GraphQLSet';
import { preParseInput, toLowerSingleWordCase } from '#utils/util';
import { Arg, Args, Query, Resolver } from 'type-graphql';

@Resolver(MoveEntry)
export class MoveResolver {
  private moveService: MoveService;

  public constructor() {
    this.moveService = new MoveService();
  }

  @Query(() => MoveEntry, {
    description: [
      'Gets details on a single move based on a fuzzy search.',
      'You can supply skip and take to paginate the fuzzy search and reverse to show teh least likely results on top',
      'Reversal is applied before paginations!'
    ].join('')
  })
  public getMoveDetailsByFuzzy(
    @Args() { move, skip, take, reverse }: MovePaginatedArgs,
    @getRequestedFields() requestedFields: GraphQLSet<keyof MoveEntry>
  ): MoveEntry {
    const preParsedMove = preParseInput(move);
    let entry = this.moveService.findByName(moveAliases.get(preParsedMove) ?? preParsedMove);

    if (!entry) {
      const fuzzyEntry = this.moveService.findByFuzzy({
        move,
        skip,
        take,
        reverse
      });

      if (fuzzyEntry === undefined || !fuzzyEntry.length) {
        throw new Error(`Failed to get data for move: ${move}`);
      }

      entry = this.moveService.findByName(toLowerSingleWordCase(fuzzyEntry[0].item.name));

      // If there is still no entry then throw an error
      if (!entry) {
        throw new Error(`No Move found for ${move}`);
      }
    }

    const detailsEntry = this.moveService.findByNameWithDetails(entry, requestedFields);

    if (detailsEntry === undefined) {
      throw new Error(`Failed to get data for move: ${move}`);
    }

    return detailsEntry;
  }

  @Query(() => MoveEntry, {
    description: ['Gets details on a single move based on an exact name match.'].join('')
  })
  public getMoveDetailsByName(@Arg('move', () => moves) move: string, @getRequestedFields() requestedFields: GraphQLSet<keyof MoveEntry>): MoveEntry {
    const entry = this.moveService.findByName(move);

    if (!entry) {
      throw new Error(`No Move found for ${move}`);
    }

    const details = this.moveService.findByNameWithDetails(entry, requestedFields);

    if (details === undefined) {
      throw new Error(`Failed to get data for move: ${move}`);
    }

    return details;
  }
}
