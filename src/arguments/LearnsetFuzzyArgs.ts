import { ArgsType, Field } from 'type-graphql';
import LearnsetArgs from './LearnsetArgs';
import { ArrayMinSize, ArrayUnique } from 'class-validator';

@ArgsType()
export default class LearnsetFuzzyArgs extends LearnsetArgs {
  @Field(() => String, { description: 'The Pokémon for which to get the learnset' })
  pokemon: string;

  @Field(() => [ String ], { description: 'The moves to match against the Pokémon' })
  @ArrayUnique()
  @ArrayMinSize(1)
  moves: string[];
}