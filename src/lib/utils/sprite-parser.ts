import { toLowerSingleWordCase } from '#utils/utils';

/**
 * Parameters for parsing species for sprite.
 */
interface ParseSpeciesForSpriteParams {
  backSprite?: boolean;

  baseSpecies?: string;

  pokemonName: string;
  pokemonNumber: number;

  shiny?: boolean;

  specialBackSprite?: string;

  specialShinyBackSprite?: string;

  specialShinySprite?: string;

  specialSprite?: string;
}

const MegaSpriteRegex = /^(.+)-(x|y)$/g;
const SpriteUrls = {
  baseUrl: 'https://play.pokemonshowdown.com/sprites/',
  animatedShinyBackSprites: 'ani-back-shiny/',
  animatedBackSprites: 'ani-back/',
  animatedSprites: 'ani/',
  animatedShinySprites: 'ani-shiny/'
};
const Gen9SpriteUrls = {
  animatedShinyBackSprites: 'gen5-back-shiny/',
  animatedBackSprites: 'gen5-back/',
  animatedSprites: 'gen5/',
  animatedShinySprites: 'gen5-shiny/'
};

/**
 * Parses the species information to determine the appropriate sprite URL based on the given parameters.
 * @param params The parameters for parsing the species sprite.
 * @returns The URL of the sprite image.
 */
export function parseSpeciesForSprite({
  pokemonName,
  pokemonNumber,
  baseSpecies,
  specialSprite,
  specialShinySprite,
  specialBackSprite,
  specialShinyBackSprite,
  shiny = false,
  backSprite = false
}: ParseSpeciesForSpriteParams): string {
  if (shiny && backSprite && specialShinyBackSprite) return specialShinyBackSprite;
  if (backSprite && specialBackSprite) return specialBackSprite;
  if (shiny && specialShinySprite) return specialShinySprite;
  if (specialSprite) return specialSprite;

  if (!baseSpecies) {
    pokemonName = toLowerSingleWordCase(pokemonName);
  }

  if (pokemonName.match(MegaSpriteRegex)) {
    pokemonName = pokemonName.replace(MegaSpriteRegex, '$1$2');
  }

  // TODO: Remove when Showdown adds GIFs of Gen 9 Pokémon
  // Parse differently for generation 9 (Number 906 is sprigatito)
  if (pokemonNumber >= 906 || pokemonName === 'ursaluna-bloodmoon') {
    const pokemonPng = `${pokemonName}.png`;

    if (shiny && backSprite) return SpriteUrls.baseUrl + Gen9SpriteUrls.animatedShinyBackSprites + pokemonPng;
    if (backSprite) return SpriteUrls.baseUrl + Gen9SpriteUrls.animatedBackSprites + pokemonPng;
    if (shiny) return SpriteUrls.baseUrl + Gen9SpriteUrls.animatedShinySprites + pokemonPng;
    return SpriteUrls.baseUrl + Gen9SpriteUrls.animatedSprites + pokemonPng;
  }

  const pokemonGif = `${pokemonName}.gif`;

  if (shiny && backSprite) return SpriteUrls.baseUrl + SpriteUrls.animatedShinyBackSprites + pokemonGif;
  if (backSprite) return SpriteUrls.baseUrl + SpriteUrls.animatedBackSprites + pokemonGif;
  if (shiny) return SpriteUrls.baseUrl + SpriteUrls.animatedShinySprites + pokemonGif;
  return SpriteUrls.baseUrl + SpriteUrls.animatedSprites + pokemonGif;
}
