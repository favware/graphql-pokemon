export enum IsNonStandard {
  /** When set the item or move is from Smogon's CAP project and is not in the official Nintendo games. */
  Cap = 'CAP',
  /** When set the move can exclusively be used Pokémon Sword and Pokémon Shield as it requires Gigantamaxing your Pokémon. */
  Gigantamax = 'Gigantamax',
  /** When set the item or move is exclusive to the Let's Go Pikachu / Let's Go Eevee games. */
  LetsGoPikachuEevee = 'LetsGoPikachuEevee',
  /** When set the item or move is from a past generation. This means it is not available at all in the data of Generation 9. */
  Past = 'Past',
  /** When set the item or move is available within the generation 9 data, however is cannot currently be obtained. It is safe to presume that Gamefreak/Nintendo will add it in later DLC. */
  Unobtainable = 'Unobtainable'
}
