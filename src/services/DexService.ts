import { FuzzyPokemonArgs } from '#arguments/FuzzyArgs/FuzzyPokemonArgs';
import { PokemonArgs } from '#arguments/PokemonArgs/PokemonArgs';
import { PokemonListArgs } from '#arguments/PokemonArgs/PokemonListArgs';
import { PokemonNumberArgs } from '#arguments/PokemonArgs/PokemonNumberArgs';
import { pokedex } from '#assets/pokedex';
import { Abilities } from '#structures/Abilities';
import { CatchRate } from '#structures/CatchRate';
import { EvYields } from '#structures/EvYields';
import { Flavor } from '#structures/Flavor';
import { Gender } from '#structures/Gender';
import { Pokemon } from '#structures/Pokemon';
import { Stats } from '#structures/Stats';
import { addPropertyToClass } from '#utils/addPropertyToClass';
import { FuzzySearch } from '#utils/FuzzySearch';
import type { GraphQLSet } from '#utils/GraphQLSet';
import type PokemonTypes from '#utils/pokemon';
import { parseSpeciesForSprite } from '#utils/spriteParser';
import { cast, preParseInput, toLowerHyphenCase, toLowerSingleWordCase, toTitleCase } from '#utils/util';
import { Args } from 'type-graphql';

export class DexService {
  private static flavors: Record<string, PokemonTypes.FlavorText[]> | undefined = undefined;
  private static tiers: Record<string, string> | undefined = undefined;
  private static readonly bulbapediaBaseUrlPrefix = 'https://bulbapedia.bulbagarden.net/wiki/';
  private static readonly bulbapediaBaseUrlPostfix = '_(Pokémon)';
  private static readonly serebiiBaseUrl = 'https://www.serebii.net/pokedex';
  private static readonly smogonBaseUrl = 'https://www.smogon.com/dex';
  private static readonly fuzzySearch = new FuzzySearch(pokedex, ['num', 'species', 'aliases']);

  public static getBySpecies(@Args(() => PokemonArgs) { pokemon }: PokemonArgs): PokemonTypes.DexEntry | undefined {
    return pokedex.get(pokemon);
  }

  public static getByNationalDexNumber(@Args(() => PokemonNumberArgs) { number }: PokemonNumberArgs): PokemonTypes.DexEntry | undefined {
    return pokedex.find((pokemon) => pokemon.num === number);
  }

  public static getPokemonSpecies(@Args(() => PokemonListArgs) { offset, reverse, take }: PokemonListArgs): string[] {
    const allSpecies = pokedex.map((pokemon) => toTitleCase(pokemon.species));

    if (reverse) {
      allSpecies.reverse();
    }

    return allSpecies.slice(offset, offset + take);
  }

  public static findByFuzzy(@Args() { pokemon, offset, take, reverse }: FuzzyPokemonArgs): PokemonTypes.DexEntry[] {
    pokemon = this.parseFormeIdentifiers(preParseInput(pokemon));

    const fuzzyResult = this.fuzzySearch.runFuzzy(pokemon);

    if (!fuzzyResult.length) {
      throw new Error(`No Pokémon found for ${pokemon}`);
    }

    if (reverse) {
      fuzzyResult.reverse();
    }

    return fuzzyResult.slice(offset, offset + take);
  }

