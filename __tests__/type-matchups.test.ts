import { formatResponse, gCall, gql } from '#test-utils/testUtils';
import type { DataResponse } from '#test-utils/types';
import { GraphQLError } from 'graphql';

describe('getTypeMatchup', () => {
  const typeEntryFragment = gql`
    fragment typeentry on TypeEntry {
      doubleEffectiveTypes
      effectiveTypes
      normalTypes
      resistedTypes
      doubleResistedTypes
      effectlessTypes
    }
  `;

  const getTypeMatchup = gql`
    ${typeEntryFragment}

    query ($types: [Types!]!) {
      getTypeMatchup(types: $types) {
        attacking {
          ...typeentry
        }
        defending {
          ...typeentry
        }
      }
    }
  `;

  test('GIVEN a one valid type THEN returns TypeMatchups', async () => {
    const { data } = (await gCall({
      source: getTypeMatchup,
      variableValues: { types: 'dragon' }
    }).then(formatResponse)) as DataResponse<'getTypeMatchup'>;

    expect(data.getTypeMatchup.attacking.effectiveTypes).toStrictEqual(['dragon']);
    expect(data.getTypeMatchup.defending.effectiveTypes).toStrictEqual(['dragon', 'fairy', 'ice']);
    expect(data).toMatchSnapshot();
  });

  test('GIVEN a one valid type as array THEN returns TypeMatchups', async () => {
    const { data } = (await gCall({
      source: getTypeMatchup,
      variableValues: { types: ['dragon'] }
    }).then(formatResponse)) as DataResponse<'getTypeMatchup'>;

    expect(data.getTypeMatchup.attacking.effectiveTypes).toStrictEqual(['dragon']);
    expect(data.getTypeMatchup.defending.effectiveTypes).toStrictEqual(['dragon', 'fairy', 'ice']);
    expect(data).toMatchSnapshot();
  });

  test('GIVEN a two valid types THEN returns TypeMatchups', async () => {
    const { data } = (await gCall({
      source: getTypeMatchup,
      variableValues: { types: ['dark', 'ghost'] }
    }).then(formatResponse)) as DataResponse<'getTypeMatchup'>;

    expect(data.getTypeMatchup.attacking.doubleEffectiveTypes).toStrictEqual(['ghost', 'psychic']);
    expect(data.getTypeMatchup.defending.effectiveTypes).toStrictEqual(['fairy']);
    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid type matchup THEN returns error', async () => {
    const data = await gCall({
      source: getTypeMatchup,
      variableValues: { types: 'totally_invalid_type' }
    });

    data.errors!.forEach((error) => expect(error).toBeInstanceOf(GraphQLError));
    expect(data).toMatchSnapshot();
  });
});

describe('getTypeByName', () => {
  const getTypeByName = gql`
    query ($type: Types!) {
      getTypeByName(type: $type)
    }
  `;

  test('GIVEN a valid type THEN returns JSONObject', async () => {
    const { data } = (await gCall({
      source: getTypeByName,
      variableValues: { type: 'fire' }
    }).then(formatResponse)) as DataResponse<'getTypeByName'>;

    const [dt, dd] = [data.getTypeByName.damageTaken, data.getTypeByName.damageDealt];
    const { bug: dtBug, dark: dtDark } = dt;
    const { dragon: ddDragon, grass: ddGrass } = dd;

    expect(dtBug).toBe(2);
    expect(dtDark).toBe(0);
    expect(ddDragon).toBe(2);
    expect(ddGrass).toBe(1);
    expect(data).toMatchSnapshot();
  });

  test('GIVEN an invalid type THEN returns error', async () => {
    const data = await gCall({
      source: getTypeByName,
      variableValues: { type: 'totally_invalid_type' }
    });

    data.errors!.forEach((error) => expect(error).toBeInstanceOf(GraphQLError));
    expect(data).toMatchSnapshot();
  });
});
