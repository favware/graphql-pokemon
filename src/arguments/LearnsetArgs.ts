import { ArgsType, Field, Int } from 'type-graphql';
import { Pokemon } from './ExactPokemonPaginatedArgs';
import { Moves } from './MovePaginatedArgs';

@ArgsType()
export default class LearnsetArgs {
  @Field(() => Pokemon, { description: 'The Pokémon for which to get the learnset' })
  pokemon: string;

  @Field(() => [ Moves ], { description: 'The moves to match against the Pokémon ' })
  moves: string[];

  @Field(() => Int, { nullable: true, description: 'The generation filter to apply' })
  generation?: number;
}