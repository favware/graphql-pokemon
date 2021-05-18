import LearnsetArgs from '#arguments/LearnsetArgs';
import { ArrayMinSize, ArrayUnique } from 'class-validator';
import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export default class LearnsetFuzzyArgs extends LearnsetArgs {
  @Field(() => String, { description: 'The Pokémon for which to get the learnset' })
  public declare pokemon: string;

  @Field(() => [String], { description: 'The moves to match against the Pokémon' })
  @ArrayUnique()
  @ArrayMinSize(1)
  public declare moves: string[];
}
