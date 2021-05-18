import TypeArgs, { types } from '#arguments/TypeArgs';
import typechart from '#assets/typechart';
import TypeEntry from '#structures/TypeEntry';
import TypeMatchups from '#structures/TypeMatchups';
import { addPropertyToClass } from '#utils/addPropertyToClass';
import GraphQLSet from '#utils/GraphQLSet';
import type Pokemon from '#utils/pokemon';
import { Arg, Args } from 'type-graphql';

export default class TypeService {
  public findTypeMatchupByName(@Arg('name', () => types) name: string): Pokemon.TypeMatchups | undefined {
    return typechart.get(name);
  }

  public findTypeMatchups(@Args(() => types) { types }: TypeArgs, requestedFields: GraphQLSet<keyof TypeMatchups>): TypeMatchups {
    const atk: Pokemon.TypeDataset = {
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
    const def: Pokemon.TypeDataset = JSON.parse(JSON.stringify(atk));

    for (const curType of types) {
      const dDealt = typechart.get(curType)!.damageDealt;
      const dTaken = typechart.get(curType)!.damageTaken;

      for (const [type, multiplier] of Object.entries(dTaken) as [keyof Pokemon.Types, number][]) {
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
          default:
            break;
        }
      }

      for (const [type, multiplier] of Object.entries(dDealt) as [keyof Pokemon.Types, number][]) {
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
          default:
            break;
        }
      }
    }

    const attackingTypeEntry = new TypeEntry();
    const defendingTypeEntry = new TypeEntry();

    if (requestedFields.has('attacking')) {
      for (const [attack, multiplier] of Object.entries(atk.multi) as [keyof Pokemon.Types, number][]) {
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
          default:
            break;
        }
      }

      const attackingTypeEntryFields = requestedFields.filter<GraphQLSet<keyof TypeEntry>>((val) => val.startsWith('attacking.'));
      addPropertyToClass(
        attackingTypeEntry,
        'doubleEffectiveTypes',
        atk.doubleEffectiveTypes,
        attackingTypeEntryFields,
        'attacking.doubleEffectiveTypes'
      );
      addPropertyToClass(
        attackingTypeEntry,
        'doubleResistedTypes',
        atk.doubleResistedTypes,
        attackingTypeEntryFields,
        'attacking.doubleResistedTypes'
      );
      addPropertyToClass(attackingTypeEntry, 'effectiveTypes', atk.effectiveTypes, attackingTypeEntryFields, 'attacking.effectiveTypes');
      addPropertyToClass(attackingTypeEntry, 'effectlessTypes', atk.effectlessTypes, attackingTypeEntryFields, 'attacking.effectlessTypes');
      addPropertyToClass(attackingTypeEntry, 'normalTypes', atk.normalTypes, attackingTypeEntryFields, 'attacking.normalTypes');
      addPropertyToClass(attackingTypeEntry, 'resistedTypes', atk.resistedTypes, attackingTypeEntryFields, 'attacking.resistedTypes');
    }

    if (requestedFields.has('defending')) {
      for (const [defense, multiplier] of Object.entries(def.multi) as [keyof Pokemon.Types, number][]) {
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
          default:
            break;
        }
      }

      const defendingTypeEntryFields = requestedFields.filter<GraphQLSet<keyof TypeEntry>>((val) => val.startsWith('defending.'));
      addPropertyToClass(
        defendingTypeEntry,
        'doubleEffectiveTypes',
        def.doubleEffectiveTypes,
        defendingTypeEntryFields,
        'defending.doubleEffectiveTypes'
      );
      addPropertyToClass(
        defendingTypeEntry,
        'doubleResistedTypes',
        def.doubleResistedTypes,
        defendingTypeEntryFields,
        'defending.doubleResistedTypes'
      );
      addPropertyToClass(defendingTypeEntry, 'effectiveTypes', def.effectiveTypes, defendingTypeEntryFields, 'defending.effectiveTypes');
      addPropertyToClass(defendingTypeEntry, 'effectlessTypes', def.effectlessTypes, defendingTypeEntryFields, 'defending.effectlessTypes');
      addPropertyToClass(defendingTypeEntry, 'normalTypes', def.normalTypes, defendingTypeEntryFields, 'defending.normalTypes');
      addPropertyToClass(defendingTypeEntry, 'resistedTypes', def.resistedTypes, defendingTypeEntryFields, 'defending.resistedTypes');
    }

    const typeMatchups = new TypeMatchups();
    addPropertyToClass(typeMatchups, 'attacking', attackingTypeEntry, requestedFields);
    addPropertyToClass(typeMatchups, 'defending', defendingTypeEntry, requestedFields);

    return typeMatchups;
  }
}
