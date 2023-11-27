/*

NOTE: THIS FILE IS AUTOGENERTED BY GRAPHQL CODEGEN BASED ON THE SCHEMA'S
IN THE ROOT DIRECTORY OF THIS REPOSITORY

*/

type Maybe<T> = T | null;

/** A Pokémon's abilities entry */
interface Abilities {
  /** The first ability of a Pokémon */
  first: Ability;
  /** The hidden ability of a Pokémon */
  hidden?: Maybe<Ability>;
  /** The second ability of a Pokémon */
  second?: Maybe<Ability>;
  /** The special ability of a Pokémon */
  special?: Maybe<Ability>;
}

/** A single Pokémon ability entry */
interface Ability {
  /** Bulbapedia page for an ability */
  bulbapediaPage: string;
  /** The long description for an ability */
  desc?: Maybe<string>;
  /** Whether this ability has effects outside of battle, and if so what the effect is */
  isFieldAbility?: Maybe<string>;
  /** Whether an ability is non-standard, and if it is why */
  isNonstandard?: Maybe<string>;
  /** The key of the ability as stored in the API */
  key: string;
  /** The name for an ability */
  name: string;
  /**
   * The Pokémon that have this ability.
   * Note that when querying this field and nesting deep into Pokemon.abilities, that the nested list
   * will not have any values to prevent infinite looping data.
   */
  pokemonThatHaveThisAbility: Array<Maybe<Pokemon>>;
  /** Serebii page for an ability */
  serebiiPage: string;
  /** The short description for an ability */
  shortDesc: string;
  /** Smogon page for an ability */
  smogonPage: string;
}
/** A Pokémon catch rate entry */
interface CatchRate {
  /** The base catch rate for a Pokémon that will be used to calculate the final catch rate */
  base: number;
  /** The chance to capture a Pokémon when an ordinary Poké Ball is thrown at full health without any status condition */
  percentageWithOrdinaryPokeballAtFullHealth: string;
}
/** A Pokémon's EV yields */
interface EvYields {
  /** The attack EV yield of a Pokémon */
  attack: number;
  /** The defense EV yield of a Pokémon */
  defense: number;
  /** The HP EV yield of a pokémon */
  hp: number;
  /** The special attack EV yield of a Pokémon */
  specialattack: number;
  /** The special defense EV yield of a Pokémon */
  specialdefense: number;
  /** The speed EV yield of a Pokémon */
  speed: number;
}
/** A flavor text entry for a Pokémon */
interface Flavor {
  /** The flavor text for this entry */
  flavor: string;
  /** The name of the game this flavor text is from */
  game: string;
}
/** A Pokémon gender ratio entry */
interface Gender {
  /** The percentage for female occurrences */
  female: string;
  /** The percentage of male occurrences */
  male: string;
}
/** The learnset for each Pokémon split by generation */
interface GenerationalPokemonLearnset {
  /** The learnset of this Pokémon in Generation 3 */
  generation3: PokemonLearnset;
  /** The learnset of this Pokémon in Generation 4 */
  generation4: PokemonLearnset;
  /** The learnset of this Pokémon in Generation 5 */
  generation5: PokemonLearnset;
  /** The learnset of this Pokémon in Generation 6 */
  generation6: PokemonLearnset;
  /** The learnset of this Pokémon in Generation 7 */
  generation7: PokemonLearnset;
  /** The learnset of this Pokémon in Generation 8 */
  generation8: PokemonLearnset;
}
/** The variants of why an item or move can be non-standard in the current meta or generation. */
declare enum IsNonStandard {
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
/** A single item entry */
interface Item {
  /** Bulbapedia page for an item */
  bulbapediaPage: string;
  /** The long description for an item */
  desc: string;
  /** The generation in which this item was introduced */
  generationIntroduced: number;
  /** Whether an item is non-standard, and if it is why */
  isNonstandard?: Maybe<string>;
  /** The key of the item as stored in the API */
  key: string;
  /** The name for an item */
  name: string;
  /** Serebii page for an item */
  serebiiPage: string;
  /** The long description for an item */
  shortDesc?: Maybe<string>;
  /** Smogon page for an item */
  smogonPage?: Maybe<string>;
  /** The sprite for an item */
  sprite: string;
}

/** A learnset entry */
interface Learnset {
  /** The back sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  backSprite: string;
  /** The PokéDex colour for the Pokémon */
  color: string;
  /** The moves that are exclusively learned in the Unova Dream World */
  dreamworldMoves?: Maybe<Array<LearnsetMove>>;
  /** The moves that can be passed as egg moves */
  eggMoves?: Maybe<Array<LearnsetMove>>;
  /** The moves that are exclusive to event variants of the Pokémon */
  eventMoves?: Maybe<Array<LearnsetMove>>;
  /** The moves that can be learned through levelling up */
  levelUpMoves?: Maybe<Array<LearnsetLevelUpMove>>;
  /** The dex number for a Pokémon */
  num: number;
  /** The key of the Pokémon as stored in the API */
  pokemonKey: string;
  /** The shiny back sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  shinyBackSprite: string;
  /** The shiny sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  shinySprite: string;
  /** The species name for a Pokémon */
  species: string;
  /** The sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  sprite: string;
  /** The moves that can be learned from a Technical Machine or Technical Record */
  tmMoves?: Maybe<Array<LearnsetMove>>;
  /** The moves that can be learned from a move tutor */
  tutorMoves?: Maybe<Array<LearnsetMove>>;
  /** The moves that can be learned through virtual console transfer */
  virtualTransferMoves?: Maybe<Array<LearnsetMove>>;
}
/** A learnset level up move entry */
interface LearnsetLevelUpMove {
  /** The generation in which this pokémon learned the move this way */
  generation: number;
  /** The level at which the move is learned */
  level: number;
  /** The move */
  move: Move;
}
/** A learnset move entry */
interface LearnsetMove {
  /** The generation in which this pokémon learned the move this way */
  generation: number;
  /** The move */
  move: Move;
}
/** A single Pokémon move entry */
interface Move {
  /** The accuracy for a move */
  accuracy: number;
  /** The base power for a move */
  basePower: string;
  /** Bulbapedia page for a move */
  bulbapediaPage: string;
  /** The category for a move */
  category: string;
  /** The contest type for a move */
  contestType?: Maybe<string>;
  /** The long description for a move */
  desc?: Maybe<string>;
  /** Whether this move can be used outside of battle, and if it can what the effect of the field move is */
  isFieldMove?: Maybe<string>;
  /** Whether this move is a G-MAX move, and if it is which Gigantamaxed Pokémon can use it */
  isGMax?: Maybe<string>;
  /** Whether a move is non-standard, and if it is why */
  isNonstandard?: Maybe<string>;
  /** Whether this move is a Z-Move, and if it is the Z-Crystal required to trigger it */
  isZ?: Maybe<string>;
  /** The key of the move as stored in the API */
  key: string;
  /** The power this move will have when used with its Max Move equivalent */
  maxMovePower?: Maybe<number>;
  /** The name for a move */
  name: string;
  /** The power points for a move */
  pp: number;
  /** The priority for a move */
  priority: number;
  /** Serebii page for a move */
  serebiiPage: string;
  /** The short description for a move */
  shortDesc: string;
  /** Smogon page for a move */
  smogonPage: string;
  /** The target for a move */
  target: string;
  /** The type for a move */
  type: string;
  /** The power this move will have when used with its Z-move equivalent */
  zMovePower: number;
}

/** A Pokémon's entry */
interface Pokemon {
  /** The abilities for a Pokémon */
  abilities: Abilities;
  /** The back sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  backSprite: string;
  /** Base form if this entry describes an alternate form */
  baseForme?: Maybe<string>;
  /** Base species if this entry describes a special form */
  baseSpecies?: Maybe<string>;
  /** Base stats for a Pokémon */
  baseStats: Stats;
  /** The total of all base stats for a Pokémon */
  baseStatsTotal: number;
  /** Bulbapedia page for a Pokémon */
  bulbapediaPage: string;
  /** The catch rate data for a Pokémon */
  catchRate?: Maybe<CatchRate>;
  /** The colour of a Pokémon as listed in the Pokedex */
  color: string;
  /** Any other *cosmetic* forms for a Pokémon, distinguished from other formes as cosmetic formes only change the look of the Pokémon, while other formes might also change an ability, move set or other data. */
  cosmeticFormes?: Maybe<Array<string>>;
  /** The egg groups a Pokémon is in */
  eggGroups?: Maybe<Array<string>>;
  /** The evolution level, or special method, for a Pokémon */
  evolutionLevel?: Maybe<string>;
  /** The evolutions for a Pokémon, if any */
  evolutions?: Maybe<Array<Pokemon>>;
  /** EV yields for a Pokémon */
  evYields: EvYields;
  /** The flavor texts for a Pokémon */
  flavorTexts: Array<Flavor>;
  /** The form identifier of a Pokémon */
  forme?: Maybe<string>;
  /** The single letter identifier of the form */
  formeLetter?: Maybe<string>;
  /** The gender data for a Pokémon */
  gender: Gender;
  /** The height of a Pokémon in meters */
  height: number;
  /** Whether the egg of a Pokémon is obtainable */
  isEggObtainable: boolean;
  /** The key of the Pokémon as stored in the API */
  key: string;
  /** The learnset for this pokemon */
  learnsets?: Maybe<GenerationalPokemonLearnset>;
  /** Whether this Pokémon is a legendary Pokémon. The list is based on what is provided by Bulbapedia. */
  legendary: boolean;
  /** The levelling rate of a Pokémon */
  levellingRate?: Maybe<string>;
  /** The maximum number of steps required for the egg of a Pokémon to hatch */
  maximumHatchTime?: Maybe<number>;
  /** The minimum number of steps required for the egg of a Pokémon to hatch */
  minimumHatchTime?: Maybe<number>;
  /** Whether this Pokémon is a mythical Pokémon. The list is based on what is provided by Bulbapedia. */
  mythical: boolean;
  /** The dex number for a Pokémon */
  num: number;
  /** Any other forms for a Pokémon */
  otherFormes?: Maybe<Array<string>>;
  /** The preevolutions for a Pokémon, if any */
  preevolutions?: Maybe<Array<Pokemon>>;
  /** Serebii page for a Pokémon */
  serebiiPage: string;
  /** The shiny back sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  shinyBackSprite: string;
  /** The shiny sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  shinySprite: string;
  /** Smogon page for a Pokémon */
  smogonPage: string;
  /** The smogon tier a Pokémon falls under */
  smogonTier: string;
  /** The species name for a Pokémon */
  species: string;
  /** The sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  sprite: string;
  /** The types for a Pokémon */
  types: Array<PokemonType>;
  /** The weight of a Pokémon in kilograms */
  weight: number;
}

interface PokemonLearnset {
  /** The moves that are exclusively learned in the Unova Dream World */
  dreamworldMoves?: Maybe<Array<LearnsetMove>>;
  /** The moves that can be passed as egg moves */
  eggMoves?: Maybe<Array<LearnsetMove>>;
  /** The moves that are exclusive to event variants of the Pokémon */
  eventMoves?: Maybe<Array<LearnsetMove>>;
  /** The moves that can be learned through levelling up */
  levelUpMoves?: Maybe<Array<LearnsetLevelUpMove>>;
  /** The moves that can be learned from a Technical Machine or Technical Record */
  tmMoves?: Maybe<Array<LearnsetMove>>;
  /** The moves that can be learned from a move tutor */
  tutorMoves?: Maybe<Array<LearnsetMove>>;
  /** The moves that can be learned through virtual console transfer */
  virtualTransferMoves?: Maybe<Array<LearnsetMove>>;
}
/** The type of a Pokémon and that types matchup */
interface PokemonType {
  /** The type matchup for this type */
  matchup: TypeMatchup;
  /** The name of the typ */
  name: string;
}

/** A Pokémon's stats */
interface Stats {
  /** The base attack stat of a Pokémon */
  attack: number;
  /** The base defense stat of a Pokémon */
  defense: number;
  /** The base HP stat of a pokémon */
  hp: number;
  /** The base special attack stat of a Pokémon */
  specialattack: number;
  /** The base special defense stat of a Pokémon */
  specialdefense: number;
  /** The base speed stat of a Pokémon */
  speed: number;
}
/** A type matchup entry */
interface TypeEffectiveness {
  /** The types with 4x effectiveness */
  doubleEffectiveTypes: Array<string>;
  /** The types with 0.25x effectiveness */
  doubleResistedTypes: Array<string>;
  /** The types with 2x effectiveness */
  effectiveTypes: Array<string>;
  /** The types with 0x effectiveness */
  effectlessTypes: Array<string>;
  /** The types with 1x effectiveness */
  normalTypes: Array<string>;
  /** The types with 0.5x effectiveness */
  resistedTypes: Array<string>;
}
/** The type matchups for any one or two given types */
interface TypeMatchup {
  /** The type matchups when attacking */
  attacking: TypeEffectiveness;
  /** The type matchups when defending */
  defending: TypeEffectiveness;
}
/** The types in Pokémon */
declare enum TypesEnum {
  Bug = 'bug',
  Dark = 'dark',
  Dragon = 'dragon',
  Electric = 'electric',
  Fairy = 'fairy',
  Fighting = 'fighting',
  Fire = 'fire',
  Flying = 'flying',
  Ghost = 'ghost',
  Grass = 'grass',
  Ground = 'ground',
  Ice = 'ice',
  Normal = 'normal',
  Poison = 'poison',
  Psychic = 'psychic',
  Rock = 'rock',
  Steel = 'steel',
  Water = 'water'
}

export type {
  Abilities,
  Ability,
  CatchRate,
  EvYields,
  Flavor,
  Gender,
  GenerationalPokemonLearnset,
  IsNonStandard,
  Item,
  Learnset,
  LearnsetLevelUpMove,
  LearnsetMove,
  Maybe,
  Move,
  Pokemon,
  PokemonLearnset,
  PokemonType,
  Stats,
  TypeEffectiveness,
  TypeMatchup,
  TypesEnum
};
