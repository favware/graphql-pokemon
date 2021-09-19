import { IsNumber, Max, Min } from 'class-validator';
import { ArgsType, Field, Int } from 'type-graphql';
import { BasePokemonArgs } from '#arguments/PokemonArgs/Base';

@ArgsType()
export class PokemonNumberArgs extends BasePokemonArgs {
  @Field(() => Int, { description: 'The International PokéDex number of the Pokémon to look up' })
  @IsNumber()
  @Min(-60)
  @Max(898)
  public number!: number;
}
