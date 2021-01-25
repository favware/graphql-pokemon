import { ArgsType, Field } from 'type-graphql';
import itemData from '../assets/items';
import PaginatedArgs from './PaginatedArgs';

export const items = itemData.enumObject();

@ArgsType()
export default class ItemPaginatedArgs extends PaginatedArgs {
  @Field(() => String, { description: 'The item to look up' })
  public item!: string;
}
