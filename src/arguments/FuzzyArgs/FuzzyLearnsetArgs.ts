import { LearnsetArgs } from '#arguments/LearnsetArgs';
import { ArrayMinSize, ArrayUnique, IsString } from 'class-validator';
import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class FuzzyLearnsetArgs extends LearnsetArgs {
  @Field(() => [String], { description: 'The moves to match against the Pokémon' })
  @ArrayUnique()
  @ArrayMinSize(1)
  public moves!: string[];

  @Field(() => String, { description: 'The Pokémon for which to get the learnset' })
  @IsString()
  public pokemon!: string;
}
