import { AbilityArgs } from '#arguments/AbilityArgs';
import { FuzzyAbilityArgs } from '#arguments/FuzzyArgs/FuzzyAbilityArgs';
import { AbilityService } from '#services/AbilityService';
import { Ability } from '#structures/Ability';
import { getRequestedFields } from '#utils/getRequestedFields';
import { GraphQLSet } from '#utils/GraphQLSet';
import { Args, Query, Resolver } from 'type-graphql';

@Resolver(Ability)
export class AbilityResolver {
  @Query(() => Ability, {
    description: 'Gets the details on a Pokémon ability, using the ability name'
  })
  public getAbility(@Args(() => AbilityArgs) args: AbilityArgs, @getRequestedFields() requestedFields: GraphQLSet<keyof Ability>): Ability {
    const abilityData = AbilityService.getByAbilityName(args);

    if (!abilityData) {
      throw new Error(`No ability found for ${args.ability}`);
    }

    const graphqlObject = AbilityService.mapAbilityDataToAbilityGraphQL({
      data: abilityData,
      requestedFields
    });

    if (!graphqlObject) {
      throw new Error(`Failed to get data for ability: ${args.ability}`);
    }

    return graphqlObject;
  }

  @Query(() => [Ability], {
    description: [
      'Gets details on a Pokémon ability, using a fuzzy search on name',
      'This can be used to find multiple results based on the query',
      'By default only 1 result is returned. You can provide the arguments "take", "offset", and "reverse" to modify this behaviour.'
    ].join('\n')
  })
  public getFuzzyAbility(
    @Args(() => FuzzyAbilityArgs) args: FuzzyAbilityArgs,
    @getRequestedFields() requestedFields: GraphQLSet<keyof Ability>
  ): Ability[] {
    const fuzzyEntry = AbilityService.findByFuzzy(args);

    if (!fuzzyEntry.length) {
      throw new Error(`No abilities found for: ${args.ability}`);
    }

    const graphqlObjects = fuzzyEntry.map((abilityData) => AbilityService.mapAbilityDataToAbilityGraphQL({ data: abilityData, requestedFields }));

    if (!graphqlObjects.length) {
      throw new Error(`Failed to get data for ability: ${args.ability}`);
    }

    return graphqlObjects;
  }
}
