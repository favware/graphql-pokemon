import { moves, pokemons } from '#utils/enums';
import { ArrayMinSize, ArrayUnique, IsIn, IsNumber, IsString } from 'class-validator';
import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export class LearnsetArgs {
  @Field(() => Int, { nullable: true, description: 'The generation filter to apply' })
  @IsNumber()
  @IsIn([1, 2, 3, 4, 5, 6, 7, 8])
  public generation?: number;

  @Field(() => [moves], { description: 'The moves to match against the Pokémon' })
  @ArrayUnique()
  @ArrayMinSize(1)
  public moves!: string[];

  @Field(() => pokemons, { description: 'The Pokémon for which to get the learnset' })
  @IsString()
  public pokemon!: string;
}
