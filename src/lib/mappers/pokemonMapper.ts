import { abilities } from '#assets/abilities';
import { pokedex } from '#assets/pokedex';
import type { PokemonTypes } from '#assets/pokemon-source';
import { AbilityReferencedCallIdentifier, mapAbilityDataToAbilityGraphQL } from '#mappers/abilityMapper';
import { getLearnsetDataset, mapPokemonToPokemonLearnsetGraphQL } from '#mappers/learnsetMapper';
import { mapTypesToTypeMatchupGraphQL } from '#mappers/typeMatchupMapper';
import type {
  Abilities,
  Ability,
  CatchRate,
  EvYields,
  Flavor,
  Gender,
  GenerationalPokemonLearnset,
  Pokemon,
  PokemonLearnset,
  PokemonType,
  Stats,
  TypeMatchup
} from '#types/graphql-mapped-types';
import type { Generation, UnwrapArray } from '#types/utility-types';
import type { GraphQLSet } from '#utils/GraphQLSet';
import { addPropertyToObjectConditional, addPropertyToObjectFieldBased } from '#utils/addPropertyToObject';
import { flavorsModule as flavors } from '#utils/flavorsModule';
import { formatsModule as formats } from '#utils/formatsModule';
import { speciesThatAreNotInGeneration8Nor9 } from '#utils/pastGenerationPokemon';
import type { TypesEnum } from '#utils/pokemonTypes';
import { parseSpeciesForSprite } from '#utils/sprite-parser';
import { toLowerHyphenCase, toLowerSingleWordCase } from '#utils/utils';
import { cast, toTitleCase } from '@sapphire/utilities';

const bulbapediaBaseUrlPrefix = 'https://bulbapedia.bulbagarden.net/wiki/';
const bulbapediaBaseUrlPostfix = '_(Pokémon)';
const serebiiBaseUrl = 'https://www.serebii.net/pokedex';
const smogonBaseUrl = 'https://www.smogon.com/dex';

