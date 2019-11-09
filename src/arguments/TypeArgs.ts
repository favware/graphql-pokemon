import { IsIn } from 'class-validator';
import { ArgsType, Field } from 'type-graphql';
import typechart from '../assets/typechart';

export const Types = typechart.enumObject();

@ArgsType()
export default class TypeArgs {
  @Field(() => Types, { description: 'The first type to check for'})
  @IsIn(typechart.keyArray())
  type: string;

  @Field(() => Types, { nullable: true, description: 'The secondary type to check for dual-typing'})
  @IsIn(typechart.keyArray())
  secondType?: string;
}