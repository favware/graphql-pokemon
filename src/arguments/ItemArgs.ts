import { ArgsType, Field } from 'type-graphql';
import { items } from '#utils/enums';
import { IsString } from 'class-validator';

@ArgsType()
export class ItemArgs {
  @Field(() => items, { description: 'The item to look up' })
  @IsString()
  public item!: string;
}
