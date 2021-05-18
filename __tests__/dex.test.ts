import { formatResponse, gCall, gql } from '#test-utils/testUtils';
import type { DataResponse } from '#test-utils/types';
import { GraphQLError } from 'graphql';

const dexDetailsFragment = gql`
  fragment dexdetails on DexDetails {
    num
    species
    baseStatsTotal
  }
`;
const dexEntriesFragment = gql`
  fragment dexentries on DexEntry {
    num
    species
  }
`;

describe('getPokemonDetailsByName', () => {
  const getPokemonDetailsByName = gql`
    ${dexDetailsFragment}

    query ($pokemon: Pokemon!) {
      getPokemonDetailsByName(pokemon: $pokemon) {
        ...dexdetails
      }
    }
  `;

  test('GIVEN a valid pokemon THEN returns DexDetails', async () => {
    const { data } = (await gCall({
      source: getPokemonDetailsByName,
      variableValues: { pokemon: 'dragonite' }
    }).then(formatResponse)) as DataResponse<'getPokemonDetailsByName'>;

    expect(data.getPokemonDetailsByName.species).toBe('dragonite');
    expect(data.getPokemonDetailsByName.num).toBe(149);
    expect(data.getPokemonDetailsByName.baseStatsTotal).toBe(600);
    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid pokemon THEN returns error', async () => {
    const data = await gCall({
      source: getPokemonDetailsByName,
      variableValues: { ability: 'totally_invalid_ability' }
    });

    data.errors!.forEach((error) => expect(error).toBeInstanceOf(GraphQLError));
    expect(data).toMatchSnapshot();
  });
});

describe('getPokemonDetails', () => {
  const getPokemonDetails = gql`
    ${dexDetailsFragment}

    query ($pokemon: Pokemon!) {
      getPokemonDetails(pokemon: $pokemon) {
        ...dexdetails
      }
    }
  `;

  test('GIVEN a valid pokemon THEN returns DexDetails', async () => {
    const { data } = (await gCall({
      source: getPokemonDetails,
      variableValues: { pokemon: 'dragonite' }
    }).then(formatResponse)) as DataResponse<'getPokemonDetails'>;

    expect(data.getPokemonDetails.species).toBe('dragonite');
    expect(data.getPokemonDetails.num).toBe(149);
    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid pokemon THEN returns error', async () => {
    const data = await gCall({
      source: getPokemonDetails,
      variableValues: { ability: 'totally_invalid_ability' }
    });

    data.errors!.forEach((error) => expect(error).toBeInstanceOf(GraphQLError));
    expect(data).toMatchSnapshot();
  });
});

describe('getPokemonDetailsByFuzzy', () => {
  const getPokemonDetailsByFuzzy = gql`
    ${dexDetailsFragment}

    query ($pokemon: String!, $skip: Int, $take: Int, $reverse: Boolean) {
      getPokemonDetailsByFuzzy(pokemon: $pokemon, skip: $skip, take: $take, reverse: $reverse) {
        ...dexdetails
      }
    }
  `;

  test('GIVEN a valid pokemon THEN returns DexDetails', async () => {
    const { data } = (await gCall({
      source: getPokemonDetailsByFuzzy,
      variableValues: { pokemon: 'dragonite' }
    }).then(formatResponse)) as DataResponse<'getPokemonDetailsByFuzzy'>;

    expect(data.getPokemonDetailsByFuzzy.species).toBe('dragonite');
    expect(data.getPokemonDetailsByFuzzy.num).toBe(149);
    expect(data).toMatchSnapshot();
  });

  test('GIVEN a fuzzy pokemon THEN returns DexDetails', async () => {
    const { data } = (await gCall({
      source: getPokemonDetailsByFuzzy,
      variableValues: { pokemon: 'dragoni' }
    }).then(formatResponse)) as DataResponse<'getPokemonDetailsByFuzzy'>;

    expect(data.getPokemonDetailsByFuzzy.species).toBe('dragonite');
    expect(data.getPokemonDetailsByFuzzy.num).toBe(149);
    expect(data).toMatchSnapshot();
  });

  test('GIVEN a fuzzy gigantamax pokemon THEN returns DexDetails', async () => {
    const { data } = (await gCall({
      source: getPokemonDetailsByFuzzy,
      variableValues: { pokemon: 'gigantamax charizard' }
    }).then(formatResponse)) as DataResponse<'getPokemonDetailsByFuzzy'>;

    expect(data.getPokemonDetailsByFuzzy.species).toBe('charizard-gmax');
    expect(data.getPokemonDetailsByFuzzy.num).toBe(6);
    expect(data).toMatchSnapshot();
  });

  test('GIVEN a fuzzy pokemon and pagination THEN returns DexDetails', async () => {
    const { data } = (await gCall({
      source: getPokemonDetailsByFuzzy,
      variableValues: {
        pokemon: 'silvallydragon',
        skip: 1,
        take: 2,
        reverse: true
      }
    }).then(formatResponse)) as DataResponse<'getPokemonDetailsByFuzzy'>;

    expect(data.getPokemonDetailsByFuzzy.species).toBe('silvally-dragon');
    expect(data.getPokemonDetailsByFuzzy.num).toBe(773);
    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid pokemon THEN returns error', async () => {
    const data = await gCall({
      source: getPokemonDetailsByFuzzy,
      variableValues: { ability: 'totally_invalid_ability' }
    });

    data.errors!.forEach((error) => expect(error).toBeInstanceOf(GraphQLError));
    expect(data).toMatchSnapshot();
  });
});

