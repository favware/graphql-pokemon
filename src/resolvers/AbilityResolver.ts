import { GraphQLJSONObject } from 'graphql-type-json';
import { Arg, Args, Query, Resolver } from 'type-graphql';
import AbilityPaginatedArgs, { Abilities } from '../arguments/AbilityPaginatedArgs';
import AbilityService from '../services/AbilityService';
import AbilityEntry from '../structures/AbilityEntry';
import { getRequestedFields } from '../utils/getRequestedFields';
import GraphQLSet from '../utils/GraphQLSet';
import Util from '../utils/util';

@Resolver(AbilityEntry)
export default class AbilityResolver {
  private abilityService: AbilityService;

  constructor() {
    this.abilityService = new AbilityService();
  }

  @Query(() => AbilityEntry, {
    description: [
      'Gets details on a single ability based on a fuzzy search.',
      'You can supply skip and take to paginate the fuzzy search and reverse to show the least likely matched on top.',
      'Reversal is applied before pagination!'
    ].join('')
  })
  async getAbilityDetailsByFuzzy(
    @Args() { ability, skip, take, reverse }: AbilityPaginatedArgs,
    @getRequestedFields() requestedFields: GraphQLSet<keyof AbilityEntry>
  ) {
    const entry = this.abilityService.findByName(ability);

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
      ability = Util.toLowerSingleWordCase(fuzzyEntry[0].name);
    }

    const detailsEntry = this.abilityService.findByNameWithDetails(ability, requestedFields);
    if (detailsEntry === undefined) {
      throw new Error(`Failed to get data for ability: ${ability}`);
    }

    return detailsEntry;
  }

  @Query(() => AbilityEntry, {
    description: ['Gets details on a single ability based on an exact name match.'].join('')
  })
  async getAbilityDetailsByName(
    @Arg('ability', () => Abilities) ability: string,
    @getRequestedFields() requestedFields: GraphQLSet<keyof AbilityEntry>
  ) {
    const entry = this.abilityService.findByNameWithDetails(ability, requestedFields);

    if (entry === undefined) {
      throw new Error(`Failed to get data for ability: ${ability}`);
    }

    return entry;
  }

  @Query(() => [GraphQLJSONObject], {
    description: [
      'Gets raw entries of multiple ability based on a fuzzy search.',
      'You can supply skip and take to limit the amount of flavour texts to return and reverse to show latest games on top.',
      'Reversal is applied before pagination!'
    ].join('')
  })
  getAbilityByFuzzy(@Args() { ability, skip, take, reverse }: AbilityPaginatedArgs) {
    const abilityEntries = this.abilityService.findByFuzzy({
      ability,
      skip,
      take,
      reverse
    });

    if (abilityEntries === undefined) {
      throw new Error(`Failed to get data for ability: ${name}`);
    }

    return abilityEntries;
  }

  @Query(() => GraphQLJSONObject, { description: 'Gets the raw entry of a single ability by name.' })
  getAbilityByName(@Arg('ability', () => Abilities) ability: string) {
    const abilityEntry = this.abilityService.findByName(ability);

    if (abilityEntry === undefined) {
      throw new Error(`Failed to get data for ability: ${ability}`);
    }

    return abilityEntry;
  }
}
