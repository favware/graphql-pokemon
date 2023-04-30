import { speciesThatAreNotInGeneration8Nor9 } from '#utils/pastGenerationPokemon';
import { toLowerHyphenCase, toLowerSingleWordCase } from '#utils/util';

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

type ParseSpeciesForHighResSpriteParams = Omit<
  ParseSpeciesForSpriteParams,
  'backSprite' | 'specialBackSprite' | 'specialShinyBackSprite' | 'specialShinySprite' | 'specialSprite'
> & {
  tier: string;
  forme: string | undefined;
};

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
}: ParseSpeciesForSpriteParams) {
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
  if (pokemonNumber >= 906) {
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

export function parseSpeciesForHighResSprite({
  pokemonName,
  pokemonNumber,
  baseSpecies,
  tier,
  forme,
  shiny = false
}: ParseSpeciesForHighResSpriteParams) {
  // If the Pokémon has a number of 0 or lower (0 is Missingno, negatives are Smogon CAP and PokéStar) then it doesn't have a Serebii sprite
  if (pokemonNumber <= 0) return '';

  const paddedPokemonNumber = pokemonNumber.toString().padStart(3, '0');

  const lowercaseForme = forme?.toLowerCase();
  const formPostfix = forme
    ?.toLowerCase()
    .split('-')
    .map((a) => a.slice(0, 1))
    .join('');

  switch (lowercaseForme) {
    case 'gmax': {
      if (shiny) {
        return `https://www.serebii.net/Shiny/SWSH/${paddedPokemonNumber}-gi.png`;
      }

      return `https://www.serebii.net/swordshield/pokemon/${paddedPokemonNumber}-gi.png`;
    }

    case 'mega': {
      if (shiny) {
        return `https://www.serebii.net/Shiny/XY/${paddedPokemonNumber}-${formPostfix}.png`;
      }

      return `https://www.serebii.net/sunmoon/pokemon/${paddedPokemonNumber}-${formPostfix}.png`;
    }

    case 'alola': {
      if (shiny) {
        return `https://www.serebii.net/Shiny/SM/${paddedPokemonNumber}-${formPostfix}.png`;
      }

      return `https://www.serebii.net/sunmoon/pokemon/${paddedPokemonNumber}-${formPostfix}.png`;
    }

    case 'galar': {
      if (shiny) {
        return `https://www.serebii.net/Shiny/SWSH/${paddedPokemonNumber}-${formPostfix}.png`;
      }

      return `https://www.serebii.net/swordshield/pokemon/${paddedPokemonNumber}-${formPostfix}.png`;
    }
    // <https://www.serebii.net/scarletviolet/pokemon/new/128-p.png>
    // <https://www.serebii.net/scarletviolet/pokemon/new/128-b.png>
    // <https://www.serebii.net/scarletviolet/pokemon/new/128-a.png>

    default: {
      const parsedPokemonName = toLowerHyphenCase(baseSpecies ?? pokemonName);

      // If the Pokémon is not in Generation 8 or 9 then build a Generation 7 based URL
      if (speciesThatAreNotInGeneration8Nor9.includes(parsedPokemonName)) {
        if (shiny) {
          return `https://www.serebii.net/Shiny/SM/${paddedPokemonNumber}.png`;
        }

        return `https://www.serebii.net/sunmoon/pokemon/${paddedPokemonNumber}.png`;
      }

      // If the Pokémon is `'past'` in Generation 9, but was not included in speciesThatAreNotInGeneration8Nor9
      // or the Pokémon is within the numbers range for generation 8,
      // then build a Generation 8 based URL
      if (tier.toLowerCase() === 'past' || (pokemonNumber >= 810 && pokemonNumber <= 905)) {
        if (shiny) {
          return `https://www.serebii.net/Shiny/SWSH/${paddedPokemonNumber}.png`;
        }

        return `https://www.serebii.net/swordshield/pokemon/${paddedPokemonNumber}.png`;
      }

      if (shiny) {
        return `https://www.serebii.net/Shiny/SV/new/${paddedPokemonNumber}.png`;
      }

      return `https://www.serebii.net/scarletviolet/pokemon/new/${paddedPokemonNumber}.png`;
    }
  }
}
