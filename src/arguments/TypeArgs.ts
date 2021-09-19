import { types } from '#utils/enums';
import { ArrayMaxSize, ArrayMinSize, ArrayUnique } from 'class-validator';
import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class TypeArgs {
  @Field(() => [types], { description: 'The types to check' })
  @ArrayUnique()
  @ArrayMinSize(1)
  @ArrayMaxSize(2)
  public types!: string[];
}
