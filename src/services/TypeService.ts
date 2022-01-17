import { TypeArgs } from '#arguments/TypeArgs';
import { typechart } from '#assets/typechart';
import { Type } from '#structures/Type';
import { TypeMatchup } from '#structures/TypeMatchup';
import { addPropertyToClass } from '#utils/addPropertyToClass';
import { GraphQLSet } from '#utils/GraphQLSet';
import type PokemonTypes from '#utils/pokemon';
import { Args } from 'type-graphql';

export class TypeService {
  public static mapTypesToTypeMatchupGraphQL(@Args(() => TypeArgs) { types }: TypeArgs, requestedFields: GraphQLSet<keyof TypeMatchup>): TypeMatchup {
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

    for (const curType of types) {
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

    const attackingTypeEntry = new Type();
    const defendingTypeEntry = new Type();

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

      const attackingTypeEntryFields = requestedFields.filterStartsWith<GraphQLSet<keyof Type>>('attacking.');
      addPropertyToClass(attackingTypeEntry, 'doubleEffectiveTypes', atk.doubleEffectiveTypes, attackingTypeEntryFields, 'doubleEffectiveTypes');
      addPropertyToClass(attackingTypeEntry, 'doubleResistedTypes', atk.doubleResistedTypes, attackingTypeEntryFields, 'doubleResistedTypes');
      addPropertyToClass(attackingTypeEntry, 'effectiveTypes', atk.effectiveTypes, attackingTypeEntryFields, 'effectiveTypes');
      addPropertyToClass(attackingTypeEntry, 'effectlessTypes', atk.effectlessTypes, attackingTypeEntryFields, 'effectlessTypes');
      addPropertyToClass(attackingTypeEntry, 'normalTypes', atk.normalTypes, attackingTypeEntryFields, 'normalTypes');
      addPropertyToClass(attackingTypeEntry, 'resistedTypes', atk.resistedTypes, attackingTypeEntryFields, 'resistedTypes');
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

      const defendingTypeEntryFields = requestedFields.filterStartsWith<GraphQLSet<keyof Type>>('defending.');
      addPropertyToClass(defendingTypeEntry, 'doubleEffectiveTypes', def.doubleEffectiveTypes, defendingTypeEntryFields, 'doubleEffectiveTypes');
      addPropertyToClass(defendingTypeEntry, 'doubleResistedTypes', def.doubleResistedTypes, defendingTypeEntryFields, 'doubleResistedTypes');
      addPropertyToClass(defendingTypeEntry, 'effectiveTypes', def.effectiveTypes, defendingTypeEntryFields, 'effectiveTypes');
      addPropertyToClass(defendingTypeEntry, 'effectlessTypes', def.effectlessTypes, defendingTypeEntryFields, 'effectlessTypes');
      addPropertyToClass(defendingTypeEntry, 'normalTypes', def.normalTypes, defendingTypeEntryFields, 'normalTypes');
      addPropertyToClass(defendingTypeEntry, 'resistedTypes', def.resistedTypes, defendingTypeEntryFields, 'resistedTypes');
    }

    const typeMatchups = new TypeMatchup();
    addPropertyToClass(typeMatchups, 'attacking', attackingTypeEntry, requestedFields);
    addPropertyToClass(typeMatchups, 'defending', defendingTypeEntry, requestedFields);

    return typeMatchups;
  }
}
