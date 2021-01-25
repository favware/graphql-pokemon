import { ArgsType, Field } from 'type-graphql';
import pokedex from '../assets/pokedex';
import PaginatedArgs from './PaginatedArgs';

export const pokemons = pokedex.enumObject();

@ArgsType()
export default class ExactPokemonPaginatedArgs extends PaginatedArgs {
  @Field(() => pokemons, { description: 'The pokemon to look up' })
  public pokemon!: string;
}
