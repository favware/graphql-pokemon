import {Arg, Args, Query, Resolver} from 'type-graphql';
import AbilityEntry from '../structures/AbilityEntry';
import AbilityService from '../services/AbilityService';
import {GraphQLJSONObject} from 'graphql-type-json';
import PaginatedArgs from '../arguments/PaginatedArgs';

@Resolver(AbilityEntry)
export default class AbilityResolver {
  private abilityService: AbilityService;

  constructor() {
    this.abilityService = new AbilityService();
  }

  @Query(() => GraphQLJSONObject, {
    description: [
      'Gets details on a single ability based on a fuzzy search.',
      'You can supply skip and take to paginate the fuzzy search and reverse to show the least likely matched on top.',
      'Reversal is applied before pagination!'
    ].join(''),
  })
  async getAbilityDetailsByFuzzy(@Args() {
    query, skip, take, reverse,
  }: PaginatedArgs) {
    const entry = this.abilityService.findByName(query);

    if (!entry) {
      const fuzzyEntry = this.abilityService.findByFuzzy({
        query, skip, take, reverse,
      });
      if (fuzzyEntry === undefined) {
        throw new Error(`Failed to get data for Pokemon: ${query}`);
      }
      query = fuzzyEntry[0].name;
    }

    const detailsEntry = this.abilityService.findByNameWithDetails(query);
    if (detailsEntry === undefined) {
      throw new Error(`Failed to get data for Pokemon: ${query}`);
    }

    return detailsEntry;
  }

  @Query(() => GraphQLJSONObject, {
    description: [
      'Gets details on a single ability based on an exact name match.'
    ].join(''),
  })
  async getAbilityDetailsByName(@Arg('ability') ability: string) {
    const entry = this.abilityService.findByNameWithDetails(ability);

    if (entry === undefined) {
      throw new Error(`Failed to get data for Pokemon: ${ability}`);
    }

    return entry;
  }

  @Query(() => GraphQLJSONObject, {
    description: [
      'Gets entries of multiple ability based on a fuzzy search.',
      'You can supply skip and take to limit the amount of flavour texts to return and reverse to show latest games on top.',
      'Reversal is applied before pagination!'
    ].join(''),
  })
  getAbilityByFuzzy(@Args() {
    query, skip, take, reverse,
  }: PaginatedArgs) {
    const abilityEntries = this.abilityService.findByFuzzy({
      query, skip, take, reverse,
    });

    if (abilityEntries === undefined) {
      throw new Error(`Failed to get data for ability: ${name}`);
    }

    return abilityEntries;
  }

  @Query(() => GraphQLJSONObject, {description: 'Gets details on a single ability based on name.'})
  getAbilityByName(@Arg('name') name: string) {
    const abilityEntry = this.abilityService.findByName(name);

    if (abilityEntry === undefined) {
      throw new Error(`Failed to get data for ability: ${name}`);
    }

    return abilityEntry;
  }
}