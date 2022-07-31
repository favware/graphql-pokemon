import { getTypeMatchup } from '#test-utils/queries/typematchup';
import { executeGraphQL } from '#test-utils/testUtils';

describe('getTypeMatchup', () => {
  describe('Successful requests', () => {
    test('GIVEN single type THEN returns type matchup', async () => {
      const { data } = await executeGraphQL<'getTypeMatchup'>({
        query: getTypeMatchup,
        variables: { primaryType: 'dragon' }
      });

      expect(data.getTypeMatchup).toEqual({
        attacking: {
          doubleEffectiveTypes: [],
          doubleResistedTypes: [],
          effectiveTypes: ['dragon'],
          effectlessTypes: ['fairy'],
          normalTypes: [
            'bug',
            'dark',
            'electric',
            'fighting',
            'fire',
            'flying',
            'ghost',
            'grass',
            'ground',
            'ice',
            'normal',
            'poison',
            'psychic',
            'rock',
            'water'
          ],
          resistedTypes: ['steel']
        },
        defending: {
          doubleEffectiveTypes: [],
          doubleResistedTypes: [],
          effectiveTypes: ['dragon', 'fairy', 'ice'],
          effectlessTypes: [],
          normalTypes: ['bug', 'dark', 'fighting', 'flying', 'ghost', 'ground', 'normal', 'poison', 'psychic', 'rock', 'steel'],
          resistedTypes: ['electric', 'fire', 'grass', 'water']
        }
      });
    });

    test('GIVEN 2 of the same types THEN returns type matchup', async () => {
      const { data } = await executeGraphQL<'getTypeMatchup'>({
        query: getTypeMatchup,
        variables: { primaryType: 'dragon', secondaryType: 'dragon' }
      });

      expect(data.getTypeMatchup).toEqual({
        attacking: {
          doubleEffectiveTypes: [],
          doubleResistedTypes: [],
          effectiveTypes: ['dragon'],
          effectlessTypes: ['fairy'],
          normalTypes: [
            'bug',
            'dark',
            'electric',
            'fighting',
            'fire',
            'flying',
            'ghost',
            'grass',
            'ground',
            'ice',
            'normal',
            'poison',
            'psychic',
            'rock',
            'water'
          ],
          resistedTypes: ['steel']
        },
        defending: {
          doubleEffectiveTypes: [],
          doubleResistedTypes: [],
          effectiveTypes: ['dragon', 'fairy', 'ice'],
          effectlessTypes: [],
          normalTypes: ['bug', 'dark', 'fighting', 'flying', 'ghost', 'ground', 'normal', 'poison', 'psychic', 'rock', 'steel'],
          resistedTypes: ['electric', 'fire', 'grass', 'water']
        }
      });
    });

    test('GIVEN 2 types THEN returns type matchup', async () => {
      const { data } = await executeGraphQL<'getTypeMatchup'>({
        query: getTypeMatchup,
        variables: { primaryType: 'dragon', secondaryType: 'flying' }
      });

      expect(data.getTypeMatchup).toEqual({
        attacking: {
          doubleEffectiveTypes: [],
          doubleResistedTypes: ['steel'],
          effectiveTypes: ['bug', 'dragon', 'fighting', 'grass'],
          effectlessTypes: ['fairy'],
          normalTypes: ['dark', 'fire', 'flying', 'ghost', 'ground', 'ice', 'normal', 'poison', 'psychic', 'water'],
          resistedTypes: ['electric', 'rock']
        },
        defending: {
          doubleEffectiveTypes: ['ice'],
          doubleResistedTypes: ['grass'],
          effectiveTypes: ['dragon', 'fairy', 'rock'],
          effectlessTypes: ['ground'],
          normalTypes: ['dark', 'electric', 'flying', 'ghost', 'normal', 'poison', 'psychic', 'steel'],
          resistedTypes: ['bug', 'fighting', 'fire', 'water']
        }
      });
    });

    test('GIVEN 2 types with effectless THEN returns type matchup', async () => {
      const { data } = await executeGraphQL<'getTypeMatchup'>({
        query: getTypeMatchup,
        variables: { primaryType: 'normal', secondaryType: 'ghost' }
      });

      expect(data.getTypeMatchup).toEqual({
        attacking: {
          doubleEffectiveTypes: [],
          doubleResistedTypes: [],
          effectiveTypes: ['psychic'],
          effectlessTypes: ['ghost', 'normal'],
          normalTypes: ['bug', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'grass', 'ground', 'ice', 'poison', 'water'],
          resistedTypes: ['dark', 'rock', 'steel']
        },
        defending: {
          doubleEffectiveTypes: [],
          doubleResistedTypes: [],
          effectiveTypes: ['dark'],
          effectlessTypes: ['fighting', 'ghost', 'normal'],
          normalTypes: ['dragon', 'electric', 'fairy', 'fire', 'flying', 'grass', 'ground', 'ice', 'psychic', 'rock', 'steel', 'water'],
          resistedTypes: ['bug', 'poison']
        }
      });
    });

    test('GIVEN 2 double effective attacking types THEN returns type matchup', async () => {
      const { data } = await executeGraphQL<'getTypeMatchup'>({
        query: getTypeMatchup,
        variables: { primaryType: 'ice', secondaryType: 'flying' }
      });

      expect(data.getTypeMatchup).toEqual({
        attacking: {
          doubleEffectiveTypes: ['grass'],
          doubleResistedTypes: ['steel'],
          effectiveTypes: ['bug', 'dragon', 'fighting', 'flying', 'ground'],
          effectlessTypes: [],
          normalTypes: ['dark', 'fairy', 'ghost', 'normal', 'poison', 'psychic'],
          resistedTypes: ['electric', 'fire', 'ice', 'rock', 'water']
        },
        defending: {
          doubleEffectiveTypes: ['rock'],
          doubleResistedTypes: [],
          effectiveTypes: ['electric', 'fire', 'steel'],
          effectlessTypes: ['ground'],
          normalTypes: ['dark', 'dragon', 'fairy', 'fighting', 'flying', 'ghost', 'ice', 'normal', 'poison', 'psychic', 'water'],
          resistedTypes: ['bug', 'grass']
        }
      });
    });
  });

  describe('Error Requests', () => {
    test('GIVEN one invalid type THEN returns error', async () => {
      const data = await executeGraphQL({
        query: getTypeMatchup,
        variables: { primaryType: ['totally_invalid_type'] }
      });

      expect(data.errors).toHaveLength(1);
      expect(data.errors?.[0].message).toBe(
        'Variable "$primaryType" got invalid value ["totally_invalid_type"]; Enum "TypesEnum" cannot represent non-string value: ["totally_invalid_type"].'
      );
    });

    test('GIVEN two invalid types THEN returns error', async () => {
      const data = await executeGraphQL({
        query: getTypeMatchup,
        variables: { primaryType: 'totally_invalid_type', secondaryType: 'invalid_type_totally' }
      });

      expect(data.errors).toHaveLength(2);
      expect(data.errors?.[0].message).toBe(
        'Variable "$primaryType" got invalid value "totally_invalid_type"; Value "totally_invalid_type" does not exist in "TypesEnum" enum.'
      );
      expect(data.errors?.[1].message).toBe(
        'Variable "$secondaryType" got invalid value "invalid_type_totally"; Value "invalid_type_totally" does not exist in "TypesEnum" enum.'
      );
    });
  });
});
