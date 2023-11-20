import { learnsets } from '#assets/learnsets';
import { moves } from '#assets/moves';
import { pokedex } from '#assets/pokedex';
import type { PokemonTypes } from '#assets/pokemon-source';
import { mapMoveDataToMoveGraphQL } from '#mappers/moveMapper';
import type { Learnset, LearnsetLevelUpMove, LearnsetMove, Move, PokemonLearnset } from '#types/graphql-mapped-types';
import type { Generation, NonNullish } from '#types/utility-types';
import type { GraphQLSet } from '#utils/GraphQLSet';
import { addPropertyToObjectFieldBased } from '#utils/addPropertyToObject';
import { parseSpeciesForSprite } from '#utils/sprite-parser';
import { toLowerSingleWordCase } from '#utils/utils';
import type { GetLearnsetArgs } from '#validations/getLearnsetArgs';
import { cast, isNullish } from '@sapphire/utilities';

export function mapPokemonAndMovesToLearnsetGraphQL({ args, requestedFields }: MapPokemonAndMovesToLearnsetGraphQLParams): Learnset | null {
  const learnsetFromDataset = getLearnsetDataset(args.pokemon);

  if (isNullish(learnsetFromDataset)) {
    return null;
  }

  const learnset: Learnset = {} as Learnset;

  if (learnsetFromDataset.eventOnly === undefined) {
    const levelupMoves: LearnsetLevelUpMove[] = [];
    const virtualTransferMoves: LearnsetMove[] = [];
    const tutorMoves: LearnsetMove[] = [];
    const tmMoves: LearnsetMove[] = [];
    const eggMoves: LearnsetMove[] = [];
    const eventMoves: LearnsetMove[] = [];
    const dreamworldMoves: LearnsetMove[] = [];

    for (const move of args.moves) {
      if (Reflect.has(learnsetFromDataset, move)) {
        const methods = learnsetFromDataset[move];

        const {
          virtualTransferMoves: generationalVirtualTransferMoves,
          tutorMoves: generationalTutorMoves,
          tmMoves: generationalTmMoves,
          eggMoves: generationalEggMoves,
          eventMoves: generationalEventMoves,
          dreamworldMoves: generationalDreamworldMoves,
          levelupMoves: generationalLevelupMoves
        } = mapMoveAndMethodsToLearnsets({ move, methods, generation: args.generation as Generation, requestedFields });

        levelupMoves.push(...generationalLevelupMoves);
        virtualTransferMoves.push(...generationalVirtualTransferMoves);
        tutorMoves.push(...generationalTutorMoves);
        tmMoves.push(...generationalTmMoves);
        eggMoves.push(...generationalEggMoves);
        eventMoves.push(...generationalEventMoves);
        dreamworldMoves.push(...generationalDreamworldMoves);
      }
    }

    addLearnsetPropertiesToGraphQLObject({
      objectTarget: learnset,
      data: {
        virtualTransferMoves,
        tutorMoves,
        tmMoves,
        eggMoves,
        eventMoves,
        dreamworldMoves,
        levelupMoves
      },
      requestedFields: cast<GraphQLSet<keyof PokemonLearnset>>(requestedFields)
    });
  }

  if (shouldIncludePokemonDetails(requestedFields)) {
    const pokemonEntry = pokedex.get(args.pokemon)!;

    addPropertyToObjectFieldBased({
      objectTarget: learnset,
      propertyKey: 'sprite',
      propertyValue: parseSpeciesForSprite({
        pokemonName: pokemonEntry.species,
        pokemonNumber: pokemonEntry.num,
        baseSpecies: pokemonEntry.baseSpecies,
        specialSprite: pokemonEntry.specialSprite,
        specialShinySprite: pokemonEntry.specialShinySprite,
        specialBackSprite: pokemonEntry.specialBackSprite,
        specialShinyBackSprite: pokemonEntry.specialShinyBackSprite
      }),
      requestedFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: learnset,
      propertyKey: 'shinySprite',
      propertyValue: parseSpeciesForSprite({
        pokemonName: pokemonEntry.species,
        pokemonNumber: pokemonEntry.num,
        baseSpecies: pokemonEntry.baseSpecies,
        specialSprite: pokemonEntry.specialSprite,
        specialShinySprite: pokemonEntry.specialShinySprite,
        specialBackSprite: pokemonEntry.specialBackSprite,
        specialShinyBackSprite: pokemonEntry.specialShinyBackSprite,
        shiny: true
      }),
      requestedFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: learnset,
      propertyKey: 'backSprite',
      propertyValue: parseSpeciesForSprite({
        pokemonName: pokemonEntry.species,
        pokemonNumber: pokemonEntry.num,
        baseSpecies: pokemonEntry.baseSpecies,
        specialSprite: pokemonEntry.specialSprite,
        specialShinySprite: pokemonEntry.specialShinySprite,
        specialBackSprite: pokemonEntry.specialBackSprite,
        specialShinyBackSprite: pokemonEntry.specialShinyBackSprite,
        backSprite: true
      }),
      requestedFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: learnset,
      propertyKey: 'shinyBackSprite',
      propertyValue: parseSpeciesForSprite({
        pokemonName: pokemonEntry.species,
        pokemonNumber: pokemonEntry.num,
        baseSpecies: pokemonEntry.baseSpecies,
        specialSprite: pokemonEntry.specialSprite,
        specialShinySprite: pokemonEntry.specialShinySprite,
        specialBackSprite: pokemonEntry.specialBackSprite,
        specialShinyBackSprite: pokemonEntry.specialShinyBackSprite,
        shiny: true,
        backSprite: true
      }),
      requestedFields
    });

    addPropertyToObjectFieldBased({
      objectTarget: learnset,
      propertyKey: 'num',
      propertyValue: pokemonEntry.num,
      requestedFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: learnset,
      propertyKey: 'pokemonKey',
      propertyValue: pokemonEntry.key!,
      requestedFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: learnset,
      propertyKey: 'color',
      propertyValue: pokemonEntry.color,
      requestedFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: learnset,
      propertyKey: 'species',
      propertyValue: pokemonEntry.species,
      requestedFields
    });
  }

  return learnset;
}

