import { Ability, Item, Learnset, Move, Pokemon, TypeMatchup } from '#types/graphql-mapped-types';

export interface Query {
  /** Gets the details on a Pokémon ability, using the ability name */
  getAbility: Ability;
  /**
   * Returns a list of all the known Pokémon.
   *
   * For every Pokémon all the data on each requested field is returned.
   *
   * **_NOTE:_ To skip all CAP Pokémon, PokéStar Pokémon, Missingno, and 'M (00) provide an `offset` of 89**
   *
   * You can provide `take` to limit the amount of Pokémon to return (default: 1), set the offset of where to start with `offset`, and reverse the entire array with `reverse`.
   *
   * You can provide `takeFlavorTexts` to limit the amount of flavour texts to return, set the offset of where to start with `offsetFlavorTexts`, and reverse the entire array with `reverseFlavorTexts`.
   *
   * While the API will currently not rate limit the usage of this query, it may do so in the future.
   *
   * It is advisable to cache responses of this query.
   */
  getAllPokemon: Array<Pokemon>;
  /**
   * Gets details on a Pokémon ability, using a fuzzy search on name
   *
   * This can be used to find multiple results based on the query
   *
   * You can provide `take` to limit the amount of abilities to return (default: 1), set the offset of where to start with `offset`, and reverse the entire array with `reverse`.
   */
  getFuzzyAbility: Array<Ability>;
  /**
   * Gets details on a Pokémon item, using a fuzzy search on name
   *
   * This can be used to find multiple results based on the query
   *
   * By default only 1 result is returned. You can provide the arguments `take`, `offset`, and `reverse` to modify this behaviour.
   */
  getFuzzyItem: Array<Item>;
  /**
   * Gets the learnset for a given Pokémon and move.
   *
   * A fuzzy search is performed to find a matching Pokémon and move
   *
   * Multiple moves are possible by putting them in an array: `[move1, move2]`.
   *
   * You can also apply a generation filter (only results for the given generation will be returned) with the generation argument
   */
  getFuzzyLearnset: Learnset;
  /**
   * Gets details on a Pokémon move, using a fuzzy search on name
   *
   * This can be used to find multiple results based on the query
   *
   * By default only 1 result is returned. You can provide the arguments `take`, "offset", and "reverse" to modify this behaviour.
   */
  getFuzzyMove: Array<Move>;
  /**
   * Gets details on one or more Pokémon based on species name
   *
   * You can provide `take` to limit the amount of Pokémon to return (default: 1), set the offset of where to start with `offset`, and reverse the entire array with `reverse`.
   *
   * You can provide `takeFlavorTexts` to limit the amount of flavour texts to return, set the offset of where to start with `offsetFlavorTexts`, and reverse the entire array with `reverseFlavorTexts`.
   *
   * **Reversal is applied before pagination!**
   */
  getFuzzyPokemon: Array<Pokemon>;
  /** Gets the details on a Pokémon item, using the item name */
  getItem: Item;
  /**
   * Gets the learnsets for a given Pokémon and move.
   *
   * Multiple moves are possible by putting them in an array: `[move1, move2]`.
   *
   * You can also apply a generation filter (only results for the given generation will be returned) with the generation argument
   */
  getLearnset: Learnset;
  /** Gets the details on a Pokémon move, using the move name */
  getMove: Move;
  /**
   * Gets details on a single Pokémon based on species name
   *
   * You can provide `takeFlavorTexts` to limit the amount of flavour texts to return, set the offset of where to start with `offsetFlavorTexts`, and reverse the entire array with `reverseFlavorTexts`.
   *
   * **Reversal is applied before pagination!**
   */
  getPokemon: Pokemon;
  /**
   * Gets details on a single Pokémon based on National Pokédex number
   *
   * You can provide `takeFlavorTexts` to limit the amount of flavour texts to return, set the offset of where to start with `offsetFlavorTexts`, and reverse the entire array with `reverseFlavorTexts`.
   *
   * **Reversal is applied before pagination!**
   */
  getPokemonByDexNumber: Pokemon;
  /** Gets the type matchup data for the given type or types */
  getTypeMatchup: TypeMatchup;
}
