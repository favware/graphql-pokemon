import { GraphQLJSONObject } from 'graphql-type-json';
import { Arg, Args, Query, Resolver } from 'type-graphql';
import ExactPokemonPaginatedArgs, { Pokemon } from '../arguments/ExactPokemonPaginatedArgs';
import PokemonPaginatedArgs from '../arguments/PokemonPaginatedArgs';
import DexService from '../services/DexService';
import DexDetails from '../structures/DexDetails';
import DexEntry from '../structures/DexEntry';
import { getRequestedFields } from '../utils/getRequestedFields';
import GraphQLSet from '../utils/GraphQLSet';
import Util from '../utils/util';

@Resolver(DexDetails)
export default class DexResolver {
  private dexService: DexService;

  constructor() {
    this.dexService = new DexService();
  }

  @Query(() => DexDetails, {
    description: [
      'Gets details on a single Pokémon based on species name.',
      'You can supply skip and take to limit the amount of flavour texts to return and reverse to show latest games on top.',
      'Reversal is applied before pagination!'
    ].join('')
  })
  async getPokemonDetails(
    @Args() { pokemon, skip, take, reverse }: ExactPokemonPaginatedArgs,
    @getRequestedFields() requestedFields: GraphQLSet<unknown>
  ) {
    const detailsEntry = this.dexService.findBySpeciesWithDetails(
      {
        pokemon,
        skip,
        take,
        reverse
      },
      requestedFields
    );
    if (detailsEntry === undefined) {
      throw new Error(`Failed to get data for Pokémon: ${pokemon}`);
    }

    return detailsEntry;
  }

  @Query(() => DexDetails, {
    description: [
      'Gets details on a single Pokémon based on species name.',
      'You can supply skip and take to limit the amount of flavour texts to return and reverse to show latest games on top.',
      'Reversal is applied before pagination!'
    ].join('')
  })
  getPokemonDetailsByName(
    @Args() { pokemon, skip, take, reverse }: ExactPokemonPaginatedArgs,
    @getRequestedFields() requestedFields: GraphQLSet<keyof DexDetails>
  ) {
    return this.getPokemonDetails(
      {
        pokemon,
        skip,
        take,
        reverse
      },
      requestedFields
    );
  }

  @Query(() => DexDetails, {
    description: [
      'Gets details on a single Pokémon based on a fuzzy search.',
      'You can supply skip and take to limit the amount of flavour texts to return and reverse to show latest games on top.',
      'Reversal is applied before pagination!'
    ].join('')
  })
  async getPokemonDetailsByFuzzy(
    @Args() { pokemon, skip, take, reverse }: PokemonPaginatedArgs,
    @getRequestedFields() requestedFields: GraphQLSet<unknown>
  ) {
    const entry = this.dexService.findBySpecies(pokemon);

    if (!entry) {
      const fuzzyEntry = this.dexService.getByFuzzy({ pokemon, skip, take });
      if (fuzzyEntry === undefined) {
        throw new Error(`Failed to get data for Pokémon: ${pokemon}`);
      }
      pokemon = Util.toLowerSingleWordCase(fuzzyEntry[0].species);
    }

    const detailsEntry = this.dexService.findBySpeciesWithDetails(
      {
        pokemon,
        skip,
        take,
        reverse
      },
      requestedFields
    );
    if (detailsEntry === undefined) {
      throw new Error(`Failed to get data for Pokémon: ${pokemon}`);
    }

    return detailsEntry;
  }

  @Query(() => [DexEntry], {
    description: [
      'Gets dex entries for Pokémon based on a fuzzy search',
      'You can supply a skip and take to paginate the results and reverse to show the results least to most well matches',
      'Reversal is applied before pagination!'
    ].join('')
  })
  getDexEntries(
    @Args() { pokemon, skip, take, reverse }: PokemonPaginatedArgs,
    @getRequestedFields() requestedFields: GraphQLSet<unknown>
  ) {
    const dexEntries = this.dexService.findByFuzzy(
      {
        pokemon,
        skip,
        take,
        reverse
      },
      requestedFields
    );
    if (dexEntries === undefined) {
      throw new Error(`Failed to get data for Pokémon: ${pokemon}`);
    }

    return dexEntries;
  }

  @Query(() => GraphQLJSONObject, { description: 'Gets the dex entry for a Pokémon based on their species name' })
  getDexEntryBySpeciesName(@Arg('pokemon', () => Pokemon) pokemon: string) {
    const dexEntry = this.dexService.findBySpecies(pokemon);
    if (dexEntry === undefined) {
      throw new Error(`Failed to get data for Pokémon: ${pokemon}`);
    }

    return dexEntry;
  }

  @Query(() => GraphQLJSONObject, { description: 'Gets the dex entry for a Pokémon based on their dex number' })
  getDexEntryByDexNumber(@Arg('num') num: number) {
    const dexEntry = this.dexService.findByNum(num);
    if (dexEntry === undefined) {
      throw new Error(`Failed to get data for Pokémon with dex number: ${num}`);
    }

    return dexEntry;
  }
}