export function getLearnsetDataset(pokemon: string): Record<string, string[]> | null {
  let learnsetFromDataset = learnsets.get(pokemon);

  let pokemonFromDataset: PokemonTypes.DexEntry | undefined = undefined;

  // If the learnset is event only then overwrite it back to undefined to allow for further parsing
  if (learnsetFromDataset?.eventOnly?.[0] === 'See base forme of this Pokémon') {
    learnsetFromDataset = undefined;
  }

  // Attempt to get the learnset from the base species
  if (!learnsetFromDataset) {
    pokemonFromDataset = pokedex.get(toLowerSingleWordCase(pokemon));
    learnsetFromDataset = learnsets.get(toLowerSingleWordCase(pokemonFromDataset?.baseSpecies ?? ''));
  }

  // If there is still no learnset then try to get it from other formes
  if (!learnsetFromDataset) {
    // First ensure the pokemon is retrieved from the dataset
    if (!pokemonFromDataset) {
      pokemonFromDataset = pokedex.get(toLowerSingleWordCase(pokemon));
    }

    for (const otherForm of pokemonFromDataset?.otherFormes ?? []) {
      learnsetFromDataset = learnsets.get(toLowerSingleWordCase(otherForm));
      if (learnsetFromDataset) {
        break;
      }
    }
  }

  return learnsetFromDataset ?? null;
}

