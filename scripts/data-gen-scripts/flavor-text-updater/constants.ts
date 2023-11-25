export const logFile = new URL('./output.log', import.meta.url);

export interface ParsedPokemon {
  number: number;
  species: string;
  url: URL;
  forme?: string;
}
