import LearnsetArgs from '#arguments/LearnsetArgs';
import LearnsetFuzzyArgs from '#arguments/LearnsetFuzzyArgs';
import DexService from '#services/DexService';
import LearnsetService from '#services/LearnsetService';
import MoveService from '#services/MoveService';
import LearnsetEntry from '#structures/LearnsetEntry';
import { getRequestedFields } from '#utils/getRequestedFields';
import GraphQLSet from '#utils/GraphQLSet';
import Util from '#utils/util';
import { Args, Query, Resolver } from 'type-graphql';

@Resolver(LearnsetEntry)
export default class LearnsetResolver {
  private learnsetService: LearnsetService;
  private dexService: DexService;
  private moveService: MoveService;

  public constructor() {
    this.learnsetService = new LearnsetService();
    this.dexService = new DexService();
    this.moveService = new MoveService();
  }

  @Query(() => LearnsetEntry, {
    description: [
      'Gets the learnsets for a given Pokémon and move.',
      'Multiple moves are possible by putting them in an array: [move1, move2].',
      'You can also apply a generation filter (only results for the given generation will be returned) with the generation argument'
    ].join('')
  })
  public getPokemonLearnset(
    @Args() { pokemon, moves, generation }: LearnsetArgs,
    @getRequestedFields() requestedFields: GraphQLSet<keyof LearnsetEntry>
  ): LearnsetEntry {
    const entry = this.learnsetService.findLearnsets({ pokemon, moves, generation }, requestedFields);

    if (entry === undefined) {
      throw new Error(
        [
          `Failed to get learnsets for the combination of pokemon "${pokemon}"`,
          `and move(s) "${moves.join(', ')}"`,
          generation ? `with generation filter set to ${generation}` : ''
        ].join(' ')
      );
    }

    return entry;
  }

  @Query(() => LearnsetEntry, {
    description: [
      'Gets the learnset for a given Pokémon and move.',
      'A fuzzy search is performed to find a matching Pokémon and move',
      'Multiple moves are possible by putting them in an array: [move1, move2].',
      'You can also apply a generation filter (only results for the given generation will be returned) with the generation argument'
    ].join('')
  })
  public getPokemonLearnsetByFuzzy(
    @Args() { pokemon, moves, generation }: LearnsetFuzzyArgs,
    @getRequestedFields() requestedFields: GraphQLSet<keyof LearnsetEntry>
  ): LearnsetEntry {
    const pokemonEntry = this.dexService.findBySpecies(pokemon);

    if (!pokemonEntry) {
      const fuzzyEntry = this.dexService.getByFuzzy({ pokemon, skip: 0, take: 10 });
      if (fuzzyEntry === undefined) {
        throw new Error(`Failed to get data for Pokémon: ${pokemon}`);
      }
      pokemon = Util.toLowerSingleWordCase(fuzzyEntry[0].item.species);
    }

    for (const [index, move] of moves.entries()) {
      const moveEntry = this.moveService.findByName(move);
      if (!moveEntry) {
        const fuzzyEntry = this.moveService.findByFuzzy({
          move,
          skip: 0,
          take: 10,
          reverse: false
        });
        if (fuzzyEntry === undefined || !fuzzyEntry.length) {
          throw new Error(`Failed to get data for move: ${move}`);
        }
        moves[index] = Util.toLowerSingleWordCase(fuzzyEntry[0].item.name);
      }
    }

    return this.getPokemonLearnset({ pokemon, moves, generation }, requestedFields);
  }
}
