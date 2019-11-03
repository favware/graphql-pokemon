import { Arg, Args, Query, Resolver } from 'type-graphql';
import DexService from '../services/DexService';
import DetailsEntry from '../structures/DetailsEntry';
import PokemonPaginatedArgs from '../arguments/PokemonPaginatedArgs';
import { GraphQLJSONObject } from 'graphql-type-json';

@Resolver(DetailsEntry)
export default class DexResolver {
  private dexService: DexService;

  constructor() {
    this.dexService = new DexService();
  }

  @Query(() => GraphQLJSONObject, {
    description: [
      'Gets details on a single pokemon based on species name.',
      'You can supply skip and take to limit the amount of flavour texts to return and reverse to show latest games on top.',
      'Reversal is applied before pagination!'
    ].join(''),
  })
  async getPokemonDetails(@Args() {
    pokemon, skip, take, reverse,
  }: PokemonPaginatedArgs) {
    const detailsEntry = this.dexService.fetchPokemonDetails({
      pokemon, skip, take, reverse,
    });
    if (detailsEntry === undefined) {
      throw new Error(`Failed to get data for Pokemon: ${pokemon}`);
    }

    return detailsEntry;
  }

  @Query(() => GraphQLJSONObject, {
    description: [
      'Gets details on a single pokemon based on a fuzzy search.',
      'You can supply skip and take to limit the amount of flavour texts to return and reverse to show latest games on top.',
      'Reversal is applied before pagination!'
    ].join(''),
  })
  async getPokemonDetailsByFuzzy(@Args() {
    pokemon, skip, take, reverse,
  }: PokemonPaginatedArgs) {
    const entry = this.dexService.findBySpecies(pokemon);

    if (!entry) {
      const fuzzyEntry = this.dexService.findByFuzzy({
        pokemon, skip, take, reverse,
      });
      if (fuzzyEntry === undefined) {
        throw new Error(`Failed to get data for Pokemon: ${pokemon}`);
      }
      pokemon = fuzzyEntry[0].species;
    }

    const detailsEntry = this.dexService.fetchPokemonDetails({
      pokemon, skip, take, reverse,
    });
    if (detailsEntry === undefined) {
      throw new Error(`Failed to get data for Pokemon: ${pokemon}`);
    }

    return detailsEntry;
  }

  @Query(() => [ GraphQLJSONObject ], {
    description: [
      'Gets dex entries for pokemon based on a fuzzy search',
      'You can supply a skip and take to paginate the results and reverse to show the results least to most well matches',
      'Reversal is applied before pagination!'
    ].join(''),
  })
  getDexEntries(@Args() {
    pokemon, skip, take, reverse,
  }: PokemonPaginatedArgs) {
    const dexEntries = this.dexService.findByFuzzy({
      pokemon, skip, take, reverse,
    });
    if (dexEntries === undefined) {
      throw new Error(`Failed to get data for Pokemon: ${pokemon}`);
    }

    return dexEntries;
  }

  @Query(() => GraphQLJSONObject, { description: 'Gets the dex entry for a pokemon based on their species name' })
  getDexEntryBySpeciesName(@Arg('pokemon') pokemon: string) {
    const dexEntry = this.dexService.findBySpecies(pokemon);
    if (dexEntry === undefined) {
      throw new Error(`Failed to get data for Pokemon: ${pokemon}`);
    }

    return dexEntry;
  }

  @Query(() => GraphQLJSONObject, { description: 'Gets the dex entry for a pokemon based on their dex number' })
  getDexEntryByDexNumber(@Arg('num') num: number) {
    const dexEntry = this.dexService.findByNum(num);
    if (dexEntry === undefined) {
      throw new Error(`Failed to get data for Pokemon with dex number: ${num}`);
    }

    return dexEntry;
  }
}