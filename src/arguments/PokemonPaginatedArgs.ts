import { ArgsType, Field } from 'type-graphql';
import PaginatedArgs from './PaginatedArgs';

@ArgsType()
export default class PokemonPaginatedArgs extends PaginatedArgs {
  @Field(() => String, { description: 'The Pokémon to look up' })
  public pokemon!: string;
}
