import { ArgsType, Field } from 'type-graphql';
import { pokemons } from '#utils/enums';
import { BasePokemonArgs } from '#arguments/PokemonArgs/Base';
import { IsString } from 'class-validator';

@ArgsType()
export class PokemonArgs extends BasePokemonArgs {
  @Field(() => pokemons, { description: 'The Pokémon to look up' })
  @IsString()
  public pokemon!: string;
}
