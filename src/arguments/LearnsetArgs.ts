import { pokemons } from '#arguments/ExactPokemonPaginatedArgs';
import { moves } from '#arguments/MovePaginatedArgs';
import { ArrayMinSize, ArrayUnique, IsIn } from 'class-validator';
import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export default class LearnsetArgs {
  @Field(() => pokemons, { description: 'The Pokémon for which to get the learnset' })
  public pokemon!: string;

  @Field(() => [moves], { description: 'The moves to match against the Pokémon' })
  @ArrayUnique()
  @ArrayMinSize(1)
  public moves!: string[];

  @Field(() => Int, { nullable: true, description: 'The generation filter to apply' })
  @IsIn([1, 2, 3, 4, 5, 6, 7, 8])
  public generation?: number;
}
