import { formatResponse, gCall, gql } from '#test-utils/testUtils';
import type { DataResponse } from '#test-utils/types';
import { GraphQLError } from 'graphql';

describe('getItemDetailsByName', () => {
  const getItemDetailsByName = gql`
    query ($item: Items!) {
      getItemDetailsByName(item: $item) {
        name
      }
    }
  `;

  test('GIVEN a valid item THEN returns ItemEntry', async () => {
    const { data } = (await gCall({
      source: getItemDetailsByName,
      variableValues: { item: 'lifeorb' }
    }).then(formatResponse)) as DataResponse<'getItemDetailsByName'>;

    expect(data.getItemDetailsByName.name).toBe('Life Orb');
    expect(data).toMatchSnapshot();
  });

  test('GIVEN a valid generation 8 item THEN returns ItemEntry', async () => {
    const { data } = (await gCall({
      source: getItemDetailsByName,
      variableValues: { item: 'flowersweet' }
    }).then(formatResponse)) as DataResponse<'getItemDetailsByName'>;

    expect(data.getItemDetailsByName.name).toBe('Flower Sweet');
    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid item THEN returns error', async () => {
    const data = await gCall({
      source: getItemDetailsByName,
      variableValues: { item: 'totally_invalid_item' }
    });

    data.errors!.forEach((error) => expect(error).toBeInstanceOf(GraphQLError));
    expect(data).toMatchSnapshot();
  });
});

describe('getItemDetailsByFuzzy', () => {
  const getItemDetailsByFuzzy = gql`
    query ($item: String!, $skip: Int, $take: Int, $reverse: Boolean) {
      getItemDetailsByFuzzy(item: $item, skip: $skip, take: $take, reverse: $reverse) {
        name
        sprite
      }
    }
  `;

  test('GIVEN a valid item THEN returns ItemEntry', async () => {
    const { data } = (await gCall({
      source: getItemDetailsByFuzzy,
      variableValues: { item: 'choicespecs' }
    }).then(formatResponse)) as DataResponse<'getItemDetailsByFuzzy'>;

    expect(data.getItemDetailsByFuzzy.name).toBe('Choice Specs');
    expect(data.getItemDetailsByFuzzy.sprite).toBe('https://play.pokemonshowdown.com/sprites/itemicons/choice-specs.png');
    expect(data).toMatchSnapshot();
  });

  test('GIVEN a fuzzy item THEN returns ItemEntry', async () => {
    const { data } = (await gCall({
      source: getItemDetailsByFuzzy,
      variableValues: { item: 'choice' }
    }).then(formatResponse)) as DataResponse<'getItemDetailsByFuzzy'>;

    expect(data.getItemDetailsByFuzzy.name).toBe('Choice Band');
    expect(data.getItemDetailsByFuzzy.sprite).toBe('https://play.pokemonshowdown.com/sprites/itemicons/choice-band.png');
    expect(data).toMatchSnapshot();
  });

  test('GIVEN a fuzzy item and pagination THEN returns ItemEntry', async () => {
    const { data } = (await gCall({
      source: getItemDetailsByFuzzy,
      variableValues: {
        item: 'choice',
        skip: 1,
        take: 1,
        reverse: true
      }
    }).then(formatResponse)) as DataResponse<'getItemDetailsByFuzzy'>;

    expect(data.getItemDetailsByFuzzy.name).toBe('Choice Scarf');
    expect(data.getItemDetailsByFuzzy.sprite).toBe('https://play.pokemonshowdown.com/sprites/itemicons/choice-scarf.png');
    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid item THEN returns error', async () => {
    const data = await gCall({
      source: getItemDetailsByFuzzy,
      variableValues: { item: 'totally_invalid_item' }
    });

    data.errors!.forEach((error) => expect(error).toBeInstanceOf(GraphQLError));
    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid item and pagination THEN returns error', async () => {
    const data = await gCall({
      source: getItemDetailsByFuzzy,
      variableValues: {
        item: 'totally_invalid_item',
        skip: 0,
        take: 1,
        reverse: false
      }
    });

    data.errors!.forEach((error) => expect(error).toBeInstanceOf(GraphQLError));
    expect(data).toMatchSnapshot();
  });
});

describe('getItemByFuzzy', () => {
  const getItemByFuzzy = gql`
    query ($item: String!, $skip: Int, $take: Int, $reverse: Boolean) {
      getItemByFuzzy(item: $item, skip: $skip, take: $take, reverse: $reverse)
    }
  `;

  test('GIVEN a valid item THEN returns JSONObject', async () => {
    const { data } = (await gCall({
      source: getItemByFuzzy,
      variableValues: { item: 'lifeorb' }
    }).then(formatResponse)) as DataResponse<'getItemByFuzzy'>;

    expect(data).toMatchSnapshot();
  });

  test('GIVEN a fuzzy item THEN returns JSONObject', async () => {
    const { data } = (await gCall({
      source: getItemByFuzzy,
      variableValues: { item: 'choice' }
    }).then(formatResponse)) as DataResponse<'getItemByFuzzy'>;

    expect(data).toMatchSnapshot();
  });

  test('GIVEN a fuzzy item and pagination THEN returns JSONObject', async () => {
    const { data } = (await gCall({
      source: getItemByFuzzy,
      variableValues: {
        item: 'choice',
        skip: 2,
        take: 1,
        reverse: true
      }
    }).then(formatResponse)) as DataResponse<'getItemByFuzzy'>;

    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid item THEN returns empty array', async () => {
    const { data } = (await gCall({
      source: getItemByFuzzy,
      variableValues: { item: 'totally_invalid_item' }
    }).then(formatResponse)) as DataResponse<'getItemByFuzzy'>;

    expect(data.getItemByFuzzy).toStrictEqual([]);
    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid item and pagination THEN returns empty array', async () => {
    const { data } = (await gCall({
      source: getItemByFuzzy,
      variableValues: {
        item: 'totally_invalid_item',
        skip: 0,
        take: 1,
        reverse: false
      }
    }).then(formatResponse)) as DataResponse<'getItemByFuzzy'>;

    expect(data.getItemByFuzzy).toStrictEqual([]);
    expect(data).toMatchSnapshot();
  });
});

describe('getItemByName', () => {
  const getItemByName = gql`
    query ($item: Items!) {
      getItemByName(item: $item)
    }
  `;

  test('GIVEN a valid item THEN returns JSONObject', async () => {
    const { data } = (await gCall({
      source: getItemByName,
      variableValues: { item: 'lifeorb' }
    }).then(formatResponse)) as DataResponse<'getItemByName'>;

    expect(data.getItemByName.name).toBe('Life Orb');
    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid item THEN returns error', async () => {
    const data = await gCall({
      source: getItemByName,
      variableValues: { item: 'totally_invalid_item' }
    });

    data.errors!.forEach((error) => expect(error).toBeInstanceOf(GraphQLError));
    expect(data).toMatchSnapshot();
  });
});
