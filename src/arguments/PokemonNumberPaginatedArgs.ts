import PaginatedArgs from '#arguments/PaginatedArgs';
import { Max, Min } from 'class-validator';
import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export default class PokemonNumberPaginatedArgs extends PaginatedArgs {
  @Field(() => Int, { description: 'The International PokéDex number of the Pokémon to look up' })
  @Min(-60)
  @Max(898)
  public pokemon!: number;
}
