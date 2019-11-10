import { Args, Query, Resolver } from 'type-graphql';
import LearnsetEntry from '../structures/LearnsetEntry';
import LearnsetService from '../services/LearnsetService';
import LearnsetArgs from '../arguments/LearnsetArgs';

@Resolver(LearnsetEntry)
export default class LearnsetResolver {
  private learnsetService: LearnsetService;

  constructor() {
    this.learnsetService = new LearnsetService();
  }

  @Query(() => LearnsetEntry, {
    description: [
      'Gets the learnsets for a given Pokémon and move.',
      'Multiple moves are possible by putting them in an array: [move1, move2].',
      'You can also apply a generation filter (only results for the given generation will be returned) with the generation argument'
    ].join(''),
  })
  getPokemonLearnset(@Args() { pokemon, moves, generation }: LearnsetArgs) {
    const entry = this.learnsetService.findLearnsets({ pokemon, moves, generation });

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
}