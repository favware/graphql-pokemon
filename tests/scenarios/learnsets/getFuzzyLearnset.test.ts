import { getFuzzyLearnset } from '#test-utils/queries/learnsets';
import { executeGraphQL } from '#test-utils/testUtils';

describe('getFuzzyLearnset', () => {
  describe('Error Requests', () => {
    test('GIVEN a pokestar Pokémon THEN returns error', async () => {
      const data = await executeGraphQL({
        query: getFuzzyLearnset,
        variables: { pokemon: 'pokestarsmeargle', moves: ['dragonclaw'] }
      });

      expect(data.errors).toHaveLength(1);
      expect(data.errors?.[0].message).toBe('Failed to get learnsets for the combination of Pokémon "pokestarsmeargle", and move "dragonclaw"');
    });

    test('GIVEN a pokestar Pokémon WITH multiple moves THEN returns error', async () => {
      const data = await executeGraphQL({
        query: getFuzzyLearnset,
        variables: { pokemon: 'pokestarsmeargle', moves: ['dragonclaw', 'sketch', 'extremespeed'] }
      });

      expect(data.errors).toHaveLength(1);
      expect(data.errors?.[0].message).toBe(
        'Failed to get learnsets for the combination of Pokémon "pokestarsmeargle", and moves "dragonclaw, sketch, and extremespeed"'
      );
    });
  });
});
