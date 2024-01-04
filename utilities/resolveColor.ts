import type { Pokemon } from '../codegen/graphql-pokemon';

/**
 * Parses PokéDex colors to Discord MessageEmbed colors
 * @param color - The color to parse
 *
 * @remarks The various colours that can be generated are:
 *
 * - Black: ![Black](https://cdn.favware.tech/img/graphql-pokemon-colours/323232.png)
 * - Blue: ![Blue](https://cdn.favware.tech/img/graphql-pokemon-colours/257cff.png)
 * - Brown: ![Brown](https://cdn.favware.tech/img/graphql-pokemon-colours/a3501a.png)
 * - Gray: ![Gray](https://cdn.favware.tech/img/graphql-pokemon-colours/969696.png)
 * - Green: ![Green](https://cdn.favware.tech/img/graphql-pokemon-colours/3eff4e.png)
 * - Pink: ![Pink](https://cdn.favware.tech/img/graphql-pokemon-colours/ff65a5.png)
 * - Purple: ![Purple](https://cdn.favware.tech/img/graphql-pokemon-colours/a63de8.png)
 * - Red: ![Red](https://cdn.favware.tech/img/graphql-pokemon-colours/ff3232.png)
 * - White: ![White](https://cdn.favware.tech/img/graphql-pokemon-colours/e1e1e1.png)
 * - Yellow: ![Yellow](https://cdn.favware.tech/img/graphql-pokemon-colours/fff359.png)
 * - Unknown: ![Unknown](https://cdn.favware.tech/img/graphql-pokemon-colours/000000.png)
 *
 * @returns The color as a hexadecimal color code that can be used for
 * a {@linkplain https://discord.js.org/docs/packages/discord.js/14.14.1/Embed:Class DiscordJS Embed}
 */
export function resolveColor(color: string): number;
/**
 * Parses PokéDex colors to Discord MessageEmbed colors
 * @param pokemon - The Pokemon data, with a color field, to parse
 *
 * @remarks The various colours that can be generated are:
 *
 * - Black: ![Black](https://cdn.favware.tech/img/graphql-pokemon-colours/323232.png)
 * - Blue: ![Blue](https://cdn.favware.tech/img/graphql-pokemon-colours/257cff.png)
 * - Brown: ![Brown](https://cdn.favware.tech/img/graphql-pokemon-colours/a3501a.png)
 * - Gray: ![Gray](https://cdn.favware.tech/img/graphql-pokemon-colours/969696.png)
 * - Green: ![Green](https://cdn.favware.tech/img/graphql-pokemon-colours/3eff4e.png)
 * - Pink: ![Pink](https://cdn.favware.tech/img/graphql-pokemon-colours/ff65a5.png)
 * - Purple: ![Purple](https://cdn.favware.tech/img/graphql-pokemon-colours/a63de8.png)
 * - Red: ![Red](https://cdn.favware.tech/img/graphql-pokemon-colours/ff3232.png)
 * - White: ![White](https://cdn.favware.tech/img/graphql-pokemon-colours/e1e1e1.png)
 * - Yellow: ![Yellow](https://cdn.favware.tech/img/graphql-pokemon-colours/fff359.png)
 * - Unknown: ![Unknown](https://cdn.favware.tech/img/graphql-pokemon-colours/000000.png)
 *
 * @returns The color as a hexadecimal color code that can be used for
 * a {@linkplain https://discord.js.org/docs/packages/discord.js/14.14.1/Embed:Class DiscordJS Embed}
 */
export function resolveColor(pokemon: Pokemon): number;
/**
 * Parses PokéDex colors to Discord MessageEmbed colors
 * @param colorOrPokemon - Either the The Pokemon data, with a color field, to parse, or the color to parse
 *
 * @remarks The various colours that can be generated are:
 *
 * - Black: ![Black](https://cdn.favware.tech/img/graphql-pokemon-colours/323232.png)
 * - Blue: ![Blue](https://cdn.favware.tech/img/graphql-pokemon-colours/257cff.png)
 * - Brown: ![Brown](https://cdn.favware.tech/img/graphql-pokemon-colours/a3501a.png)
 * - Gray: ![Gray](https://cdn.favware.tech/img/graphql-pokemon-colours/969696.png)
 * - Green: ![Green](https://cdn.favware.tech/img/graphql-pokemon-colours/3eff4e.png)
 * - Pink: ![Pink](https://cdn.favware.tech/img/graphql-pokemon-colours/ff65a5.png)
 * - Purple: ![Purple](https://cdn.favware.tech/img/graphql-pokemon-colours/a63de8.png)
 * - Red: ![Red](https://cdn.favware.tech/img/graphql-pokemon-colours/ff3232.png)
 * - White: ![White](https://cdn.favware.tech/img/graphql-pokemon-colours/e1e1e1.png)
 * - Yellow: ![Yellow](https://cdn.favware.tech/img/graphql-pokemon-colours/fff359.png)
 * - Unknown: ![Unknown](https://cdn.favware.tech/img/graphql-pokemon-colours/000000.png)
 *
 * @returns The color as a hexadecimal color code that can be used for
 * a {@linkplain https://discord.js.org/docs/packages/discord.js/14.14.1/Embed:Class DiscordJS Embed}
 */
export function resolveColor(colorOrPokemon: string | Omit<Pokemon, '__typename'>): number {
  if (typeof colorOrPokemon !== 'string') colorOrPokemon = colorOrPokemon.color;

  switch (colorOrPokemon) {
    case 'Black':
      return 0x323232;
    case 'Blue':
      return 0x257cff;
    case 'Brown':
      return 0xa3501a;
    case 'Gray':
      return 0x969696;
    case 'Green':
      return 0x3eff4e;
    case 'Pink':
      return 0xff65a5;
    case 'Purple':
      return 0xa63de8;
    case 'Red':
      return 0xff3232;
    case 'White':
      return 0xe1e1e1;
    case 'Yellow':
      return 0xfff359;
    default:
      return 0x000000;
  }
}
