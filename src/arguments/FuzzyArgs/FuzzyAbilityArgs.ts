import { ArgsType, Field } from 'type-graphql';
import { IsString } from 'class-validator';
import { BaseFuzzyArgs } from '#arguments/FuzzyArgs/Base';

@ArgsType()
export class FuzzyAbilityArgs extends BaseFuzzyArgs {
  @Field(() => String, { description: 'The ability to fuzzily search' })
  @IsString()
  public ability!: string;
}
