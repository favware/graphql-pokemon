import { ArgsType, Field } from 'type-graphql';
import { BaseFuzzyArgs } from '#arguments/FuzzyArgs/Base';
import { IsString } from 'class-validator';

@ArgsType()
export class FuzzyItemArgs extends BaseFuzzyArgs {
  @Field(() => String, { description: 'The item to fuzzily search' })
  @IsString()
  public item!: string;
}