  public static async mapPokemonDataToPokemonGraphQL({
    data,
    requestedFields,
    parsingPokemon = '',
    recursingAs = false,
    takeFlavorTexts = 1,
    offsetFlavorTexts = 0,
    reverseFlavorTexts = true
  }: MapPokemonDataToPokemonGraphQLParameters): Promise<Pokemon> {
    const basePokemonArgs = {
      offsetFlavorTexts,
      takeFlavorTexts,
      reverseFlavorTexts
    };

    if (this.flavors === undefined) {
      this.flavors = (await import('#jsonAssets/flavorText.json')).default;
    }

    if (this.tiers === undefined) {
      this.tiers = (await import('#jsonAssets/formats.json')).default;
    }

    const evolutionChain: Promise<Pokemon>[] = [];
    const preevolutionChain: Promise<Pokemon>[] = [];

    const basePokemonGenderRatio: PokemonTypes.DexEntry['genderRatio'] = data.genderRatio || {
      male: '50%',
      female: '50%'
    };
    const basePokemonCatchRate: PokemonTypes.DexEntry['catchRate'] = data.catchRate || {
      base: 0,
      percentageWithOrdinaryPokeballAtFullHealth: '0%'
    };

    const genderEntryRequestedFields = cast<GraphQLSet<keyof Gender>>(requestedFields);
    const genderData = new Gender();
    addPropertyToClass(
      genderData,
      'male',
      basePokemonGenderRatio.male,
      genderEntryRequestedFields,
      `${recursingAs ? `${recursingAs}.` : ''}gender.male`
    );
    addPropertyToClass(
      genderData,
      'female',
      basePokemonGenderRatio.female,
      genderEntryRequestedFields,
      `${recursingAs ? `${recursingAs}.` : ''}gender.female`
    );

    const baseStatsRequestedFields = cast<GraphQLSet<keyof Stats>>(requestedFields);
    const baseStatsData = new Stats();
    addPropertyToClass(baseStatsData, 'hp', data.baseStats.hp, baseStatsRequestedFields, `${recursingAs ? `${recursingAs}.` : ''}baseStats.hp`);
    addPropertyToClass(
      baseStatsData,
      'attack',
      data.baseStats.atk,
      baseStatsRequestedFields,
      `${recursingAs ? `${recursingAs}.` : ''}baseStats.attack`
    );
    addPropertyToClass(
      baseStatsData,
      'defense',
      data.baseStats.def,
      baseStatsRequestedFields,
      `${recursingAs ? `${recursingAs}.` : ''}baseStats.defense`
    );
    addPropertyToClass(
      baseStatsData,
      'specialattack',
      data.baseStats.spa,
      baseStatsRequestedFields,
      `${recursingAs ? `${recursingAs}.` : ''}baseStats.specialattack`
    );
    addPropertyToClass(
      baseStatsData,
      'specialdefense',
      data.baseStats.spd,
      baseStatsRequestedFields,
      `${recursingAs ? `${recursingAs}.` : ''}baseStats.specialdefense`
    );
    addPropertyToClass(
      baseStatsData,
      'speed',
      data.baseStats.spe,
      baseStatsRequestedFields,
      `${recursingAs ? `${recursingAs}.` : ''}baseStats.speed`
    );

    const evYieldsRequestedFields = cast<GraphQLSet<keyof EvYields>>(requestedFields);
    const evYieldsData = new EvYields();
    addPropertyToClass(evYieldsData, 'hp', data.evYields.hp, evYieldsRequestedFields, `${recursingAs ? `${recursingAs}.` : ''}evYields.hp`);
    addPropertyToClass(evYieldsData, 'attack', data.evYields.atk, evYieldsRequestedFields, `${recursingAs ? `${recursingAs}.` : ''}evYields.attack`);
    addPropertyToClass(
      evYieldsData,
      'defense',
      data.evYields.def,
      evYieldsRequestedFields,
      `${recursingAs ? `${recursingAs}.` : ''}evYields.defense`
    );
    addPropertyToClass(
      evYieldsData,
      'specialattack',
      data.evYields.spa,
      evYieldsRequestedFields,
      `${recursingAs ? `${recursingAs}.` : ''}evYields.specialattack`
    );
    addPropertyToClass(
      evYieldsData,
      'specialdefense',
      data.evYields.spd,
      evYieldsRequestedFields,
      `${recursingAs ? `${recursingAs}.` : ''}evYields.specialdefense`
    );
    addPropertyToClass(evYieldsData, 'speed', data.evYields.spe, evYieldsRequestedFields, `${recursingAs ? `${recursingAs}.` : ''}evYields.speed`);

    const abilitiesRequestedFields = cast<GraphQLSet<keyof Abilities>>(requestedFields);
    const abilitiesData = new Abilities();
    addPropertyToClass(
      abilitiesData,
      'first',
      data.abilities.first,
      abilitiesRequestedFields,
      `${recursingAs ? `${recursingAs}.` : ''}abilities.first`
    );
    addPropertyToClass(
      abilitiesData,
      'second',
      data.abilities.second,
      abilitiesRequestedFields,
      `${recursingAs ? `${recursingAs}.` : ''}abilities.second`
    );
    addPropertyToClass(
      abilitiesData,
      'hidden',
      data.abilities.hidden,
      abilitiesRequestedFields,
      `${recursingAs ? `${recursingAs}.` : ''}abilities.hidden`
    );
    addPropertyToClass(
      abilitiesData,
      'special',
      data.abilities.special,
      abilitiesRequestedFields,
      `${recursingAs ? `${recursingAs}.` : ''}abilities.special`
    );

    const catchRateRequestedFields = cast<GraphQLSet<keyof CatchRate>>(requestedFields);
    const catchRateData = new CatchRate();
    addPropertyToClass(
      catchRateData,
      'base',
      basePokemonCatchRate.base,
      catchRateRequestedFields,
      `${recursingAs ? `${recursingAs}.` : ''}catchRate.base`
    );
    addPropertyToClass(
      catchRateData,
      'percentageWithOrdinaryPokeballAtFullHealth',
      basePokemonCatchRate.percentageWithOrdinaryPokeballAtFullHealth,
      catchRateRequestedFields,
      `${recursingAs ? `${recursingAs}.` : ''}catchRate.percentageWithOrdinaryPokeballAtFullHealth`
    );

    const pokemonData = new Pokemon();
    addPropertyToClass(pokemonData, 'abilities', abilitiesData, requestedFields, `${recursingAs ? `${recursingAs}.` : ''}abilities`);
    addPropertyToClass(pokemonData, 'gender', genderData, requestedFields, `${recursingAs ? `${recursingAs}.` : ''}gender`);
    addPropertyToClass(pokemonData, 'baseStats', baseStatsData, requestedFields, `${recursingAs ? `${recursingAs}.` : ''}baseStats`);
    addPropertyToClass(pokemonData, 'evYields', evYieldsData, requestedFields, `${recursingAs ? `${recursingAs}.` : ''}evYields`);
    addPropertyToClass(pokemonData, 'catchRate', catchRateData, requestedFields, `${recursingAs ? `${recursingAs}.` : ''}catchRate`);

    addPropertyToClass(pokemonData, 'key', data.key, requestedFields, `${recursingAs ? `${recursingAs}.` : ''}key`);
    addPropertyToClass(pokemonData, 'num', data.num, requestedFields, `${recursingAs ? `${recursingAs}.` : ''}num`);
    addPropertyToClass(pokemonData, 'species', data.species, requestedFields, `${recursingAs ? `${recursingAs}.` : ''}species`);
    addPropertyToClass(pokemonData, 'types', data.types, requestedFields, `${recursingAs ? `${recursingAs}.` : ''}types`);
    addPropertyToClass(pokemonData, 'color', data.color, requestedFields, `${recursingAs ? `${recursingAs}.` : ''}color`);
    addPropertyToClass(pokemonData, 'eggGroups', data.eggGroups, requestedFields, `${recursingAs ? `${recursingAs}.` : ''}eggGroups`);
    addPropertyToClass(pokemonData, 'evolutionLevel', data.evoLevel, requestedFields, `${recursingAs ? `${recursingAs}.` : ''}evolutionLevel`);

    const smogonTier = this.tiers[toLowerSingleWordCase(data.species)] || 'Undiscovered';
    addPropertyToClass(pokemonData, 'smogonTier', smogonTier, requestedFields, `${recursingAs ? `${recursingAs}.` : ''}smogonTier`);

    addPropertyToClass(pokemonData, 'height', data.heightm, requestedFields, `${recursingAs ? `${recursingAs}.` : ''}height`);
    addPropertyToClass(pokemonData, 'weight', data.weightkg, requestedFields, `${recursingAs ? `${recursingAs}.` : ''}weight`);
    addPropertyToClass(pokemonData, 'baseForme', data.baseForme, requestedFields, `${recursingAs ? `${recursingAs}.` : ''}baseForme`);
    addPropertyToClass(pokemonData, 'baseSpecies', data.baseSpecies, requestedFields, `${recursingAs ? `${recursingAs}.` : ''}baseSpecies`);
    addPropertyToClass(pokemonData, 'otherFormes', data.otherFormes, requestedFields, `${recursingAs ? `${recursingAs}.` : ''}otherFormes`);
    addPropertyToClass(pokemonData, 'cosmeticFormes', data.cosmeticFormes, requestedFields, `${recursingAs ? `${recursingAs}.` : ''}cosmeticFormes`);
    addPropertyToClass(
      pokemonData,
      'baseStatsTotal',
      this.parseBaseStatsTotal(data.baseStats),
      requestedFields,
      `${recursingAs ? `${recursingAs}.` : ''}baseStatsTotal`
    );
    addPropertyToClass(pokemonData, 'levellingRate', data.levellingRate, requestedFields, `${recursingAs ? `${recursingAs}.` : ''}levellingRate`);
    addPropertyToClass(
      pokemonData,
      'minimumHatchTime',
      data.minimumHatchTime,
      requestedFields,
      `${recursingAs ? `${recursingAs}.` : ''}minimumHatchTime`
    );
    addPropertyToClass(
      pokemonData,
      'maximumHatchTime',
      this.parseMinimumHatchTimeForMaximumHatchTime(data.minimumHatchTime),
      requestedFields,
      `${recursingAs ? `${recursingAs}.` : ''}maximumHatchTime`
    );
    addPropertyToClass(
      pokemonData,
      'isEggObtainable',
      data.isEggObtainable,
      requestedFields,
      `${recursingAs ? `${recursingAs}.` : ''}isEggObtainable`
    );

    addPropertyToClass(
      pokemonData,
      'serebiiPage',
      this.parseSpeciesForSerebiiPage(data.baseSpecies ?? data.species, data.num, smogonTier),
      requestedFields,
      `${recursingAs ? `${recursingAs}.` : ''}serebiiPage`
    );
    addPropertyToClass(
      pokemonData,
      'bulbapediaPage',
      data.num >= 1 ? this.parseSpeciesForBulbapedia(data) : '',
      requestedFields,
      `${recursingAs ? `${recursingAs}.` : ''}bulbapediaPage`
    );
    addPropertyToClass(
      pokemonData,
      'smogonPage',
      this.parseSpeciesForSmogonPage(data.species, data.num, smogonTier),
      requestedFields,
      `${recursingAs ? `${recursingAs}.` : ''}smogonPage`
    );
    addPropertyToClass(
      pokemonData,
      'sprite',
      parseSpeciesForSprite({
        pokemonName: data.species,
        baseSpecies: data.baseSpecies,
        specialSprite: data.specialSprite,
        specialShinySprite: data.specialShinySprite,
        specialBackSprite: data.specialBackSprite,
        specialShinyBackSprite: data.specialShinyBackSprite
      }),
      requestedFields,
      `${recursingAs ? `${recursingAs}.` : ''}sprite`
    );
    addPropertyToClass(
      pokemonData,
      'shinySprite',
      parseSpeciesForSprite({
        pokemonName: data.species,
        baseSpecies: data.baseSpecies,
        specialSprite: data.specialSprite,
        specialShinySprite: data.specialShinySprite,
        specialBackSprite: data.specialBackSprite,
        specialShinyBackSprite: data.specialShinyBackSprite,
        shiny: true
      }),
      requestedFields,
      `${recursingAs ? `${recursingAs}.` : ''}shinySprite`
    );
    addPropertyToClass(
      pokemonData,
      'backSprite',
      parseSpeciesForSprite({
        pokemonName: data.species,
        baseSpecies: data.baseSpecies,
        specialSprite: data.specialSprite,
        specialShinySprite: data.specialShinySprite,
        specialBackSprite: data.specialBackSprite,
        specialShinyBackSprite: data.specialShinyBackSprite,
        backSprite: true
      }),
      requestedFields,
      `${recursingAs ? `${recursingAs}.` : ''}backSprite`
    );
    addPropertyToClass(
      pokemonData,
      'shinyBackSprite',
      parseSpeciesForSprite({
        pokemonName: data.species,
        baseSpecies: data.baseSpecies,
        specialSprite: data.specialSprite,
        specialShinySprite: data.specialShinySprite,
        specialBackSprite: data.specialBackSprite,
        specialShinyBackSprite: data.specialShinyBackSprite,
        shiny: true,
        backSprite: true
      }),
      requestedFields,
      `${recursingAs ? `${recursingAs}.` : ''}shinyBackSprite`
    );

    addPropertyToClass(pokemonData, 'flavorTexts', [], requestedFields, `${recursingAs ? `${recursingAs}.` : ''}flavorTexts`);

    if ((requestedFields as GraphQLSet<string>).has(`${recursingAs ? `${recursingAs}.` : ''}flavorTexts`) && data.num >= 0) {
      let shouldParseBaseForme = true;

      if (data.forme) {
        const formFlavors = this.flavors[`${data.num}${data.forme.toLowerCase()}`];

        if (formFlavors) {
          shouldParseBaseForme = false;

          for (const formFlavor of formFlavors) {
            const formFlavorEntry = new Flavor();
            formFlavorEntry.game = formFlavor.version_id;
            formFlavorEntry.flavor = formFlavor.flavor_text;
            pokemonData.flavorTexts.push(formFlavorEntry);
          }
        }
      }

      if (shouldParseBaseForme) {
        const baseFlavors = this.flavors[data.num];

        for (const baseFlavor of baseFlavors) {
          const formFlavorEntry = new Flavor();
          formFlavorEntry.game = baseFlavor.version_id;
          formFlavorEntry.flavor = baseFlavor.flavor_text;
          pokemonData.flavorTexts.push(formFlavorEntry);
        }
      }

      if (reverseFlavorTexts) {
        pokemonData.flavorTexts.reverse();
      }

      pokemonData.flavorTexts = pokemonData.flavorTexts.slice(offsetFlavorTexts, offsetFlavorTexts + takeFlavorTexts);
    }

    if (
      (requestedFields as GraphQLSet<string>).has(`${recursingAs ? `${recursingAs}.` : ''}preevolutions`) &&
      data.prevo &&
      data.prevo !== parsingPokemon
    ) {
      const prevoPokemon = this.getBySpecies({ pokemon: data.prevo, ...basePokemonArgs });
      if (prevoPokemon) {
        preevolutionChain.push(
          this.mapPokemonDataToPokemonGraphQL({
            data: this.getBySpecies({ pokemon: toLowerSingleWordCase(prevoPokemon.species), ...basePokemonArgs })!,
            requestedFields,
            ...basePokemonArgs,
            parsingPokemon: this.parseDataForEvolutionRecursion(data, prevoPokemon),
            recursingAs: 'preevolutions'
          })
        );
      }

      addPropertyToClass(
        pokemonData,
        'preevolutions',
        await Promise.all(preevolutionChain),
        requestedFields,
        `${recursingAs ? `${recursingAs}.` : ''}preevolutions`
      );
    }

    if (
      (requestedFields as GraphQLSet<string>).has(`${recursingAs ? `${recursingAs}.` : ''}evolutions`) &&
      data.evos &&
      data.evos[0] !== parsingPokemon
    ) {
      for (const evo of data.evos) {
        const evoPokemon = this.getBySpecies({ pokemon: toLowerSingleWordCase(evo), ...basePokemonArgs });
        if (evoPokemon) {
          evolutionChain.push(
            this.mapPokemonDataToPokemonGraphQL({
              data: this.getBySpecies({ pokemon: toLowerSingleWordCase(evoPokemon.species), ...basePokemonArgs })!,
              requestedFields,
              ...basePokemonArgs,
              parsingPokemon: this.parseDataForEvolutionRecursion(data, evoPokemon),
              recursingAs: 'evolutions'
            })
          );
        }
      }

      addPropertyToClass(
        pokemonData,
        'evolutions',
        await Promise.all(evolutionChain),
        requestedFields,
        `${recursingAs ? `${recursingAs}.` : ''}evolutions`
      );
    }

    return pokemonData;
  }

