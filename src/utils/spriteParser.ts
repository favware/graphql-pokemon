import Util from '#utils/util';

interface ParseSpeciesForSpriteParams {
  pokemonName: string;
  baseSpecies?: string;
  specialSprite?: string;
  specialShinySprite?: string;
  specialBackSprite?: string;
  specialShinyBackSprite?: string;
  shiny?: boolean;
  backSprite?: boolean;
}

const MegaSpriteRegex = /^(.+)-(x|y)$/g;
const LeekDuckRegex = /^(farfetch|sirfetch)'(d)(-galar)?$/g;
const SpriteUrls = {
  baseUrl: 'https://play.pokemonshowdown.com/sprites/',
  animatedShinyBackSprites: 'ani-back-shiny/',
  animatedBackSprites: 'ani-back/',
  animatedSprites: 'ani/',
  animatedShinySprites: 'ani-shiny/'
};

export const parseSpeciesForSprite = ({
  pokemonName,
  baseSpecies,
  specialSprite,
  specialShinySprite,
  specialBackSprite,
  specialShinyBackSprite,
  shiny = false,
  backSprite = false
}: ParseSpeciesForSpriteParams) => {
  if (shiny && backSprite && specialShinyBackSprite) return specialShinyBackSprite;
  if (backSprite && specialBackSprite) return specialBackSprite;
  if (shiny && specialShinySprite) return specialShinySprite;
  if (specialSprite) return specialSprite;

  if (!baseSpecies) {
    pokemonName = Util.toLowerSingleWordCase(pokemonName);
  }

  if (pokemonName.match(MegaSpriteRegex)) {
    pokemonName = pokemonName.replace(MegaSpriteRegex, '$1$2');
  }

  if (pokemonName.match(LeekDuckRegex)) {
    pokemonName = pokemonName.replace(LeekDuckRegex, '$1$2$3');
  }

  const pokemonGif = `${pokemonName}.gif`;

  if (shiny && backSprite) return SpriteUrls.baseUrl + SpriteUrls.animatedShinyBackSprites + pokemonGif;
  if (backSprite) return SpriteUrls.baseUrl + SpriteUrls.animatedBackSprites + pokemonGif;
  if (shiny) return SpriteUrls.baseUrl + SpriteUrls.animatedShinySprites + pokemonGif;
  return SpriteUrls.baseUrl + SpriteUrls.animatedSprites + pokemonGif;
};
