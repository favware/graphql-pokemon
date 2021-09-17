import { AbilityArgs } from '#arguments/AbilityArgs';
import { FuzzyAbilityArgs } from '#arguments/FuzzyArgs/FuzzyAbilityArgs';
import abilities from '#assets/abilities';
import { Ability } from '#structures/Ability';
import { addPropertyToClass } from '#utils/addPropertyToClass';
import { FuzzySearch } from '#utils/FuzzySearch';
import type { GraphQLSet } from '#utils/GraphQLSet';
import type PokemonTypes from '#utils/pokemon';
import { preParseInput, toTitleCase } from '#utils/util';
import type Fuse from 'fuse.js';
import { Args } from 'type-graphql';

export class AbilityService {
  public static getByAbilityName(@Args(() => AbilityArgs) { ability }: AbilityArgs): PokemonTypes.Ability | undefined {
    return abilities.get(ability);
  }

  public static mapAbilityDataToAbilityGraphQL({ data, requestedFields }: MapAbilityDataToAbilityGraphQLParameters): Ability {
    const ability = new Ability();

    addPropertyToClass(ability, 'desc', data.desc, requestedFields);
    addPropertyToClass(ability, 'shortDesc', data.shortDesc, requestedFields);
    addPropertyToClass(ability, 'name', data.name, requestedFields);
    addPropertyToClass(ability, 'isFieldAbility', data.isFieldAbility, requestedFields);
    addPropertyToClass(
      ability,
      'bulbapediaPage',
      `https://bulbapedia.bulbagarden.net/wiki/${toTitleCase(data.name).replace(/ /g, '_')}_(Ability)`,
      requestedFields
    );
    addPropertyToClass(
      ability,
      'serebiiPage',
      `https://www.serebii.net/abilitydex/${data.name.replace(/ /g, '_').toLowerCase()}.shtml`,
      requestedFields
    );
    addPropertyToClass(
      ability,
      'smogonPage',
      `https://www.smogon.com/dex/ss/abilities/${data.name.toLowerCase().replace(/ /g, '_')}`,
      requestedFields
    );

    return ability;
  }

  public static findByFuzzy(
    @Args(() => FuzzyAbilityArgs) { ability, offset, reverse, take }: FuzzyAbilityArgs
  ): Fuse.FuseResult<PokemonTypes.Ability>[] {
    ability = preParseInput(ability);

    const fuzzyResult = new FuzzySearch(abilities, ['name', 'aliases'], { threshold: 0.3 }).runFuzzy(ability);

    if (reverse) {
      fuzzyResult.reverse();
    }

    return fuzzyResult.slice(offset, offset + take);
  }
}

interface MapAbilityDataToAbilityGraphQLParameters {
  data: PokemonTypes.Ability;
  requestedFields: GraphQLSet<keyof Ability>;
}
