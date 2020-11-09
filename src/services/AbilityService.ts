import type Fuse from 'fuse.js';
import { Arg, Args } from 'type-graphql';
import AbilityPaginatedArgs from '../arguments/AbilityPaginatedArgs';
import abilities from '../assets/abilities';
import { abilityAliases } from '../assets/aliases';
import AbilityEntry from '../structures/AbilityEntry';
import { addPropertyToClass } from '../utils/addPropertyToClass';
import FuzzySearch from '../utils/FuzzySearch';
import GraphQLSet from '../utils/GraphQLSet';
import type Pokemon from '../utils/pokemon';
import Util from '../utils/util';

export default class AbilityService {
  public findByName(@Arg('name') name: string): Pokemon.Ability | undefined {
    return abilities.get(name);
  }

  public findByFuzzy(
    @Args() { ability, skip, take, reverse }: AbilityPaginatedArgs
  ): Fuse.FuseResult<Pokemon.Ability>[] {
    const fuzzyAbility = new FuzzySearch(abilities, ['name'], { threshold: 0.3 });

    let fuzzyResult = fuzzyAbility.runFuzzy(ability);

    if (!fuzzyResult.length) {
      const fuzzyAliasResult = new FuzzySearch(abilityAliases, ['alias', 'ability'], { threshold: 0.4 }).runFuzzy(
        ability
      );

      if (fuzzyAliasResult.length) {
        fuzzyResult = fuzzyAbility.runFuzzy(fuzzyAliasResult[0].item.ability);
      }
    }

    if (reverse) {
      fuzzyResult.reverse();
    }

    return fuzzyResult.slice(skip, skip + take);
  }

  public findByNameWithDetails(
    @Arg('ability') ability: string,
    requestedFields: GraphQLSet<keyof AbilityEntry>
  ): AbilityEntry {
    const abilityData = this.findByName(ability);

    if (!abilityData) {
      throw new Error(`No ability found for ${ability}`);
    }

    const abilityEntry = new AbilityEntry();
    addPropertyToClass(abilityEntry, 'desc', abilityData.desc, requestedFields);
    addPropertyToClass(abilityEntry, 'shortDesc', abilityData.shortDesc, requestedFields);
    addPropertyToClass(abilityEntry, 'name', abilityData.name, requestedFields);
    addPropertyToClass(abilityEntry, 'isFieldAbility', abilityData.isFieldAbility, requestedFields);
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
      `https://www.smogon.com/dex/ss/abilities/${abilityData.name.toLowerCase().replace(/ /g, '_')}`,
      requestedFields
    );

    return abilityEntry;
  }
}