export function mapPokemonToPokemonLearnsetGraphQL({
  learnsetFromDataset,
  generation,
  requestedFields
}: MapPokemonToPokemonLearnsetGraphQLParams): PokemonLearnset {
  const pokemonLearnset: PokemonLearnset = {} as PokemonLearnset;

  if (learnsetFromDataset.eventOnly === undefined) {
    const levelupMoves: LearnsetLevelUpMove[] = [];
    const virtualTransferMoves: LearnsetMove[] = [];
    const tutorMoves: LearnsetMove[] = [];
    const tmMoves: LearnsetMove[] = [];
    const eggMoves: LearnsetMove[] = [];
    const eventMoves: LearnsetMove[] = [];
    const dreamworldMoves: LearnsetMove[] = [];

    for (const [move, methods] of Object.entries(learnsetFromDataset)) {
      const {
        virtualTransferMoves: generationalVirtualTransferMoves,
        tutorMoves: generationalTutorMoves,
        tmMoves: generationalTmMoves,
        eggMoves: generationalEggMoves,
        eventMoves: generationalEventMoves,
        dreamworldMoves: generationalDreamworldMoves,
        levelupMoves: generationalLevelupMoves
      } = mapMoveAndMethodsToLearnsets({ move, methods, generation, requestedFields });

      levelupMoves.push(...generationalLevelupMoves);
      virtualTransferMoves.push(...generationalVirtualTransferMoves);
      tutorMoves.push(...generationalTutorMoves);
      tmMoves.push(...generationalTmMoves);
      eggMoves.push(...generationalEggMoves);
      eventMoves.push(...generationalEventMoves);
      dreamworldMoves.push(...generationalDreamworldMoves);
    }

    addLearnsetPropertiesToGraphQLObject({
      objectTarget: pokemonLearnset,
      data: {
        levelupMoves,
        virtualTransferMoves,
        tutorMoves,
        tmMoves,
        eggMoves,
        eventMoves,
        dreamworldMoves
      },
      requestedFields
    });
  }

  return pokemonLearnset;
}

function mapMoveAndMethodsToLearnsets({ move, methods, generation, requestedFields }: MapMoveAndMethodsToLearnsetsParams) {
  const levelupMoves: LearnsetLevelUpMove[] = [];
  const virtualTransferMoves: LearnsetMove[] = [];
  const tutorMoves: LearnsetMove[] = [];
  const tmMoves: LearnsetMove[] = [];
  const eggMoves: LearnsetMove[] = [];
  const eventMoves: LearnsetMove[] = [];
  const dreamworldMoves: LearnsetMove[] = [];

  for (const method of methods) {
    if (generation && getMethodGeneration(method) !== generation) continue;

    switch (getMethodType(method)) {
      case 'L':
        if (requestedFields.has('levelUpMoves')) {
          levelupMoves.push(
            createLevelupMove({
              move,
              level: getMethodLevel(method),
              generation: getMethodGeneration(method),
              requestedFields
            })
          );
        }
        break;
      case 'V':
        if (requestedFields.has('virtualTransferMoves')) {
          virtualTransferMoves.push(
            createLearnsetMove({
              move,
              generation: getMethodGeneration(method),
              requestedFields,
              requestedFieldsPrefix: 'virtualTransferMoves.move.'
            })
          );
        }
        break;
      case 'T':
        if (requestedFields.has('tutorMoves')) {
          tutorMoves.push(
            createLearnsetMove({
              move,
              generation: getMethodGeneration(method),
              requestedFields,
              requestedFieldsPrefix: 'tutorMoves.move.'
            })
          );
        }
        break;
      case 'M':
        if (requestedFields.has('tmMoves')) {
          tmMoves.push(
            createLearnsetMove({
              move,
              generation: getMethodGeneration(method),
              requestedFields,
              requestedFieldsPrefix: 'tmMoves.move.'
            })
          );
        }
        break;
      case 'E':
        if (requestedFields.has('eggMoves')) {
          eggMoves.push(
            createLearnsetMove({
              move,
              generation: getMethodGeneration(method),
              requestedFields,
              requestedFieldsPrefix: 'eggMoves.move.'
            })
          );
        }
        break;
      case 'S':
        if (requestedFields.has('eventMoves')) {
          eventMoves.push(
            createLearnsetMove({
              move,
              generation: getMethodGeneration(method),
              requestedFields,
              requestedFieldsPrefix: 'eventMoves.move.'
            })
          );
        }
        break;
      case 'D':
        if (requestedFields.has('dreamworldMoves')) {
          dreamworldMoves.push(
            createLearnsetMove({
              move,
              generation: getMethodGeneration(method),
              requestedFields,
              requestedFieldsPrefix: 'eggMoves.move.'
            })
          );
        }
        break;
    }
  }

  return {
    levelupMoves,
    virtualTransferMoves,
    tutorMoves,
    tmMoves,
    eggMoves,
    eventMoves,
    dreamworldMoves
  };
}

