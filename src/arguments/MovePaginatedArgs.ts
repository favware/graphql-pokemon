import { ArgsType, Field } from 'type-graphql';
import moveData from '../assets/moves';
import PaginatedArgs from './PaginatedArgs';

export const moves = moveData.enumObject();

@ArgsType()
export default class MovePaginatedArgs extends PaginatedArgs {
  @Field(() => String, { description: 'The move to look up' })
  public move!: string;
}