export function mapPokemonDataToPokemonGraphQL({
  data,
  requestedFields,
  offsetFlavorTexts = 0,
  reverseFlavorTexts = true,
  takeFlavorTexts = 1,
  parsingPokemon = '',
  recursingAs = false
}: MapPokemonDataToPokemonGraphQLParameters) {
  const resolvedRecursingAs = recursingAs ? (`${recursingAs}.` as const) : ('' as const);

  const genderEntryRequestedFields = cast<GraphQLSet<keyof Gender>>(requestedFields);
  const genderObject: Gender = {} as Gender;
  const basePokemonGenderRatio: PokemonTypes.DexEntry['genderRatio'] = data.genderRatio || {
    male: '50%',
    female: '50%'
  };
  addPropertyToObjectFieldBased({
    objectTarget: genderObject,
    propertyKey: 'male',
    propertyValue: basePokemonGenderRatio.male,
    requestedFields: genderEntryRequestedFields,
    fieldAccessor: `${resolvedRecursingAs}gender.male`
  });
  addPropertyToObjectFieldBased({
    objectTarget: genderObject,
    propertyKey: 'female',
    propertyValue: basePokemonGenderRatio.female,
    requestedFields: genderEntryRequestedFields,
    fieldAccessor: `${resolvedRecursingAs}gender.female`
  });

  const baseStatsRequestedFields = cast<GraphQLSet<keyof Stats>>(requestedFields);
  const baseStatsObject: Stats = {} as Stats;
  addPropertyToObjectFieldBased({
    objectTarget: baseStatsObject,
    propertyKey: 'hp',
    propertyValue: data.baseStats.hp,
    requestedFields: baseStatsRequestedFields,
    fieldAccessor: `${resolvedRecursingAs}baseStats.hp`
  });
  addPropertyToObjectFieldBased({
    objectTarget: baseStatsObject,
    propertyKey: 'attack',
    propertyValue: data.baseStats.atk,
    requestedFields: baseStatsRequestedFields,
    fieldAccessor: `${resolvedRecursingAs}baseStats.attack`
  });
  addPropertyToObjectFieldBased({
    objectTarget: baseStatsObject,
    propertyKey: 'defense',
    propertyValue: data.baseStats.def,
    requestedFields: baseStatsRequestedFields,
    fieldAccessor: `${resolvedRecursingAs}baseStats.defense`
  });
  addPropertyToObjectFieldBased({
    objectTarget: baseStatsObject,
    propertyKey: 'specialattack',
    propertyValue: data.baseStats.spa,
    requestedFields: baseStatsRequestedFields,
    fieldAccessor: `${resolvedRecursingAs}baseStats.specialattack`
  });
  addPropertyToObjectFieldBased({
    objectTarget: baseStatsObject,
    propertyKey: 'specialdefense',
    propertyValue: data.baseStats.spd,
    requestedFields: baseStatsRequestedFields,
    fieldAccessor: `${resolvedRecursingAs}baseStats.specialdefense`
  });
  addPropertyToObjectFieldBased({
    objectTarget: baseStatsObject,
    propertyKey: 'speed',
    propertyValue: data.baseStats.spe,
    requestedFields: baseStatsRequestedFields,
    fieldAccessor: `${resolvedRecursingAs}baseStats.speed`
  });

  const evYieldsRequestedFields = cast<GraphQLSet<keyof EvYields>>(requestedFields);
  const evYieldsObject: EvYields = {} as EvYields;
  addPropertyToObjectFieldBased({
    objectTarget: evYieldsObject,
    propertyKey: 'hp',
    propertyValue: data.evYields.hp,
    requestedFields: evYieldsRequestedFields,
    fieldAccessor: `${resolvedRecursingAs}evYields.hp`
  });
  addPropertyToObjectFieldBased({
    objectTarget: evYieldsObject,
    propertyKey: 'attack',
    propertyValue: data.evYields.atk,
    requestedFields: evYieldsRequestedFields,
    fieldAccessor: `${resolvedRecursingAs}evYields.attack`
  });
  addPropertyToObjectFieldBased({
    objectTarget: evYieldsObject,
    propertyKey: 'defense',
    propertyValue: data.evYields.def,
    requestedFields: evYieldsRequestedFields,
    fieldAccessor: `${resolvedRecursingAs}evYields.defense`
  });
  addPropertyToObjectFieldBased({
    objectTarget: evYieldsObject,
    propertyKey: 'specialattack',
    propertyValue: data.evYields.spa,
    requestedFields: evYieldsRequestedFields,
    fieldAccessor: `${resolvedRecursingAs}evYields.specialattack`
  });
  addPropertyToObjectFieldBased({
    objectTarget: evYieldsObject,
    propertyKey: 'specialdefense',
    propertyValue: data.evYields.spd,
    requestedFields: evYieldsRequestedFields,
    fieldAccessor: `${resolvedRecursingAs}evYields.specialdefense`
  });
  addPropertyToObjectFieldBased({
    objectTarget: evYieldsObject,
    propertyKey: 'speed',
    propertyValue: data.evYields.spe,
    requestedFields: evYieldsRequestedFields,
    fieldAccessor: `${resolvedRecursingAs}evYields.speed`
  });

  const abilitiesObject: Abilities = {} as Abilities;

  const abilitiesRequestedFields = requestedFields.filterStartsWith<keyof Abilities>(`${resolvedRecursingAs}abilities.`);
  addPropertyToObjectFieldBased({
    objectTarget: abilitiesObject,
    propertyKey: 'first',
    propertyValue: () =>
      resolvedNestedAbility(
        data.abilities.first,
        abilitiesRequestedFields.filterStartsWith<keyof Ability>(`${resolvedRecursingAs}abilities.first.`, true)
      ),
    requestedFields: abilitiesRequestedFields,
    fieldAccessor: `${resolvedRecursingAs}abilities.first`
  });
  addPropertyToObjectFieldBased({
    objectTarget: abilitiesObject,
    propertyKey: 'second',
    propertyValue: () =>
      resolvedNestedAbility(
        data.abilities.second,
        abilitiesRequestedFields.filterStartsWith<keyof Ability>(`${resolvedRecursingAs}abilities.second.`, true)
      ),
    requestedFields: abilitiesRequestedFields,
    fieldAccessor: `${resolvedRecursingAs}abilities.second`
  });
  addPropertyToObjectFieldBased({
    objectTarget: abilitiesObject,
    propertyKey: 'hidden',
    propertyValue: () =>
      resolvedNestedAbility(
        data.abilities.hidden,
        abilitiesRequestedFields.filterStartsWith<keyof Ability>(`${resolvedRecursingAs}abilities.hidden.`, true)
      ),
    requestedFields: abilitiesRequestedFields,
    fieldAccessor: `${resolvedRecursingAs}abilities.hidden`
  });
  addPropertyToObjectFieldBased({
    objectTarget: abilitiesObject,
    propertyKey: 'special',
    propertyValue: () =>
      resolvedNestedAbility(
        data.abilities.special,
        abilitiesRequestedFields.filterStartsWith<keyof Ability>(`${resolvedRecursingAs}abilities.special.`, true)
      ),
    requestedFields: abilitiesRequestedFields,
    fieldAccessor: `${resolvedRecursingAs}abilities.special`
  });

  const pokemonTypesArray: PokemonType[] = [];
  const pokemonTypeRequestedFields = requestedFields.filterStartsWith<keyof PokemonType>(`${resolvedRecursingAs}types.`);

  for (const type of data.types) {
    const pokemonTypeObject: PokemonType = {} as PokemonType;

    addPropertyToObjectFieldBased({
      objectTarget: pokemonTypeObject,
      propertyKey: 'name',
      propertyValue: toTitleCase(type),
      requestedFields: pokemonTypeRequestedFields,
      fieldAccessor: `${resolvedRecursingAs}types.name`
    });

    addPropertyToObjectConditional({
      objectTarget: pokemonTypeObject,
      propertyKey: 'matchup',
      propertyValue: () =>
        resolveNestedType(type, pokemonTypeRequestedFields.filterStartsWith<keyof TypeMatchup>(`${resolvedRecursingAs}types.matchup.`, true)),
      condition: pokemonTypeRequestedFields.hasStartsWith(`${resolvedRecursingAs}types.matchup.`)
    });

    if (Object.values(pokemonTypeObject).length) {
      pokemonTypesArray.push(pokemonTypeObject);
    }
  }

  const generationalLearnsetsObject: GenerationalPokemonLearnset = {} as GenerationalPokemonLearnset;
  const generationalLearnsetsRequestedFields = requestedFields.filterStartsWith<keyof GenerationalPokemonLearnset>(
    `${resolvedRecursingAs}learnsets.`
  );

  addPropertyToObjectConditional({
    objectTarget: generationalLearnsetsObject,
    propertyKey: 'generation3',
    propertyValue: () =>
      resolvedNestedLearnset(
        parsingPokemon || toLowerSingleWordCase(data.species),
        3,
        generationalLearnsetsRequestedFields.filterStartsWith<keyof PokemonLearnset>(`${resolvedRecursingAs}learnsets.generation3.`, true)
      ),
    condition: generationalLearnsetsRequestedFields.hasStartsWith(`${resolvedRecursingAs}learnsets.generation3.`)
  });

  addPropertyToObjectConditional({
    objectTarget: generationalLearnsetsObject,
    propertyKey: 'generation4',
    propertyValue: () =>
      resolvedNestedLearnset(
        parsingPokemon || toLowerSingleWordCase(data.species),
        4,
        generationalLearnsetsRequestedFields.filterStartsWith<keyof PokemonLearnset>(`${resolvedRecursingAs}learnsets.generation4.`, true)
      ),
    condition: generationalLearnsetsRequestedFields.hasStartsWith(`${resolvedRecursingAs}learnsets.generation4.`)
  });

  addPropertyToObjectConditional({
    objectTarget: generationalLearnsetsObject,
    propertyKey: 'generation5',
    propertyValue: () =>
      resolvedNestedLearnset(
        parsingPokemon || toLowerSingleWordCase(data.species),
        5,
        generationalLearnsetsRequestedFields.filterStartsWith<keyof PokemonLearnset>(`${resolvedRecursingAs}learnsets.generation5.`, true)
      ),
    condition: generationalLearnsetsRequestedFields.hasStartsWith(`${resolvedRecursingAs}learnsets.generation5.`)
  });

  addPropertyToObjectConditional({
    objectTarget: generationalLearnsetsObject,
    propertyKey: 'generation6',
    propertyValue: () =>
      resolvedNestedLearnset(
        parsingPokemon || toLowerSingleWordCase(data.species),
        6,
        generationalLearnsetsRequestedFields.filterStartsWith<keyof PokemonLearnset>(`${resolvedRecursingAs}learnsets.generation6.`, true)
      ),
    condition: generationalLearnsetsRequestedFields.hasStartsWith(`${resolvedRecursingAs}learnsets.generation6.`)
  });

  addPropertyToObjectConditional({
    objectTarget: generationalLearnsetsObject,
    propertyKey: 'generation7',
    propertyValue: () =>
      resolvedNestedLearnset(
        parsingPokemon || toLowerSingleWordCase(data.species),
        7,
        generationalLearnsetsRequestedFields.filterStartsWith<keyof PokemonLearnset>(`${resolvedRecursingAs}learnsets.generation7.`, true)
      ),
    condition: generationalLearnsetsRequestedFields.hasStartsWith(`${resolvedRecursingAs}learnsets.generation7.`)
  });

  addPropertyToObjectConditional({
    objectTarget: generationalLearnsetsObject,
    propertyKey: 'generation8',
    propertyValue: () =>
      resolvedNestedLearnset(
        parsingPokemon || toLowerSingleWordCase(data.species),
        9,
        generationalLearnsetsRequestedFields.filterStartsWith<keyof PokemonLearnset>(`${resolvedRecursingAs}learnsets.generation8.`, true)
      ),
    condition: generationalLearnsetsRequestedFields.hasStartsWith(`${resolvedRecursingAs}learnsets.generation8.`)
  });

  const catchRateRequestedFields = cast<GraphQLSet<keyof CatchRate>>(requestedFields);
  const catchRateObject: CatchRate = {} as CatchRate;
  const basePokemonCatchRate: PokemonTypes.DexEntry['catchRate'] = data.catchRate || {
    base: 0,
    percentageWithOrdinaryPokeballAtFullHealth: '0%'
  };
  addPropertyToObjectFieldBased({
    objectTarget: catchRateObject,
    propertyKey: 'base',
    propertyValue: basePokemonCatchRate.base,
    requestedFields: catchRateRequestedFields,
    fieldAccessor: `${resolvedRecursingAs}catchRate.base`
  });
  addPropertyToObjectFieldBased({
    objectTarget: catchRateObject,
    propertyKey: 'percentageWithOrdinaryPokeballAtFullHealth',
    propertyValue: basePokemonCatchRate.percentageWithOrdinaryPokeballAtFullHealth,
    requestedFields: catchRateRequestedFields,
    fieldAccessor: `${resolvedRecursingAs}catchRate.percentageWithOrdinaryPokeballAtFullHealth`
  });

  const basePokemonArgs = {
    offsetFlavorTexts,
    takeFlavorTexts,
    reverseFlavorTexts
  };

  const evolutionChain: Pokemon[] = [];
  const preevolutionChain: Pokemon[] = [];

  const pokemonData: Pokemon = {} as Pokemon;

  addPropertyToObjectConditional({
    objectTarget: pokemonData,
    propertyKey: 'learnsets',
    propertyValue: generationalLearnsetsObject,
    condition: Boolean(Object.keys(generationalLearnsetsObject).length)
  });
  addPropertyToObjectConditional({
    objectTarget: pokemonData,
    propertyKey: 'abilities',
    propertyValue: abilitiesObject,
    condition: Boolean(Object.keys(abilitiesObject).length)
  });
  addPropertyToObjectConditional({
    objectTarget: pokemonData,
    propertyKey: 'types',
    propertyValue: pokemonTypesArray,
    condition: Boolean(pokemonTypesArray.length)
  });
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'gender',
    propertyValue: genderObject,
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}gender`
  });
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'baseStats',
    propertyValue: baseStatsObject,
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}baseStats`
  });
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'evYields',
    propertyValue: evYieldsObject,
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}evYields`
  });
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'catchRate',
    propertyValue: catchRateObject,
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}catchRate`
  });

  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'key',
    propertyValue: data.key,
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}key`
  });
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'num',
    propertyValue: data.num,
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}num`
  });
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'species',
    propertyValue: data.species,
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}species`
  });
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'color',
    propertyValue: data.color,
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}color`
  });
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'eggGroups',
    propertyValue: data.eggGroups,
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}eggGroups`
  });
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'evolutionLevel',
    propertyValue: data.evoLevel,
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}evolutionLevel`
  });

  const smogonTier = formats[toLowerSingleWordCase(data.species)] || 'Undiscovered';
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'smogonTier',
    propertyValue: smogonTier,
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}smogonTier`
  });

  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'height',
    propertyValue: data.heightm,
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}height`
  });
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'weight',
    propertyValue: data.weightkg,
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}weight`
  });
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'forme',
    propertyValue: data.forme,
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}forme`
  });
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'formeLetter',
    propertyValue: data.formeLetter,
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}formeLetter`
  });
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'baseForme',
    propertyValue: data.baseForme,
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}baseForme`
  });
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'baseSpecies',
    propertyValue: data.baseSpecies,
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}baseSpecies`
  });
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'otherFormes',
    propertyValue: data.otherFormes,
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}otherFormes`
  });
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'cosmeticFormes',
    propertyValue: data.cosmeticFormes,
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}cosmeticFormes`
  });
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'baseStatsTotal',
    propertyValue: parseBaseStatsTotal(data.baseStats),
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}baseStatsTotal`
  });
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'levellingRate',
    propertyValue: data.levellingRate,
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}levellingRate`
  });
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'minimumHatchTime',
    propertyValue: data.minimumHatchTime,
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}minimumHatchTime`
  });
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'maximumHatchTime',
    propertyValue: parseMinimumHatchTimeForMaximumHatchTime(data.minimumHatchTime),
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}maximumHatchTime`
  });
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'isEggObtainable',
    propertyValue: data.isEggObtainable,
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}isEggObtainable`
  });

  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'serebiiPage',
    propertyValue: parseSpeciesForSerebiiPage(data.baseSpecies ?? data.species, data.num, smogonTier),
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}serebiiPage`
  });
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'bulbapediaPage',
    propertyValue: data.num >= 0 ? parseSpeciesForBulbapedia(data) : '',
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}bulbapediaPage`
  });
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'smogonPage',
    propertyValue: parseSpeciesForSmogonPage(data.species, data.num, smogonTier),
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}smogonPage`
  });
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'sprite',
    propertyValue: parseSpeciesForSprite({
      pokemonName: data.species,
      pokemonNumber: data.num,
      baseSpecies: data.baseSpecies,
      specialSprite: data.specialSprite,
      specialShinySprite: data.specialShinySprite,
      specialBackSprite: data.specialBackSprite,
      specialShinyBackSprite: data.specialShinyBackSprite
    }),
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}sprite`
  });
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'shinySprite',
    propertyValue: parseSpeciesForSprite({
      pokemonName: data.species,
      pokemonNumber: data.num,
      baseSpecies: data.baseSpecies,
      specialSprite: data.specialSprite,
      specialShinySprite: data.specialShinySprite,
      specialBackSprite: data.specialBackSprite,
      specialShinyBackSprite: data.specialShinyBackSprite,
      shiny: true
    }),
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}shinySprite`
  });
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'backSprite',
    propertyValue: parseSpeciesForSprite({
      pokemonName: data.species,
      pokemonNumber: data.num,
      baseSpecies: data.baseSpecies,
      specialSprite: data.specialSprite,
      specialShinySprite: data.specialShinySprite,
      specialBackSprite: data.specialBackSprite,
      specialShinyBackSprite: data.specialShinyBackSprite,
      backSprite: true
    }),
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}backSprite`
  });
  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'shinyBackSprite',
    propertyValue: parseSpeciesForSprite({
      pokemonName: data.species,
      pokemonNumber: data.num,
      baseSpecies: data.baseSpecies,
      specialSprite: data.specialSprite,
      specialShinySprite: data.specialShinySprite,
      specialBackSprite: data.specialBackSprite,
      specialShinyBackSprite: data.specialShinyBackSprite,
      shiny: true,
      backSprite: true
    }),
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}shinyBackSprite`
  });

  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'flavorTexts',
    propertyValue: [],
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}flavorTexts`
  });

  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'legendary',
    propertyValue: data.legendary ?? false,
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}legendary`
  });

  addPropertyToObjectFieldBased({
    objectTarget: pokemonData,
    propertyKey: 'mythical',
    propertyValue: data.mythical ?? false,
    requestedFields,
    fieldAccessor: `${resolvedRecursingAs}mythical`
  });

  if ((requestedFields as GraphQLSet<string>).has(`${resolvedRecursingAs}flavorTexts`) && data.num >= 0) {
    let shouldParseBaseForme = true;

    if (data.forme) {
      const formFlavors = flavors[`${data.num}${data.forme.toLowerCase()}`];

      if (formFlavors) {
        shouldParseBaseForme = false;

        for (const formFlavor of formFlavors) {
          const formFlavorEntry: Flavor = {} as Flavor;
          formFlavorEntry.game = formFlavor.version_id;
          formFlavorEntry.flavor = formFlavor.flavor_text;
          pokemonData.flavorTexts.push(formFlavorEntry);
        }
      }
    }

    if (shouldParseBaseForme) {
      const baseFlavors = flavors[data.num];

      for (const baseFlavor of baseFlavors) {
        const formFlavorEntry: Flavor = {} as Flavor;
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

  if ((requestedFields as GraphQLSet<string>).has(`${resolvedRecursingAs}preevolutions`) && data.prevo && data.prevo !== parsingPokemon) {
    const prevoPokemon = pokedex.get(data.prevo);
    if (prevoPokemon) {
      preevolutionChain.push(
        mapPokemonDataToPokemonGraphQL({
          data: pokedex.get(toLowerSingleWordCase(prevoPokemon.species))!,
          requestedFields,
          ...basePokemonArgs,
          parsingPokemon: parseDataForEvolutionRecursion(data, prevoPokemon),
          recursingAs: 'preevolutions'
        })
      );
    }

    addPropertyToObjectFieldBased({
      objectTarget: pokemonData,
      propertyKey: 'preevolutions',
      propertyValue: preevolutionChain,
      requestedFields,
      fieldAccessor: `${resolvedRecursingAs}preevolutions`
    });
  }

  if ((requestedFields as GraphQLSet<string>).has(`${resolvedRecursingAs}evolutions`) && data.evos && data.evos[0] !== parsingPokemon) {
    for (const evo of data.evos) {
      const evoPokemon = pokedex.get(toLowerSingleWordCase(evo));
      if (evoPokemon) {
        evolutionChain.push(
          mapPokemonDataToPokemonGraphQL({
            data: pokedex.get(toLowerSingleWordCase(evoPokemon.species))!,
            requestedFields,
            ...basePokemonArgs,
            parsingPokemon: parseDataForEvolutionRecursion(data, evoPokemon),
            recursingAs: 'evolutions'
          })
        );
      }
    }

    addPropertyToObjectFieldBased({
      objectTarget: pokemonData,
      propertyKey: 'evolutions',
      propertyValue: evolutionChain,
      requestedFields,
      fieldAccessor: `${resolvedRecursingAs}evolutions`
    });
  }

  return pokemonData;
}

function resolvedNestedAbility(abilityKey: string | undefined, abilityRequestedFields: GraphQLSet<keyof Ability>): Ability | undefined {
  if (abilityKey) {
    const abilityFromDataset = abilities.get(abilityKey);

    if (abilityFromDataset) {
      return mapAbilityDataToAbilityGraphQL({
        data: abilityFromDataset,
        requestedFields: abilityRequestedFields,
        referencedCall: AbilityReferencedCallIdentifier.PokemonToAbility
      });
    }
  }

  return undefined;
}

function resolveNestedType(type: UnwrapArray<PokemonTypes.DexEntry['types']>, typeRequestedFields: GraphQLSet<keyof TypeMatchup>): TypeMatchup {
  return mapTypesToTypeMatchupGraphQL({ primaryType: toLowerSingleWordCase(type) as TypesEnum }, typeRequestedFields);
}

function resolvedNestedLearnset(
  pokemon: string,
  generation: Exclude<Generation, 1 | 2>,
  pokemonLearnsetRequestedFields: GraphQLSet<keyof PokemonLearnset>
): PokemonLearnset | null {
  const learnsetFromDataset = getLearnsetDataset(pokemon);

  if (!learnsetFromDataset) {
    return null;
  }

  return mapPokemonToPokemonLearnsetGraphQL({
    learnsetFromDataset,
    generation,
    requestedFields: pokemonLearnsetRequestedFields
  });
}

function parseBaseStatsTotal(baseStats: PokemonTypes.Stats) {
  return baseStats.hp + baseStats.atk + baseStats.def + baseStats.spa + baseStats.spd + baseStats.spe;
}

function parseMinimumHatchTimeForMaximumHatchTime(minimumHatchTime?: number) {
  return minimumHatchTime ? minimumHatchTime + 256 : undefined;
}

function parseSpeciesForBulbapedia(pokemonData: PokemonTypes.DexEntry) {
  if (pokemonData.specialBulbapediaUrl) {
    return bulbapediaBaseUrlPrefix + pokemonData.specialBulbapediaUrl + bulbapediaBaseUrlPostfix;
  }

  if (pokemonData.baseSpecies) {
    return bulbapediaBaseUrlPrefix + pokemonData.baseSpecies + bulbapediaBaseUrlPostfix;
  }

  return bulbapediaBaseUrlPrefix + pokemonData.species + bulbapediaBaseUrlPostfix;
}

/**
 * Parses data from a Pokémon into a valid Serebii URL
 * @param pokemonName The name of the Pokémon to parse, required for new Serebii pages
 * @param pokemonNumber The number of the Pokémon to parse, required for old Serebii pages
 * @param pokemonTier The smogon tier of the Pokémon, required to check if the Pokémon is available in Generation 9
 */
function parseSpeciesForSerebiiPage(pokemonName: string, pokemonNumber: number, pokemonTier: string) {
  // If the Pokémon has a number of 0 or lower (0 is Missingno, negatives are Smogon CAP and PokéStar) then it doesn't have a Serebii page
  if (pokemonNumber <= 0) return '';

  const parsedPokemonName = toLowerHyphenCase(pokemonName.replace(/:/g, ''));

  // If the Pokémon is not in Generation 8 or 9 then build a Generation 7 based URL
  if (speciesThatAreNotInGeneration8Nor9.includes(parsedPokemonName)) {
    return `${serebiiBaseUrl}-sm/${pokemonNumber < 100 ? pokemonNumber.toString().padStart(3, '0') : pokemonNumber}.shtml`;
  }

  // If the Pokémon is `'past'` in Generation 9, but was not included in speciesThatAreNotInGeneration8Nor9
  // or the Pokémon is within the numbers range for generation 8,
  // then build a Generation 8 based URL
  if (pokemonTier.toLowerCase() === 'past' || (pokemonNumber >= 810 && pokemonNumber <= 905)) {
    return `${serebiiBaseUrl}-swsh/${pokemonName.replace(/ /g, '').toLowerCase()}`;
  }

  // If the Pokémon is available in Generation 9 then build a Generation 9 based URL
  return `${serebiiBaseUrl}-sv/${pokemonName.replace(/ /g, '').toLowerCase()}`;
}

function parseDataForEvolutionRecursion(basePokemonData: PokemonTypes.DexEntry, _: PokemonTypes.DexEntry) {
  if (basePokemonData.forme) {
    return toLowerSingleWordCase(basePokemonData.species);
  }

  return toLowerSingleWordCase(basePokemonData.baseSpecies || basePokemonData.species);
}

/**
 * Parses data from a Pokémon into a valid Smogon Dex URL
 * @param pokemonName The name of the Pokémon to parse
 * @param pokemonNumber The number of the Pokémon to parse
 * @param pokemonTier The smogon tier of the Pokémon, required to check if the Pokémon is available in Generation 9
 */
function parseSpeciesForSmogonPage(pokemonName: string, pokemonNumber: number, pokemonTier: string) {
  // If the Pokémon is Missingno, then it doesn't have a Smogon Dex page
  if (pokemonNumber === 0) return '';

  const parsedPokemonName = toLowerHyphenCase(pokemonName.replace(/:/g, ''));

  // If the Pokémon has a number of lower than 0 then it is CAP so we can always send the latest generation URL
  if (pokemonNumber < 0) {
    return `${smogonBaseUrl}/sv/pokemon/${parsedPokemonName}`;
  }

  // If the Pokémon is not in Generation 8 or 9 then build a Generation 7 based URL
  if (speciesThatAreNotInGeneration8Nor9.includes(parsedPokemonName)) {
    return `${smogonBaseUrl}/sm/pokemon/${parsedPokemonName}`;
  }

  // IF the pokemon is not ursaluna-bloodmoon
  // AND the Pokémon is `'past'` in Generation 9, but was not included in `speciesThatAreNotInGeneration8Nor9`
  // OR the Pokémon is within the numbers range for generation 8,
  // then build a Generation 8 based URL
  if (pokemonName !== 'ursaluna-bloodmoon' && (pokemonTier.toLowerCase() === 'past' || (pokemonNumber >= 810 && pokemonNumber <= 905))) {
    return `${smogonBaseUrl}/ss/pokemon/${parsedPokemonName}`;
  }

  // If the Pokémon is available in Generation 9 then build a Generation 9 based URL
  return `${smogonBaseUrl}/sv/pokemon/${parsedPokemonName}`;
}

export const enum PokemonReferencedCallIdentifier {
  None = 'none',
  AbilityToPokemon = 'abilityToPokemon',
  MoveToPokemon = 'moveToPokemon'
}

interface MapPokemonDataToPokemonGraphQLParameters {
  data: PokemonTypes.DexEntry;
  requestedFields: GraphQLSet<keyof Pokemon>;
  offsetFlavorTexts: number;
  takeFlavorTexts: number;
  reverseFlavorTexts: boolean;
  referencedCall?: PokemonReferencedCallIdentifier;
  parsingPokemon?: string;
  recursingAs?: 'preevolutions' | 'evolutions' | false;
}
