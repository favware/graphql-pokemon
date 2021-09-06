import PaginatedArgs from '#arguments/PaginatedArgs';
import pokedex from '#assets/pokedex';
import { ArgsType, Field } from 'type-graphql';

export const pokemons = pokedex.enumObject();

@ArgsType()
export default class ExactPokemonPaginatedArgs extends PaginatedArgs {
  @Field(() => pokemons, { description: 'The Pokémon to look up' })
  public pokemon!: string;
}
