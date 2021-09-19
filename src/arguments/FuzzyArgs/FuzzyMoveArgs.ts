import { ArgsType, Field } from 'type-graphql';
import { BaseFuzzyArgs } from '#arguments/FuzzyArgs/Base';
import { IsString } from 'class-validator';

@ArgsType()
export class FuzzyMoveArgs extends BaseFuzzyArgs {
  @Field(() => String, { description: 'The move to fuzzily search' })
  @IsString()
  public move!: string;
}
