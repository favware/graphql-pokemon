import AbilityPaginatedArgs from '#arguments/AbilityPaginatedArgs';
import abilities from '#assets/abilities';
import AbilityEntry from '#structures/AbilityEntry';
import { addPropertyToClass } from '#utils/addPropertyToClass';
import FuzzySearch from '#utils/FuzzySearch';
import type GraphQLSet from '#utils/GraphQLSet';
import type Pokemon from '#utils/pokemon';
import Util from '#utils/util';
import type Fuse from 'fuse.js';
import { Arg, Args } from 'type-graphql';

export default class AbilityService {
  public findByName(@Arg('name') name: string): Pokemon.Ability | undefined {
    return abilities.get(name);
  }

  public findByFuzzy(@Args() { ability, skip, take, reverse }: AbilityPaginatedArgs): Fuse.FuseResult<Pokemon.Ability>[] {
    const fuzzyResult = new FuzzySearch(abilities, ['name'], { threshold: 0.3 }).runFuzzy(ability);

    if (reverse) {
      fuzzyResult.reverse();
    }

    return fuzzyResult.slice(skip, skip + take);
  }

  public findByNameWithDetails(abilityData: Pokemon.Ability, requestedFields: GraphQLSet<keyof AbilityEntry>): AbilityEntry {
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
