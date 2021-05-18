import { formatResponse, gCall, gql } from '#test-utils/testUtils';
import type { DataResponse } from '#test-utils/types';
import { GraphQLError } from 'graphql';

describe('getMoveDetailsByName', () => {
  const getMoveDetailsByName = gql`
    query ($move: Moves!) {
      getMoveDetailsByName(move: $move) {
        name
      }
    }
  `;

  test('GIVEN a valid move THEN returns MoveEntry', async () => {
    const { data } = (await gCall({
      source: getMoveDetailsByName,
      variableValues: { move: 'dragondance' }
    }).then(formatResponse)) as DataResponse<'getMoveDetailsByName'>;

    expect(data.getMoveDetailsByName.name).toBe('Dragon Dance');
    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid move THEN returns error', async () => {
    const data = await gCall({
      source: getMoveDetailsByName,
      variableValues: { move: 'totally_invalid_move' }
    });

    data.errors!.forEach((error) => expect(error).toBeInstanceOf(GraphQLError));
    expect(data).toMatchSnapshot();
  });
});

describe('getMoveDetailsByFuzzy', () => {
  const getMoveDetailsByFuzzy = gql`
    query ($move: String!, $skip: Int, $take: Int, $reverse: Boolean) {
      getMoveDetailsByFuzzy(move: $move, skip: $skip, take: $take, reverse: $reverse) {
        name
      }
    }
  `;

  test('GIVEN a valid move THEN returns MoveEntry', async () => {
    const { data } = (await gCall({
      source: getMoveDetailsByFuzzy,
      variableValues: { move: 'dragondance' }
    }).then(formatResponse)) as DataResponse<'getMoveDetailsByFuzzy'>;

    expect(data.getMoveDetailsByFuzzy.name).toBe('Dragon Dance');
    expect(data).toMatchSnapshot();
  });

  test('GIVEN a fuzzy move THEN returns MoveEntry', async () => {
    const { data } = (await gCall({
      source: getMoveDetailsByFuzzy,
      variableValues: { move: 'dragon' }
    }).then(formatResponse)) as DataResponse<'getMoveDetailsByFuzzy'>;

    expect(data).toMatchSnapshot();
  });

  test('GIVEN a fuzzy move and pagination THEN returns MoveEntry', async () => {
    const { data } = (await gCall({
      source: getMoveDetailsByFuzzy,
      variableValues: {
        move: 'dragon',
        skip: 2,
        take: 1,
        reverse: true
      }
    }).then(formatResponse)) as DataResponse<'getMoveDetailsByFuzzy'>;

    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid move THEN returns error', async () => {
    const data = await gCall({
      source: getMoveDetailsByFuzzy,
      variableValues: { move: 'totally_invalid_move' }
    });

    data.errors!.forEach((error) => expect(error).toBeInstanceOf(GraphQLError));
    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid move and pagination THEN returns error', async () => {
    const data = await gCall({
      source: getMoveDetailsByFuzzy,
      variableValues: {
        move: 'totally_invalid_move',
        skip: 0,
        take: 1,
        reverse: false
      }
    });

    data.errors!.forEach((error) => expect(error).toBeInstanceOf(GraphQLError));
    expect(data).toMatchSnapshot();
  });
});

describe('getMoveByFuzzy', () => {
  const getMoveByFuzzy = gql`
    query ($move: String!, $skip: Int, $take: Int, $reverse: Boolean) {
      getMoveByFuzzy(move: $move, skip: $skip, take: $take, reverse: $reverse)
    }
  `;

  test('GIVEN a valid move THEN returns JSONObject', async () => {
    const { data } = (await gCall({
      source: getMoveByFuzzy,
      variableValues: { move: 'dragondance' }
    }).then(formatResponse)) as DataResponse<'getMoveByFuzzy'>;

    expect(data).toMatchSnapshot();
  });

  test('GIVEN a fuzzy move THEN returns JSONObject', async () => {
    const { data } = (await gCall({
      source: getMoveByFuzzy,
      variableValues: { move: 'dragon' }
    }).then(formatResponse)) as DataResponse<'getMoveByFuzzy'>;

    expect(data).toMatchSnapshot();
  });

  test('GIVEN a fuzzy move and pagination THEN returns MoveEntry', async () => {
    const { data } = (await gCall({
      source: getMoveByFuzzy,
      variableValues: {
        move: 'dragon',
        skip: 2,
        take: 1,
        reverse: true
      }
    }).then(formatResponse)) as DataResponse<'getMoveByFuzzy'>;

    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid move THEN returns empty array', async () => {
    const { data } = (await gCall({
      source: getMoveByFuzzy,
      variableValues: { move: 'totally_invalid_move' }
    }).then(formatResponse)) as DataResponse<'getMoveByFuzzy'>;

    expect(data.getMoveByFuzzy).toStrictEqual([]);
    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid move and pagination THEN returns empty array', async () => {
    const { data } = (await gCall({
      source: getMoveByFuzzy,
      variableValues: {
        move: 'totally_invalid_move',
        skip: 0,
        take: 1,
        reverse: false
      }
    }).then(formatResponse)) as DataResponse<'getMoveByFuzzy'>;

    expect(data.getMoveByFuzzy).toStrictEqual([]);
    expect(data).toMatchSnapshot();
  });
});

describe('getMoveByName', () => {
  const getMoveByName = gql`
    query ($move: Moves!) {
      getMoveByName(move: $move)
    }
  `;

  test('GIVEN a valid move THEN returns JSONObject', async () => {
    const { data } = (await gCall({
      source: getMoveByName,
      variableValues: { move: 'dragondance' }
    }).then(formatResponse)) as DataResponse<'getMoveByName'>;

    expect(data.getMoveByName.name).toBe('Dragon Dance');
    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid move THEN returns error', async () => {
    const data = await gCall({
      source: getMoveByName,
      variableValues: { move: 'totally_invalid_move' }
    });

    data.errors!.forEach((error) => expect(error).toBeInstanceOf(GraphQLError));
    expect(data).toMatchSnapshot();
  });
});
