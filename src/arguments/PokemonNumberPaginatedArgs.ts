import { Min, Max } from 'class-validator';
import { ArgsType, Field, Int } from 'type-graphql';
import PaginatedArgs from './PaginatedArgs';

@ArgsType()
export default class PokemonNumberPaginatedArgs extends PaginatedArgs {
  @Field(() => Int, { description: 'The International PokéDex number of the Pokémon to look up' })
  @Min(-60)
  @Max(898)
  public pokemon!: number;
}
