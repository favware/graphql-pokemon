import {Arg, Args} from 'type-graphql';
import abilities from '../assets/abilities';
import {GraphQLJSONObject} from 'graphql-type-json';
import {SimpleFuseOptions} from '../typings/common';
import AbilityEntry from '../structures/AbilityEntry';
import FuzzySearch from '../utils/FuzzySearch';
import {abilityAliases} from '../assets/aliases';
import Util from '../utils/util';
import AbilityPaginatedArgs from '../arguments/AbilityPaginatedArgs';

export default class AbilityService {
  public findByName(@Arg('name') name: string) {
    return abilities.get(name);
  }

  public findByFuzzy(@Args() {
    ability, skip, take, reverse,
  }: AbilityPaginatedArgs, @Arg('fuseOptions', () => GraphQLJSONObject) fuseOptions?: SimpleFuseOptions) {
    const fuzzyAbility = new FuzzySearch(abilities, [ 'name', 'num' ], { threshold: 0.3, ...fuseOptions });

    let fuzzyResult = fuzzyAbility.run(ability);

    if (!fuzzyResult.length) {
      const fuzzyAliasResult = new FuzzySearch(abilityAliases, [ 'alias', 'ability' ], { threshold: 0.4 }).run(ability);

      if (fuzzyAliasResult.length) {
        fuzzyResult = fuzzyAbility.run(fuzzyAliasResult[0].ability);
      }
    }

    if (reverse) {
      fuzzyResult.reverse();
    }

    return fuzzyResult.slice(skip, skip + take);
  }

  public findByNameWithDetails(@Arg('ability') ability: string) {
    const abilityData = this.findByName(ability);

    if (!abilityData) {
      throw new Error(`No ability found for ${ability}`);
    }

    const abilityEntry = new AbilityEntry();
    abilityEntry.desc = abilityData.desc;
    abilityEntry.name = abilityData.name;
    abilityEntry.num = abilityData.num;
    abilityEntry.shortDesc = abilityData.shortDesc;
    abilityEntry.bulbapediaPage = `https://bulbapedia.bulbagarden.net/wiki/${Util.toTitleCase(abilityData.name).replace(/ /g, '_')}_(Ability)`;
    abilityEntry.serebiiPage = `https://www.serebii.net/abilitydex/${abilityData.name.replace(/ /g, '_').toLowerCase()}.shtml`;
    abilityEntry.smogonPage = `https://www.smogon.com/dex/sm/abilities/${abilityData.name.toLowerCase().replace(/ /g, '_')}`;

    return abilityEntry;
  }
}