describe('getDexEntries', () => {
  const getDexEntries = gql`
    ${dexEntriesFragment}

    query ($skip: Int, $take: Int, $reverse: Boolean, $pokemon: String!) {
      getDexEntries(pokemon: $pokemon, skip: $skip, take: $take, reverse: $reverse) {
        ...dexentries
      }
    }
  `;

  test('GIVEN a fuzzy pokemon THEN returns DexEntries', async () => {
    const { data } = (await gCall({
      source: getDexEntries,
      variableValues: { pokemon: 'dragoni' }
    }).then(formatResponse)) as DataResponse<'getDexEntries'>;

    expect(data.getDexEntries[0].species).toBe('dragonite');
    expect(data.getDexEntries[0].num).toBe(149);
    expect(data.getDexEntries).toContainEqual({ num: 148, species: 'dragonair' });
    expect(data).toMatchSnapshot();
  });

  test('GIVEN a fuzzy pokemon and pagination THEN returns DexEntries', async () => {
    const { data } = (await gCall({
      source: getDexEntries,
      variableValues: {
        pokemon: 'dragoni',
        skip: 2,
        take: 3,
        reverse: true
      }
    }).then(formatResponse)) as DataResponse<'getDexEntries'>;

    expect(data.getDexEntries[0].species).toBe('arceus-dragon');
    expect(data.getDexEntries[0].num).toBe(493);
    expect(data.getDexEntries).toContainEqual({ num: 773, species: 'silvally-dragon' });
    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid pokemon THEN returns error', async () => {
    const data = await gCall({
      source: getDexEntries,
      variableValues: { ability: 'totally_invalid_ability' }
    });

    data.errors!.forEach((error) => expect(error).toBeInstanceOf(GraphQLError));
    expect(data).toMatchSnapshot();
  });
});

describe('getDexEntryBySpeciesName', () => {
  const getDexEntryBySpeciesName = gql`
    query ($pokemon: Pokemon!) {
      getDexEntryBySpeciesName(pokemon: $pokemon)
    }
  `;

  test('GIVEN a valid pokemon THEN returns JSONObject', async () => {
    const { data } = (await gCall({
      source: getDexEntryBySpeciesName,
      variableValues: { pokemon: 'dragonite' }
    }).then(formatResponse)) as DataResponse<'getDexEntryBySpeciesName'>;

    expect(data.getDexEntryBySpeciesName.species).toBe('dragonite');
    expect(data.getDexEntryBySpeciesName.num).toBe(149);
    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid pokemon THEN returns error', async () => {
    const data = await gCall({
      source: getDexEntryBySpeciesName,
      variableValues: { pokemon: 'totally_invalid_pokemon' }
    });

    data.errors!.forEach((error) => expect(error).toBeInstanceOf(GraphQLError));
    expect(data).toMatchSnapshot();
  });
});

describe('getDexEntryByDexNumber', () => {
  const getDexEntryByDexNumber = gql`
    query ($pokemonNr: Float!) {
      getDexEntryByDexNumber(num: $pokemonNr)
    }
  `;

  test('GIVEN a valid pokemon number THEN returns JSONObject', async () => {
    const { data } = (await gCall({
      source: getDexEntryByDexNumber,
      variableValues: { pokemonNr: 493 }
    }).then(formatResponse)) as DataResponse<'getDexEntryByDexNumber'>;

    expect(data.getDexEntryByDexNumber.species).toBe('arceus');
    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid pokemon number THEN returns error', async () => {
    const data = await gCall({
      source: getDexEntryByDexNumber,
      variableValues: { pokemonNr: -9999 }
    });

    data.errors!.forEach((error) => expect(error).toBeInstanceOf(GraphQLError));
    expect(data).toMatchSnapshot();
  });
});
