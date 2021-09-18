import { getFuzzyLearnset } from '#test-utils/queries/learnsets';
import { gCall } from '#test-utils/testUtils';

describe('getFuzzyLearnset', () => {
  describe('Error Requests', () => {
    test('GIVEN a pokestar pokemon THEN returns error', async () => {
      const data = await gCall({
        source: getFuzzyLearnset,
        variableValues: { pokemon: 'pokestarsmeargle', moves: ['dragonclaw'] }
      });

      expect(data.errors).toHaveLength(1);
      expect(data.errors[0].message).toBe('No Pokémon found for pokestarsmeargle');
    });
  });
});
