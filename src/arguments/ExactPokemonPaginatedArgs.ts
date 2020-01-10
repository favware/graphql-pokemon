import { ArgsType, Field } from 'type-graphql';
import PaginatedArgs from './PaginatedArgs';
import pokedex from '../assets/pokedex';

export const Pokemon = pokedex.enumObject();

@ArgsType()
export default class ExactPokemonPaginatedArgs extends PaginatedArgs {
  @Field(() => Pokemon, { description: 'The pokemon to look up' })
  pokemon: string;
}