  private static parseDataForEvolutionRecursion(basePokemonData: PokemonTypes.DexEntry, evoChainData: PokemonTypes.DexEntry) {
    if (basePokemonData.forme && evoChainData.forme && basePokemonData.forme === evoChainData.forme) {
      return toLowerSingleWordCase(basePokemonData.species);
    }

    return basePokemonData.baseSpecies?.toLowerCase() || basePokemonData.species;
  }

  private static parseSpeciesForBulbapedia(pokemonData: PokemonTypes.DexEntry) {
    if (pokemonData.specialBulbapediaUrl) {
      return this.bulbapediaBaseUrlPrefix + pokemonData.specialBulbapediaUrl + this.bulbapediaBaseUrlPostfix;
    }

    if (pokemonData.baseSpecies) {
      return this.bulbapediaBaseUrlPrefix + pokemonData.baseSpecies + this.bulbapediaBaseUrlPostfix;
    }

    return this.bulbapediaBaseUrlPrefix + pokemonData.species + this.bulbapediaBaseUrlPostfix;
  }

  /**
   * Parses data from a Pokémon into a valid Serebii URL
   * @param pokemonName The name of the Pokémon to parse, required for new Serebii pages
   * @param pokemonNumber The number of the Pokémon to parse, required for old Serebii pages
   * @param pokemonTier The smogon tier of the Pokémon, required to check if the Pokémon is available in Generation 8
   */
  private static parseSpeciesForSerebiiPage(pokemonName: string, pokemonNumber: number, pokemonTier: string) {
    // If the Pokémon has a number of 0 or lower (0 is Missingno, negatives are Smogon CAP) then it doesn't have a Serebii page
    if (pokemonNumber <= 0) return '';

    if (pokemonTier.toLowerCase() === 'past') {
      // If the Pokémon is not in Generation 8 then build a Generation 7 based URL
      return `${this.serebiiBaseUrl}-sm/${pokemonNumber < 100 ? pokemonNumber.toString().padStart(3, '0') : pokemonNumber}.shtml`;
    }

    // If the Pokémon is available in Generation 8 then build a Generation 8 based URL
    return `${this.serebiiBaseUrl}-swsh/${pokemonName.replace(/ /g, '').toLowerCase()}`;
  }

