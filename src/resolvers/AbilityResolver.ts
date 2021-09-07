import { abilities, AbilityPaginatedArgs } from '#arguments/AbilityPaginatedArgs';
import { abilityAliases } from '#assets/aliases';
import { AbilityService } from '#services/AbilityService';
import { AbilityEntry } from '#structures/AbilityEntry';
import { getRequestedFields } from '#utils/getRequestedFields';
import { GraphQLSet } from '#utils/GraphQLSet';
import { preParseInput, toLowerSingleWordCase } from '#utils/util';
import { Arg, Args, Query, Resolver } from 'type-graphql';

@Resolver(AbilityEntry)
export class AbilityResolver {
  private abilityService: AbilityService;

  public constructor() {
    this.abilityService = new AbilityService();
  }

  @Query(() => AbilityEntry, {
    description: [
      'Gets details on a single ability based on a fuzzy search.',
      'You can supply skip and take to paginate the fuzzy search and reverse to show the least likely matched on top.',
      'Reversal is applied before pagination!'
    ].join('')
  })
  public getAbilityDetailsByFuzzy(
    @Args() { ability, skip, take, reverse }: AbilityPaginatedArgs,
    @getRequestedFields() requestedFields: GraphQLSet<keyof AbilityEntry>
  ): AbilityEntry {
    const preParsedAbility = preParseInput(ability);
    let entry = this.abilityService.findByName(abilityAliases.get(preParsedAbility) ?? preParsedAbility);

    // If there is no entry from a direct match then try a fuzzy match
    if (!entry) {
      const fuzzyEntry = this.abilityService.findByFuzzy({
        ability,
        skip,
        take,
        reverse
      });

      if (fuzzyEntry === undefined || !fuzzyEntry.length) {
        throw new Error(`Failed to get data for ability: ${ability}`);
      }

      entry = this.abilityService.findByName(toLowerSingleWordCase(fuzzyEntry[0].item.name));

      // If there is still no entry then throw an error
      if (!entry) {
        throw new Error(`No Ability found for ${ability}`);
      }
    }

    const detailsEntry = this.abilityService.findByNameWithDetails(entry, requestedFields);

    if (detailsEntry === undefined) {
      throw new Error(`Failed to get data for ability: ${ability}`);
    }

    return detailsEntry;
  }

  @Query(() => AbilityEntry, {
    description: ['Gets details on a single ability based on an exact name match.'].join('')
  })
  public getAbilityDetailsByName(
    @Arg('ability', () => abilities) ability: string,
    @getRequestedFields() requestedFields: GraphQLSet<keyof AbilityEntry>
  ): AbilityEntry {
    const entry = this.abilityService.findByName(ability);

    if (!entry) {
      throw new Error(`No Ability found for ${ability}`);
    }

    const details = this.abilityService.findByNameWithDetails(entry, requestedFields);

    if (details === undefined) {
      throw new Error(`Failed to get data for ability: ${ability}`);
    }

    return details;
  }
}
