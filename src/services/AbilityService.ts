import { GraphQLJSONObject } from 'graphql-type-json';
import { Arg, Args } from 'type-graphql';
import AbilityPaginatedArgs from '../arguments/AbilityPaginatedArgs';
import abilities from '../assets/abilities';
import { abilityAliases } from '../assets/aliases';
import AbilityEntry from '../structures/AbilityEntry';
import { addPropertyToClass } from '../utils/addPropertyToClass';
import FuzzySearch from '../utils/FuzzySearch';
import GraphQLSet from '../utils/GraphQLSet';
import Util, { SimpleFuseOptions } from '../utils/util';

export default class AbilityService {
  public findByName(@Arg('name') name: string) {
    return abilities.get(name);
  }

  public findByFuzzy(
    @Args() { ability, skip, take, reverse }: AbilityPaginatedArgs,
    @Arg('fuseOptions', () => GraphQLJSONObject) fuseOptions?: SimpleFuseOptions
  ) {
    const fuzzyAbility = new FuzzySearch(abilities, ['name'], { threshold: 0.3, ...fuseOptions });

    let fuzzyResult = fuzzyAbility.runFuzzy(ability);

    if (!fuzzyResult.length) {
      const fuzzyAliasResult = new FuzzySearch(abilityAliases, ['alias', 'ability'], { threshold: 0.4 }).runFuzzy(
        ability
      );

      if (fuzzyAliasResult.length) {
        fuzzyResult = fuzzyAbility.runFuzzy(fuzzyAliasResult[0].ability);
      }
    }

    if (reverse) {
      fuzzyResult.reverse();
    }

    return fuzzyResult.slice(skip, skip + take);
  }

  public findByNameWithDetails(@Arg('ability') ability: string, requestedFields: GraphQLSet<keyof AbilityEntry>) {
    const abilityData = this.findByName(ability);

    if (!abilityData) {
      throw new Error(`No ability found for ${ability}`);
    }

    const abilityEntry = new AbilityEntry();
    addPropertyToClass(abilityEntry, 'desc', abilityData.desc, requestedFields);
    addPropertyToClass(abilityEntry, 'shortDesc', abilityData.shortDesc, requestedFields);
    addPropertyToClass(abilityEntry, 'name', abilityData.name, requestedFields);
    addPropertyToClass(
      abilityEntry,
      'bulbapediaPage',
      `https://bulbapedia.bulbagarden.net/wiki/${Util.toTitleCase(abilityData.name).replace(/ /g, '_')}_(Ability)`,
      requestedFields
    );
    addPropertyToClass(
      abilityEntry,
      'serebiiPage',
      `https://www.serebii.net/abilitydex/${abilityData.name.replace(/ /g, '_').toLowerCase()}.shtml`,
      requestedFields
    );
    addPropertyToClass(
      abilityEntry,
      'smogonPage',
      `https://www.smogon.com/dex/sm/abilities/${abilityData.name.toLowerCase().replace(/ /g, '_')}`,
      requestedFields
    );

    return abilityEntry;
  }
}
