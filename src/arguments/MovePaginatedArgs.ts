import { ArgsType, Field } from 'type-graphql';
import moves from '../assets/moves';
import PaginatedArgs from './PaginatedArgs';

export const Moves = moves.enumObject();

@ArgsType()
export default class MovePaginatedArgs extends PaginatedArgs {
  @Field(() => String, { description: 'The move to look up' })
  move!: string;
}
