import {ArgsType, Field} from 'type-graphql';
import PaginatedArgs from './PaginatedArgs';

@ArgsType()
export default class PokemonPaginatedArgs extends PaginatedArgs {
  @Field(() => String, { description: 'The pokemon to look up' })
  pokemon: string;
}