function addLearnsetPropertiesToGraphQLObject({ objectTarget, data, requestedFields }: AddLearnsetPropertiesToGraphQLObjectParams) {
  addPropertyToObjectFieldBased({
    objectTarget,
    propertyKey: 'levelUpMoves',
    propertyValue: data.levelupMoves,
    requestedFields
  });

  addPropertyToObjectFieldBased({
    objectTarget,
    propertyKey: 'virtualTransferMoves',
    propertyValue: data.virtualTransferMoves,
    requestedFields
  });

  addPropertyToObjectFieldBased({
    objectTarget,
    propertyKey: 'tutorMoves',
    propertyValue: data.tutorMoves,
    requestedFields
  });

  addPropertyToObjectFieldBased({
    objectTarget,
    propertyKey: 'tmMoves',
    propertyValue: data.tmMoves,
    requestedFields
  });

  addPropertyToObjectFieldBased({
    objectTarget,
    propertyKey: 'eggMoves',
    propertyValue: data.eggMoves,
    requestedFields
  });

  addPropertyToObjectFieldBased({
    objectTarget,
    propertyKey: 'eventMoves',
    propertyValue: data.eventMoves,
    requestedFields
  });

  addPropertyToObjectFieldBased({
    objectTarget,
    propertyKey: 'dreamworldMoves',
    propertyValue: data.dreamworldMoves,
    requestedFields
  });
}

function createLearnsetMove({ move, generation, requestedFields, requestedFieldsPrefix }: CreateLearnsetMoveParameters): LearnsetMove {
  const moveData = moves.get(move)!;

  const requestedMoveFields = requestedFields.filterStartsWith<keyof Move>(requestedFieldsPrefix, true);

  return {
    move: mapMoveDataToMoveGraphQL({ data: moveData, requestedFields: requestedMoveFields }),
    generation
  };
}

function createLevelupMove({ level, ...params }: CreateLevelupMoveParameters): LearnsetLevelUpMove {
  return {
    ...createLearnsetMove({ ...params, requestedFieldsPrefix: 'levelUpMoves.move.' }),
    level
  };
}

function getMethodGeneration(method: string): Generation {
  return parseInt(method.slice(0, 1), 10) as Generation;
}

function getMethodLevel(method: string): number {
  return parseInt(method.slice(2), 10);
}

function getMethodType(method: string): MethodTypes {
  return method.slice(1, 2) as MethodTypes;
}

function shouldIncludePokemonDetails(requestedFields: GraphQLSet<keyof Learnset>): boolean {
  return (
    requestedFields.has('sprite') ||
    requestedFields.has('backSprite') ||
    requestedFields.has('shinySprite') ||
    requestedFields.has('shinyBackSprite') ||
    requestedFields.has('num') ||
    requestedFields.has('color') ||
    requestedFields.has('species')
  );
}

type MethodTypes = 'L' | 'V' | 'T' | 'M' | 'E' | 'S' | 'D';

interface MapPokemonAndMovesToLearnsetGraphQLParams {
  args: NonNullish<GetLearnsetArgs>;
  requestedFields: GraphQLSet<keyof Learnset>;
}

interface MapPokemonToPokemonLearnsetGraphQLParams {
  learnsetFromDataset: Record<string, string[]>;
  generation: Generation;
  requestedFields: GraphQLSet<keyof PokemonLearnset>;
}

interface MapMoveAndMethodsToLearnsetsParams {
  move: string;
  methods: string[];
  generation: Generation;
  requestedFields: GraphQLSet<keyof PokemonLearnset | keyof Learnset>;
}

interface AddLearnsetPropertiesToGraphQLObjectParams {
  objectTarget: PokemonLearnset | Learnset;
  data: ReturnType<typeof mapMoveAndMethodsToLearnsets>;
  requestedFields: GraphQLSet<keyof PokemonLearnset>;
}

interface CreateLearnsetMoveParameters extends Pick<MapPokemonAndMovesToLearnsetGraphQLParams, 'requestedFields'> {
  move: string;
  generation: Generation;
  requestedFieldsPrefix: `${
    | 'levelUpMoves'
    | 'dreamworldMoves'
    | 'eggMoves'
    | 'eventMoves'
    | 'tmMoves'
    | 'tutorMoves'
    | 'virtualTransferMoves'}.move.`;
}

interface CreateLevelupMoveParameters extends Omit<CreateLearnsetMoveParameters, 'requestedFieldsPrefix'> {
  level: number;
}
