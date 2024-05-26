import type { NonNullish } from '#types/utility-types';
import { basePokemonArgsSchema, type BasePokemonArgs } from '#validations/pokemonArgs/base';
import { s, type SchemaOf } from '@sapphire/shapeshift';

export interface GetPokemonByDexNumberArgs extends BasePokemonArgs {
  /**
   * The International PokéDex number of the Pokémon to look up
   */
  number: number;
}

const getPokemonByDexNumberSchema: SchemaOf<GetPokemonByDexNumberArgs> = basePokemonArgsSchema.extend({
  number: s
    .number({ message: 'The dex number has to be of type number' })
    .greaterThanOrEqual(-72, { message: 'The minimum allowed dex number is -72, or a range between -5000 and -5014 for the PokéStar entries.' })
    .lessThanOrEqual(1025, { message: 'The maximum allowed dex number is 1025' })
    .or(
      s
        .number({ message: 'The dex number has to be of type number' })
        .greaterThanOrEqual(-5014, { message: 'When querying for PokéStar entries the dex number has to be between -5000 and -5014' })
        .lessThanOrEqual(-5000, { message: 'When querying for PokéStar entries the dex number has to be between -5000 and -5014' })
    )
});

export function validateGetPokemonByDexNumberArgs(args: GetPokemonByDexNumberArgs): NonNullish<GetPokemonByDexNumberArgs> {
  return getPokemonByDexNumberSchema.parse(args);
}
