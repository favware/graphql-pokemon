import type Fuse from 'fuse.js';
import { GraphQLJSONObject } from 'graphql-type-json';
import { Arg, Args, Query, Resolver } from 'type-graphql';
import MovePaginatedArgs, { moves } from '../arguments/MovePaginatedArgs';
import MoveService from '../services/MoveService';
import MoveEntry from '../structures/MoveEntry';
import { getRequestedFields } from '../utils/getRequestedFields';
import GraphQLSet from '../utils/GraphQLSet';
import type Pokemon from '../utils/pokemon';
import Util from '../utils/util';

@Resolver(MoveEntry)
export default class MoveResolver {
  private moveService: MoveService;

  constructor() {
    this.moveService = new MoveService();
  }

  @Query(() => MoveEntry, {
    description: [
      'Gets details on a single move based on a fuzzy search.',
      'You can supply skip and take to paginate the fuzzy search and reverse to show teh least likely results on top',
      'Reversal is applied before paginations!'
    ].join('')
  })
  getMoveDetailsByFuzzy(
    @Args() { move, skip, take, reverse }: MovePaginatedArgs,
    @getRequestedFields() requestedFields: GraphQLSet<keyof MoveEntry>
  ): MoveEntry {
    const entry = this.moveService.findByName(move);

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
      move = Util.toLowerSingleWordCase(fuzzyEntry[0].item.name);
    }

    const detailsEntry = this.moveService.findByNameWithDetails(move, requestedFields);
    if (detailsEntry === undefined) {
      throw new Error(`Failed to get data for move: ${move}`);
    }

    return detailsEntry;
  }

  @Query(() => MoveEntry, {
    description: ['Gets details on a single move based on an exact name match.'].join('')
  })
  getMoveDetailsByName(
    @Arg('move', () => moves) move: string,
    @getRequestedFields() requestedFields: GraphQLSet<keyof MoveEntry>
  ): MoveEntry {
    const entry = this.moveService.findByNameWithDetails(move, requestedFields);

    if (entry === undefined) {
      throw new Error(`Failed to get data for move: ${move}`);
    }

    return entry;
  }

  @Query(() => [GraphQLJSONObject], {
    description: [
      'Gets raw entries of multiple moves based on a fuzzy search.',
      'You can supply skip and take to limit the amount of flavour texts to return and reverse to show latest games on top.',
      'Reversal is applied before pagination!'
    ].join('')
  })
  getMoveByFuzzy(@Args() { move, skip, take, reverse }: MovePaginatedArgs): Fuse.FuseResult<Pokemon.Move>[] {
    const moveEntries = this.moveService.findByFuzzy({
      move,
      skip,
      take,
      reverse
    });

    if (moveEntries === undefined) {
      throw new Error(`Failed to get data for move: ${move}`);
    }

    return moveEntries;
  }

  @Query(() => GraphQLJSONObject, { description: 'Gets the raw entry of a single move based on name.' })
  getMoveByName(@Arg('move', () => moves) move: string): Pokemon.Move {
    const moveEntry = this.moveService.findByName(move);

    if (moveEntry === undefined) {
      throw new Error(`Failed to get data for move: ${move}`);
    }

    return moveEntry;
  }
}
