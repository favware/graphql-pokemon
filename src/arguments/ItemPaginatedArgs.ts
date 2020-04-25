import { ArgsType, Field } from 'type-graphql';
import items from '../assets/items';
import PaginatedArgs from './PaginatedArgs';

export const Items = items.enumObject();

@ArgsType()
export default class ItemPaginatedArgs extends PaginatedArgs {
  @Field(() => String, { description: 'The item to look up' })
  item!: string;
}
