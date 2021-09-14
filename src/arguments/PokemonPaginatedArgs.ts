import { PaginatedArgs } from '#arguments/PaginatedArgs';
import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class PokemonPaginatedArgs extends PaginatedArgs {
  @Field(() => String, { description: 'The Pokémon to look up' })
  public pokemon!: string;
}
