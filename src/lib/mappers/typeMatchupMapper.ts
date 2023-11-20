import type { PokemonTypes } from '#assets/pokemon-source';
import { typechart } from '#assets/typechart';
import type { TypeEffectiveness, TypeMatchup } from '#types/graphql-mapped-types';
import type { GraphQLSet } from '#utils/GraphQLSet';
import { addPropertyToObjectFieldBased } from '#utils/addPropertyToObject';
import type { GetTypeMatchupArgs } from '#validations/getTypeMatchupArgs';
import { filterNullish } from '@sapphire/utilities';

export function mapTypesToTypeMatchupGraphQL(args: GetTypeMatchupArgs, requestedFields: GraphQLSet<keyof TypeMatchup>): TypeMatchup {
  const atk: PokemonTypes.TypeDataset = {
    doubleEffectiveTypes: [],
    doubleResistedTypes: [],
    effectiveTypes: [],
    effectlessTypes: [],
    multi: {
      bug: 1,
      dark: 1,
      dragon: 1,
      electric: 1,
      fairy: 1,
      fighting: 1,
      fire: 1,
      flying: 1,
      ghost: 1,
      grass: 1,
      ground: 1,
      ice: 1,
      normal: 1,
      poison: 1,
      psychic: 1,
      rock: 1,
      steel: 1,
      water: 1
    },
    normalTypes: [],
    resistedTypes: []
  };

  const def: PokemonTypes.TypeDataset = JSON.parse(JSON.stringify(atk));

  if (args.primaryType === args.secondaryType) {
    args.secondaryType = null;
  }

  const typesAsArray = [args.primaryType, args.secondaryType].filter(filterNullish);

  for (const curType of typesAsArray) {
    const dDealt = typechart.get(curType)!.damageDealt;
    const dTaken = typechart.get(curType)!.damageTaken;

    for (const [type, multiplier] of Object.entries(dTaken) as [keyof PokemonTypes.Types, 1 | 2 | 3][]) {
      switch (multiplier) {
        case 1:
          def.multi[type] *= 2;
          break;
        case 2:
          def.multi[type] *= 0.5;
          break;
        case 3:
          def.multi[type] = 0;
          break;
      }
    }

    for (const [type, multiplier] of Object.entries(dDealt) as [keyof PokemonTypes.Types, 1 | 2 | 3][]) {
      switch (multiplier) {
        case 1:
          atk.multi[type] *= 2;
          break;
        case 2:
          atk.multi[type] *= 0.5;
          break;
        case 3:
          atk.multi[type] = 0;
          break;
      }
    }
  }

  const attackingTypeEntry: TypeEffectiveness = {} as TypeEffectiveness;
  const defendingTypeEntry: TypeEffectiveness = {} as TypeEffectiveness;

  if (requestedFields.has('attacking')) {
    for (const [attack, multiplier] of Object.entries(atk.multi) as [keyof PokemonTypes.Types, 0 | 0.25 | 0.5 | 1 | 2 | 4][]) {
      switch (multiplier) {
        case 0:
          atk.effectlessTypes.push(attack);
          break;
        case 0.25:
          atk.doubleResistedTypes.push(attack);
          break;
        case 0.5:
          atk.resistedTypes.push(attack);
          break;
        case 1:
          atk.normalTypes.push(attack);
          break;
        case 2:
          atk.effectiveTypes.push(attack);
          break;
        case 4:
          atk.doubleEffectiveTypes.push(attack);
          break;
      }
    }

    const attackingTypeEntryFields = requestedFields.filterStartsWith<keyof TypeEffectiveness>('attacking.', true);
    addPropertyToObjectFieldBased({
      objectTarget: attackingTypeEntry,
      propertyKey: 'doubleEffectiveTypes',
      propertyValue: atk.doubleEffectiveTypes,
      requestedFields: attackingTypeEntryFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: attackingTypeEntry,
      propertyKey: 'doubleResistedTypes',
      propertyValue: atk.doubleResistedTypes,
      requestedFields: attackingTypeEntryFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: attackingTypeEntry,
      propertyKey: 'effectiveTypes',
      propertyValue: atk.effectiveTypes,
      requestedFields: attackingTypeEntryFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: attackingTypeEntry,
      propertyKey: 'effectlessTypes',
      propertyValue: atk.effectlessTypes,
      requestedFields: attackingTypeEntryFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: attackingTypeEntry,
      propertyKey: 'normalTypes',
      propertyValue: atk.normalTypes,
      requestedFields: attackingTypeEntryFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: attackingTypeEntry,
      propertyKey: 'resistedTypes',
      propertyValue: atk.resistedTypes,
      requestedFields: attackingTypeEntryFields
    });
  }

  if (requestedFields.has('defending')) {
    for (const [defense, multiplier] of Object.entries(def.multi) as [keyof PokemonTypes.Types, 0 | 0.25 | 0.5 | 1 | 2 | 4][]) {
      switch (multiplier) {
        case 0:
          def.effectlessTypes.push(defense);
          break;
        case 0.25:
          def.doubleResistedTypes.push(defense);
          break;
        case 0.5:
          def.resistedTypes.push(defense);
          break;
        case 1:
          def.normalTypes.push(defense);
          break;
        case 2:
          def.effectiveTypes.push(defense);
          break;
        case 4:
          def.doubleEffectiveTypes.push(defense);
          break;
      }
    }

    const defendingTypeEntryFields = requestedFields.filterStartsWith<keyof TypeEffectiveness>('defending.', true);
    addPropertyToObjectFieldBased({
      objectTarget: defendingTypeEntry,
      propertyKey: 'doubleEffectiveTypes',
      propertyValue: def.doubleEffectiveTypes,
      requestedFields: defendingTypeEntryFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: defendingTypeEntry,
      propertyKey: 'doubleResistedTypes',
      propertyValue: def.doubleResistedTypes,
      requestedFields: defendingTypeEntryFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: defendingTypeEntry,
      propertyKey: 'effectiveTypes',
      propertyValue: def.effectiveTypes,
      requestedFields: defendingTypeEntryFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: defendingTypeEntry,
      propertyKey: 'effectlessTypes',
      propertyValue: def.effectlessTypes,
      requestedFields: defendingTypeEntryFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: defendingTypeEntry,
      propertyKey: 'normalTypes',
      propertyValue: def.normalTypes,
      requestedFields: defendingTypeEntryFields
    });
    addPropertyToObjectFieldBased({
      objectTarget: defendingTypeEntry,
      propertyKey: 'resistedTypes',
      propertyValue: def.resistedTypes,
      requestedFields: defendingTypeEntryFields
    });
  }

  const typeMatchups: TypeMatchup = {} as TypeMatchup;
  addPropertyToObjectFieldBased({ objectTarget: typeMatchups, propertyKey: 'attacking', propertyValue: attackingTypeEntry, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: typeMatchups, propertyKey: 'defending', propertyValue: defendingTypeEntry, requestedFields });

  return typeMatchups;
}
