import type { PokemonTypes } from '#assets/pokemon-source';
import { Collection } from '@discordjs/collection';

/** The natures in Pokémon */
export const natures = new Collection<string, PokemonTypes.Natures>([
  [
    'adamant',
    {
      name: 'Adamant',
      increasedStat: 'Attack',
      decreasedStat: 'Special Attack',
      preferredFlavor: 'Spicy',
      dislikedFlavor: 'Dry'
    }
  ],
  [
    'bashful',
    {
      name: 'Bashful',
      increasedStat: null,
      decreasedStat: null,
      preferredFlavor: null,
      dislikedFlavor: null
    }
  ],
  [
    'bold',
    {
      name: 'Bold',
      increasedStat: 'Defense',
      decreasedStat: 'Attack',
      preferredFlavor: 'Sour',
      dislikedFlavor: 'Spicy'
    }
  ],
  [
    'brave',
    {
      name: 'Brave',
      increasedStat: 'Attack',
      decreasedStat: 'Speed',
      preferredFlavor: 'Spicy',
      dislikedFlavor: 'Sweet'
    }
  ],
  [
    'calm',
    {
      name: 'Calm',
      increasedStat: 'Special Defense',
      decreasedStat: 'Attack',
      preferredFlavor: 'Bitter',
      dislikedFlavor: 'Spicy'
    }
  ],
  [
    'careful',
    {
      name: 'Careful',
      increasedStat: 'Special Defense',
      decreasedStat: 'Special Attack',
      preferredFlavor: 'Bitter',
      dislikedFlavor: 'Dry'
    }
  ],
  [
    'docile',
    {
      name: 'Docile',
      increasedStat: null,
      decreasedStat: null,
      preferredFlavor: null,
      dislikedFlavor: null
    }
  ],
  [
    'gentle',
    {
      name: 'Gentle',
      increasedStat: 'Special Defense',
      decreasedStat: 'Defense',
      preferredFlavor: 'Bitter',
      dislikedFlavor: 'Sour'
    }
  ],
  [
    'hardy',
    {
      name: 'Hardy',
      increasedStat: null,
      decreasedStat: null,
      preferredFlavor: null,
      dislikedFlavor: null
    }
  ],
  [
    'hasty',
    {
      name: 'Hasty',
      increasedStat: 'Hasty',
      decreasedStat: 'Defense',
      preferredFlavor: 'Sweet',
      dislikedFlavor: 'Sour'
    }
  ],
  [
    'impish',
    {
      name: 'Impish',
      increasedStat: 'Defense',
      decreasedStat: 'Sour',
      preferredFlavor: 'Special Attack',
      dislikedFlavor: 'Dry'
    }
  ],
  [
    'jolly',
    {
      name: 'Jolly',
      increasedStat: 'Speed',
      decreasedStat: 'Special Attack',
      preferredFlavor: 'Sweet',
      dislikedFlavor: 'Dry'
    }
  ],
  [
    'lax',
    {
      name: 'Lax',
      increasedStat: 'Defense',
      decreasedStat: 'Sour',
      preferredFlavor: 'Special Defense',
      dislikedFlavor: 'Bitter'
    }
  ],
  [
    'lonely',
    {
      name: 'Lonely',
      increasedStat: 'Attack',
      decreasedStat: 'Defense',
      preferredFlavor: 'Spicy',
      dislikedFlavor: 'Sour'
    }
  ],
  [
    'mild',
    {
      name: 'Mild',
      increasedStat: 'Special Attack',
      decreasedStat: 'Defense',
      preferredFlavor: 'Dry',
      dislikedFlavor: 'Sour'
    }
  ],
  [
    'modest',
    {
      name: 'Modest',
      increasedStat: 'Special Attack',
      decreasedStat: 'Attack',
      preferredFlavor: 'Dry',
      dislikedFlavor: 'Spicy'
    }
  ],
  [
    'naive',
    {
      name: 'Naive',
      increasedStat: 'Speed',
      decreasedStat: 'Special Defense',
      preferredFlavor: 'Sweet',
      dislikedFlavor: 'Bitter'
    }
  ],
  [
    'naughty',
    {
      name: 'Naughty',
      increasedStat: 'Attack',
      decreasedStat: 'Special Defense',
      preferredFlavor: 'Spicy',
      dislikedFlavor: 'Bitter'
    }
  ],
  [
    'quiet',
    {
      name: 'Quiet',
      increasedStat: 'Special Attack',
      decreasedStat: 'Speed',
      preferredFlavor: 'Dry',
      dislikedFlavor: 'Sweet'
    }
  ],
  [
    'quirky',
    {
      name: 'Quirky',
      increasedStat: null,
      decreasedStat: null,
      preferredFlavor: null,
      dislikedFlavor: null
    }
  ],
  [
    'rash',
    {
      name: 'Rash',
      increasedStat: 'Special Attack',
      decreasedStat: 'Special Defense',
      preferredFlavor: 'Dry',
      dislikedFlavor: 'Bitter'
    }
  ],
  [
    'relaxed',
    {
      name: 'Relaxed',
      increasedStat: 'Defense',
      decreasedStat: 'Speed',
      preferredFlavor: 'Sour',
      dislikedFlavor: 'Sweet'
    }
  ],
  [
    'sassy',
    {
      name: 'Sassy',
      increasedStat: 'Special Defense',
      decreasedStat: 'Speed',
      preferredFlavor: 'Bitter',
      dislikedFlavor: 'Sweet'
    }
  ],
  [
    'serious',
    {
      name: 'Serious',
      increasedStat: null,
      decreasedStat: null,
      preferredFlavor: null,
      dislikedFlavor: null
    }
  ],
  [
    'timid',
    {
      name: 'Timid',
      increasedStat: 'Speed',
      decreasedStat: 'Attack',
      preferredFlavor: 'Sweet',
      dislikedFlavor: 'Spicy'
    }
  ]
]);

for (const [key, value] of natures.entries()) {
  value.key = key;
}
