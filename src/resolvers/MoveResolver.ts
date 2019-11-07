import { Resolver, Query, Args, Arg } from 'type-graphql';
import MoveEntry from '../structures/MoveEntry';
import MoveService from '../services/MoveService';
import MovePaginatedArgs from '../arguments/MovePaginatedArgs';
import Util from '../utils/util';
import { GraphQLJSONObject } from 'graphql-type-json';

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
    ].join(''),
  })
  getMoveDetailsByFuzzy(@Args() {
    move, skip, take, reverse,
  }: MovePaginatedArgs) {
    const entry = this.moveService.findByName(move);

    if (!entry) {
      const fuzzyEntry = this.moveService.findByFuzzy({
        move, skip, take, reverse,
      });
      if (fuzzyEntry === undefined || !fuzzyEntry.length) {
        throw new Error(`Failed to get data for move: ${move}`);
      }
      move = Util.toLowerSingleWordCase(fuzzyEntry[0].name);
    }

    const detailsEntry = this.moveService.findByNameWithDetails(move);
    if (detailsEntry === undefined) {
      throw new Error(`Failed to get data for move: ${move}`);
    }

    return detailsEntry;
  }

  @Query(() => MoveEntry, {
    description: [
      'Gets details on a single move based on an exact name match.'
    ].join(''),
  })
  getMoveDetailsByName(@Arg('move') move: string) {
    const entry = this.moveService.findByNameWithDetails(move);

    if (entry === undefined) {
      throw new Error(`Failed to get data for move: ${move}`);
    }

    return entry;
  }

  @Query(() => [ GraphQLJSONObject ], {
    description: [
      'Gets raw entries of multiple moves based on a fuzzy search.',
      'You can supply skip and take to limit the amount of flavour texts to return and reverse to show latest games on top.',
      'Reversal is applied before pagination!'
    ].join(''),
  })
  getMoveByFuzzy(@Args() {
    move, skip, take, reverse,
  }: MovePaginatedArgs) {
    const moveEntries = this.moveService.findByFuzzy({
      move, skip, take, reverse,
    });

    if (moveEntries === undefined) {
      throw new Error(`Failed to get data for move: ${move}`);
    }

    return moveEntries;
  }

  @Query(() => GraphQLJSONObject, { description: 'Gets the raw entry of a single move based on name.' })
  getMoveByName(@Arg('move') move: string) {
    const moveEntry = this.moveService.findByName(move);

    if (moveEntry === undefined) {
      throw new Error(`Failed to get data for move: ${move}`);
    }

    return moveEntry;
  }
}