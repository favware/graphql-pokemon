import typechart from '#assets/typechart';
import { ArrayMaxSize, ArrayMinSize, ArrayUnique } from 'class-validator';
import { ArgsType, Field } from 'type-graphql';

export const types = typechart.enumObject();

@ArgsType()
export default class TypeArgs {
  @Field(() => [types], { description: 'The types to check' })
  @ArrayUnique()
  @ArrayMinSize(1)
  @ArrayMaxSize(2)
  public types!: string[];
}
