import { Arg, Args } from 'type-graphql';
import TypeArgs, { Types } from '../arguments/TypeArgs';
import typechart from '../assets/typechart';
import Pokemon from '../utils/pokemon';
import TypeEntry from '../structures/TypeEntry';
import TypeMatchups from '../structures/TypeMatchups';

export default class TypeService {
  public findTypeMatchupByName(@Arg('name', () => Types) name: string) {
    return typechart.get(name);
  }

  public findTypeMatchups(@Args(() => Types) { types }: TypeArgs) {
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
        water: 1,
      },
      normalTypes: [],
      resistedTypes: [],
    };
    const def: Pokemon.TypeDataset = JSON.parse(JSON.stringify(atk));

    for (const curType of types) {
      const dDealt = typechart.get(curType)!.damageDealt;
      const dTaken = typechart.get(curType)!.damageTaken;

      for (const multiplier in dTaken) {
        switch (dTaken[multiplier]) {
          case 1:
            def.multi[multiplier] *= 2;
            break;
          case 2:
            def.multi[multiplier] *= 0.5;
            break;
          case 3:
            def.multi[multiplier] = 0;
            break;
          default:
            break;
        }
      }

      for (const multiplier in dDealt) {
        switch (dDealt[multiplier]) {
          case 1:
            atk.multi[multiplier] *= 2;
            break;
          case 2:
            atk.multi[multiplier] *= 0.5;
            break;
          case 3:
            atk.multi[multiplier] = 0;
            break;
          default:
            break;
        }
      }
    }

    for (const attack in def.multi) {
      switch (atk.multi[attack]) {
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

    for (const defense in def.multi) {
      switch (def.multi[defense]) {
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

    const attackingTypeEntry = new TypeEntry();
    const defendingTypeEntry = new TypeEntry();

    attackingTypeEntry.doubleEffectiveTypes = atk.doubleEffectiveTypes;
    attackingTypeEntry.doubleResistedTypes = atk.doubleResistedTypes;
    attackingTypeEntry.effectiveTypes = atk.effectiveTypes;
    attackingTypeEntry.effectlessTypes = atk.effectlessTypes;
    attackingTypeEntry.normalTypes = atk.normalTypes;
    attackingTypeEntry.resistedTypes = atk.resistedTypes;

    defendingTypeEntry.doubleEffectiveTypes = def.doubleEffectiveTypes;
    defendingTypeEntry.doubleResistedTypes = def.doubleResistedTypes;
    defendingTypeEntry.effectiveTypes = def.effectiveTypes;
    defendingTypeEntry.effectlessTypes = def.effectlessTypes;
    defendingTypeEntry.normalTypes = def.normalTypes;
    defendingTypeEntry.resistedTypes = def.resistedTypes;

    const typeMatchups = new TypeMatchups();
    typeMatchups.attacking = attackingTypeEntry;
    typeMatchups.defending = defendingTypeEntry;

    return typeMatchups;
  }
}