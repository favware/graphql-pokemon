import { formatResponse, gCall, gql } from '#test-utils/testUtils';
import type { DataResponse } from '#test-utils/types';
import { GraphQLError } from 'graphql';

describe('getAbilityDetailsByName', () => {
  const getAbilityDetailsByName = gql`
    query ($ability: Abilities!) {
      getAbilityDetailsByName(ability: $ability) {
        name
      }
    }
  `;

  test('GIVEN a valid ability THEN returns AbilityEntry', async () => {
    const { data } = (await gCall({
      source: getAbilityDetailsByName,
      variableValues: { ability: 'multiscale' }
    }).then(formatResponse)) as DataResponse<'getAbilityDetailsByName'>;

    expect(data.getAbilityDetailsByName.name).toBe('Multiscale');
    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid ability THEN returns error', async () => {
    const data = await gCall({
      source: getAbilityDetailsByName,
      variableValues: { ability: 'totally_invalid_ability' }
    });

    data.errors!.forEach((error) => expect(error).toBeInstanceOf(GraphQLError));
    expect(data).toMatchSnapshot();
  });
});

describe('getAbilityDetailsByFuzzy', () => {
  const getAbilityDetailsByFuzzy = gql`
    query ($ability: String!, $skip: Int, $take: Int, $reverse: Boolean) {
      getAbilityDetailsByFuzzy(ability: $ability, skip: $skip, take: $take, reverse: $reverse) {
        name
      }
    }
  `;

  test('GIVEN a valid ability THEN returns AbilityEntry', async () => {
    const { data } = (await gCall({
      source: getAbilityDetailsByFuzzy,
      variableValues: { ability: 'multiscaale' }
    }).then(formatResponse)) as DataResponse<'getAbilityDetailsByFuzzy'>;

    expect(data.getAbilityDetailsByFuzzy.name).toBe('Multiscale');
    expect(data).toMatchSnapshot();
  });

  test('GIVEN a fuzzy ability THEN returns AbilityEntry', async () => {
    const { data } = (await gCall({
      source: getAbilityDetailsByFuzzy,
      variableValues: { ability: 'multi' }
    }).then(formatResponse)) as DataResponse<'getAbilityDetailsByFuzzy'>;

    expect(data.getAbilityDetailsByFuzzy.name).toBe('Multiscale');
    expect(data).toMatchSnapshot();
  });

  test('GIVEN a fuzzy ability and pagination THEN returns AbilityEntry', async () => {
    const { data } = (await gCall({
      source: getAbilityDetailsByFuzzy,
      variableValues: {
        ability: 'multi',
        skip: 1,
        take: 1,
        reverse: false
      }
    }).then(formatResponse)) as DataResponse<'getAbilityDetailsByFuzzy'>;

    expect(data.getAbilityDetailsByFuzzy.name).toBe('Multitype');
    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid ability THEN returns error', async () => {
    const data = await gCall({
      source: getAbilityDetailsByFuzzy,
      variableValues: { ability: 'totally_invalid_ability' }
    });

    data.errors!.forEach((error) => expect(error).toBeInstanceOf(GraphQLError));
    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid ability and pagination THEN returns error', async () => {
    const data = await gCall({
      source: getAbilityDetailsByFuzzy,
      variableValues: {
        ability: 'totally_invalid_ability',
        skip: 0,
        take: 1,
        reverse: false
      }
    });

    data.errors!.forEach((error) => expect(error).toBeInstanceOf(GraphQLError));
    expect(data).toMatchSnapshot();
  });
});

describe('getAbilityByFuzzy', () => {
  const getAbilityByFuzzy = gql`
    query ($ability: String!, $skip: Int, $take: Int, $reverse: Boolean) {
      getAbilityByFuzzy(ability: $ability, skip: $skip, take: $take, reverse: $reverse)
    }
  `;

  test('GIVEN a valid ability THEN returns JSONObject', async () => {
    const { data } = (await gCall({
      source: getAbilityByFuzzy,
      variableValues: { ability: 'multiscale' }
    }).then(formatResponse)) as DataResponse<'getAbilityByFuzzy'>;

    expect(data).toMatchSnapshot();
  });

  test('GIVEN a fuzzy ability THEN returns JSONObject', async () => {
    const { data } = (await gCall({
      source: getAbilityByFuzzy,
      variableValues: { ability: 'multi' }
    }).then(formatResponse)) as DataResponse<'getAbilityByFuzzy'>;

    expect(data).toMatchSnapshot();
  });

  test('GIVEN a fuzzy ability and pagination THEN returns JSONObject', async () => {
    const { data } = (await gCall({
      source: getAbilityByFuzzy,
      variableValues: {
        ability: 'multi',
        skip: 1,
        take: 1,
        reverse: true
      }
    }).then(formatResponse)) as DataResponse<'getAbilityByFuzzy'>;

    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid ability THEN returns empty array', async () => {
    const { data } = (await gCall({
      source: getAbilityByFuzzy,
      variableValues: { ability: 'totally_invalid_ability' }
    }).then(formatResponse)) as DataResponse<'getAbilityByFuzzy'>;

    expect(data.getAbilityByFuzzy).toStrictEqual([]);
    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid ability and pagination THEN returns empty array', async () => {
    const { data } = (await gCall({
      source: getAbilityByFuzzy,
      variableValues: {
        ability: 'totally_invalid_ability',
        skip: 1,
        take: 2,
        reverse: false
      }
    }).then(formatResponse)) as DataResponse<'getAbilityByFuzzy'>;

    expect(data.getAbilityByFuzzy).toStrictEqual([]);
    expect(data).toMatchSnapshot();
  });
});

describe('getAbilityByName', () => {
  const getAbilityByName = gql`
    query ($ability: Abilities!) {
      getAbilityByName(ability: $ability)
    }
  `;

  test('GIVEN a valid ability THEN returns JSONObject', async () => {
    const { data } = (await gCall({
      source: getAbilityByName,
      variableValues: { ability: 'multiscale' }
    }).then(formatResponse)) as DataResponse<'getAbilityByName'>;

    expect(data.getAbilityByName.name).toBe('Multiscale');
    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid ability THEN returns error', async () => {
    const data = await gCall({
      source: getAbilityByName,
      variableValues: { ability: 'totally_invalid_ability' }
    });

    data.errors!.forEach((error) => expect(error).toBeInstanceOf(GraphQLError));
    expect(data).toMatchSnapshot();
  });
});
