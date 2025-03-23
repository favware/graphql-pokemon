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

const MegaSpriteRegex = /^(.+)-([xy])$/g;
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
const afdSpriteUrls = {
  animatedShinyBackSprites: 'afd-back-shiny/',
  animatedBackSprites: 'afd-back/',
  animatedSprites: 'afd/',
  animatedShinySprites: 'afd-shiny/'
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
  if (isAprilFools()) {
    return parseAsAfd(pokemonName, baseSpecies, shiny, backSprite);
  }

  const parsedSpecialSprite = parseSpecialSprites(specialSprite, specialShinySprite, specialBackSprite, specialShinyBackSprite, shiny, backSprite);
  if (parsedSpecialSprite) return parsedSpecialSprite;

  if (!baseSpecies) {
    pokemonName = toLowerSingleWordCase(pokemonName);
  }

  if (pokemonName.match(MegaSpriteRegex)) {
    pokemonName = pokemonName.replace(MegaSpriteRegex, '$1$2');
  }

  // TODO: Remove when Showdown adds GIFs of Gen 9 Pokémon
  // Parse differently for remaining generation 9 Pokémon
  switch (pokemonNumber) {
    case 921:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 922:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 923:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 926:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 927:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 931:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 932:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 933:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 934:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 935:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 936:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 937:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 940:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 941:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 942:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 943:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 944:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 945:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 946:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 947:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 948:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 949:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 950:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 962:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 969:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 970:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 983:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 984:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 985:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 986:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 987:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 988:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 989:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 990:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 991:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 992:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 993:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 994:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 995:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 996:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 997:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 998:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 999:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 1000:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 1001:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 1002:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 1003:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 1004:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 1005:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 1006:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 1007:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 1008:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 1009:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 1010:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 1011:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 1012:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 1013:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 1014:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 1015:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 1016:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 1017:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 1018:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 1019:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 1020:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 1021:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 1022:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 1023:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 1024:
      return parsePngSprite(pokemonName, shiny, backSprite);
    case 1025:
      return parsePngSprite(pokemonName, shiny, backSprite);
    default:
      return parseGifSprite(pokemonName, shiny, backSprite);
  }

  // if (pokemonNumber >= 906 || pokemonName === 'ursaluna-bloodmoon') return parsePngSprite(pokemonName, shiny, backSprite);
}

function parseSpecialSprites(
  specialSprite: string | undefined,
  specialShinySprite: string | undefined,
  specialBackSprite: string | undefined,
  specialShinyBackSprite: string | undefined,
  shiny: boolean,
  backSprite: boolean
) {
  if (shiny && backSprite && specialShinyBackSprite) return specialShinyBackSprite;
  if (backSprite && specialBackSprite) return specialBackSprite;
  if (shiny && specialShinySprite) return specialShinySprite;
  if (specialSprite) return specialSprite;

  return null;
}

function parsePngSprite(pokemonName: string, shiny: boolean, backSprite: boolean) {
  const pokemonPng = `${pokemonName}.png`;

  if (shiny && backSprite) return SpriteUrls.baseUrl + Gen9SpriteUrls.animatedShinyBackSprites + pokemonPng;
  if (backSprite) return SpriteUrls.baseUrl + Gen9SpriteUrls.animatedBackSprites + pokemonPng;
  if (shiny) return SpriteUrls.baseUrl + Gen9SpriteUrls.animatedShinySprites + pokemonPng;
  return SpriteUrls.baseUrl + Gen9SpriteUrls.animatedSprites + pokemonPng;
}

function parseGifSprite(pokemonName: string, shiny: boolean, backSprite: boolean) {
  const pokemonGif = `${pokemonName}.gif`;

  if (shiny && backSprite) return SpriteUrls.baseUrl + SpriteUrls.animatedShinyBackSprites + pokemonGif;
  if (backSprite) return SpriteUrls.baseUrl + SpriteUrls.animatedBackSprites + pokemonGif;
  if (shiny) return SpriteUrls.baseUrl + SpriteUrls.animatedShinySprites + pokemonGif;
  return SpriteUrls.baseUrl + SpriteUrls.animatedSprites + pokemonGif;
}

const APRIL = 3 as const;
const FIRST = 1 as const;
function isAprilFools() {
  const currentDate = new Date();
  return currentDate.getMonth() === APRIL && currentDate.getDate() === FIRST;
}

function parseAsAfd(pokemonName: string, baseSpecies: string | undefined, shiny: boolean, backSprite: boolean) {
  if (!baseSpecies) {
    pokemonName = toLowerSingleWordCase(pokemonName);
  }

  if (pokemonName.match(MegaSpriteRegex)) {
    pokemonName = pokemonName.replace(MegaSpriteRegex, '$1$2');
  }

  const pokemonGif = `${pokemonName}.png`;

  if (shiny && backSprite) return SpriteUrls.baseUrl + afdSpriteUrls.animatedShinyBackSprites + pokemonGif;
  if (backSprite) return SpriteUrls.baseUrl + afdSpriteUrls.animatedBackSprites + pokemonGif;
  if (shiny) return SpriteUrls.baseUrl + afdSpriteUrls.animatedShinySprites + pokemonGif;
  return SpriteUrls.baseUrl + afdSpriteUrls.animatedSprites + pokemonGif;
}
