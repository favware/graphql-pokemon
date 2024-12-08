import { getNatureName, getNatureWithFullData } from '#test-utils/queries/natures';
import { executeGraphQL } from '#test-utils/testUtils';

describe('getNature', () => {
  describe('Regular Nature name only requests', () => {
    test('GIVEN a valid name THEN returns Nature', async () => {
      const { data } = await executeGraphQL<'getNature'>({
        query: getNatureName,
        variables: { nature: 'adamant' }
      });

      expect(data.getNature.name).toEqual('Adamant');
    });
  });

  describe('Regular Nature full data requests', () => {
    test('GIVEN valid nature request THEN returns Nature WITH all data', async () => {
      const { data } = await executeGraphQL<'getNature'>({
        query: getNatureWithFullData,
        variables: { nature: 'adamant' }
      });

      expect(data.getNature).toEqual({
        name: 'Adamant',
        increasedStat: 'Attack',
        decreasedStat: 'Special Attack',
        preferredFlavor: 'Spicy',
        dislikedFlavor: 'Dry'
      });
    });
  });

  describe('Error Requests', () => {
    test('GIVEN an invalid nature THEN returns error', async () => {
      const data = await executeGraphQL({
        query: getNatureName,
        variables: { nature: 'totally_invalid_nature' }
      });

      expect(data.errors).toHaveLength(1);
      expect(data.errors?.[0].message).toBe(
        'Variable "$nature" got invalid value "totally_invalid_nature"; Value "totally_invalid_nature" does not exist in "NaturesEnum" enum.'
      );
    });
  });
});
