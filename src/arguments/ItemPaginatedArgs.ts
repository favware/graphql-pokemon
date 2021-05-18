import PaginatedArgs from '#arguments/PaginatedArgs';
import itemData from '#assets/items';
import { ArgsType, Field } from 'type-graphql';

export const items = itemData.enumObject();

@ArgsType()
export default class ItemPaginatedArgs extends PaginatedArgs {
  @Field(() => String, { description: 'The item to look up' })
  public item!: string;
}
