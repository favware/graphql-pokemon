export const classificationsUrl = 'https://bulbapedia.bulbagarden.net/w/index.php?title=Pok%C3%A9mon_category&action=edit';

export const logFile = new URL('./output.log', import.meta.url);

export const generations = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

export interface SucceededPokemon {
  num: number;
  forme?: string;
  species: string;
  generation: number;
  classification: string;
}