  /**
   * Parses data from a Pokémon into a valid Smogon Dex URL
   * @param pokemonName The name of the Pokémon to parse
   * @param pokemonNumber The number of the Pokémon to parse
   * @param pokemonTier The smogon tier of the Pokémon, required to check if the Pokémon is available in Generation 8
   */
  private static parseSpeciesForSmogonPage(pokemonName: string, pokemonNumber: number, pokemonTier: string) {
    // If the Pokémon has a number of 0 or lower (0 is Missingno, negatives are Smogon CAP) then it doesn't have a Serebii page
    if (pokemonNumber <= 0) return '';

    if (pokemonTier.toLowerCase() === 'past') {
      // If the Pokémon is not in Generation 8 then build a Generation 7 based URL
      return `${this.smogonBaseUrl}/sm/pokemon/${toLowerHyphenCase(pokemonName)}`;
    }

    // If the Pokémon is available in Generation 8 then build a Generation 8 based URL
    return `${this.smogonBaseUrl}/ss/pokemon/${toLowerHyphenCase(pokemonName.replace(/:/g, ''))}`;
  }

  private static parseBaseStatsTotal(baseStats: PokemonTypes.Stats) {
    return baseStats.hp + baseStats.atk + baseStats.def + baseStats.spa + baseStats.spd + baseStats.spe;
  }

