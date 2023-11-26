export const logFile = new URL('./output.log', import.meta.url);

export interface ParsedPokemon {
  number: number;
  species: string;
  url: URL;
  forme?: string;
}

export const sortOrder = [
  'Red',
  'Blue',
  'Yellow',
  'Stadium',
  'Gold',
  'Silver',
  'Crystal',
  'Stadium 2',
  'Ruby',
  'Sapphire',
  'Emerald',
  'FireRed',
  'LeafGreen',
  'Diamond',
  'Pearl',
  'Platinum',
  'HeartGold',
  'SoulSilver',
  'Black',
  'White',
  'Black 2',
  'White 2',
  'X',
  'Y',
  'Omega Ruby',
  'Alpha Sapphire',
  'Sun',
  'Moon',
  'Ultra Sun',
  'Ultra Moon',
  "Let's Go Pikachu",
  "Let's Go Eevee",
  'Sword',
  'Shield',
  'Brilliant Diamond',
  'Shining Pearl',
  'Legends: Arceus',
  'Scarlet',
  'Violet'
];
