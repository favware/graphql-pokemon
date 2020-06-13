import { ArgsType, Field } from 'type-graphql';
import PaginatedArgs from './PaginatedArgs';
import pokedex from '../assets/pokedex';

export const pokemons = pokedex.enumObject();

@ArgsType()
export default class ExactPokemonPaginatedArgs extends PaginatedArgs {
  @Field(() => pokemons, { description: 'The pokemon to look up' })
  pokemon!: string;
}