  private static parseMinimumHatchTimeForMaximumHatchTime(minimumHatchTime?: number) {
    return minimumHatchTime ? minimumHatchTime + 256 : undefined;
  }

  private static parseFormeIdentifiers(pokemon: string) {
    switch (pokemon.split(' ')[0]) {
      case 'mega':
        pokemon = `${pokemon.substring(pokemon.split(' ')[0].length + 1)}-mega`;
        break;
      case 'gigantamax':
      case 'gmax':
        pokemon = `${pokemon.substring(pokemon.split(' ')[0].length + 1)}-gmax`;
        break;
      case 'alola':
      case 'alolan':
        pokemon = `${pokemon.substring(pokemon.split(' ')[0].length + 1)}-alola`;
        break;
      case 'galar':
      case 'galarian':
        pokemon = `${pokemon.substring(pokemon.split(' ')[0].length + 1)}-galar`;
        break;
      default:
        break;
    }

    if (pokemon.startsWith('mega')) {
      pokemon = `${pokemon.substring(4, pokemon.length)}mega`;
    }

    if (pokemon.startsWith('gigantamax')) {
      pokemon = `${pokemon.substring(10, pokemon.length)}gmax`;
    } else if (pokemon.startsWith('gmax')) {
      pokemon = `${pokemon.substring(4, pokemon.length)}gmax`;
    }

    if (pokemon.startsWith('alolan')) {
      pokemon = `${pokemon.substring(6, pokemon.length)}alola`;
    } else if (pokemon.startsWith('alola')) {
      pokemon = `${pokemon.substring(5, pokemon.length)}alola`;
    }

    if (pokemon.startsWith('galarian')) {
      pokemon = `${pokemon.substring(8, pokemon.length)}galar`;
    } else if (pokemon.startsWith('galar')) {
      pokemon = `${pokemon.substring(5, pokemon.length)}galar`;
    }

    return pokemon;
  }
}

interface MapPokemonDataToPokemonGraphQLParameters {
  data: PokemonTypes.DexEntry;
  requestedFields: GraphQLSet<keyof Pokemon>;
  offsetFlavorTexts: number;
  takeFlavorTexts: number;
  reverseFlavorTexts: boolean;
  parsingPokemon?: string;
  recursingAs?: 'preevolutions' | 'evolutions' | false;
}
