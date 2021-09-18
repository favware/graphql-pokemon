import { getFuzzyMoveName, getFuzzyMoveWithFullData } from '#test-utils/queries/moves';
import { gCall } from '#test-utils/testUtils';

describe('getFuzzyMove', () => {
  describe('Name only requests', () => {
    test('GIVEN a valid name THEN returns Move', async () => {
      const { data } = await gCall<'getFuzzyMove'>({
        source: getFuzzyMoveName,
        variableValues: { move: 'dragonclaw' }
      });

      expect(data.getFuzzyMove).toEqual([{ name: 'Dragon Claw' }]);
    });
  });

  describe('Full data requests', () => {
    test('GIVEN valid move request THEN returns Move WITH all data', async () => {
      const { data } = await gCall<'getFuzzyMove'>({
        source: getFuzzyMoveWithFullData,
        variableValues: { move: 'dragonclaw' }
      });

      expect(data.getFuzzyMove).toEqual([
        {
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Dragon_Claw_(move)',
          desc: 'No additional effect.',
          isFieldMove: null,
          name: 'Dragon Claw',
          serebiiPage: 'https://www.serebii.net/attackdex-swsh/dragonclaw.shtml',
          shortDesc: 'No additional effect.',
          smogonPage: 'https://www.smogon.com/dex/ss/moves/dragon-claw'
        }
      ]);
    });
  });

  describe('Error Requests', () => {
    test('GIVEN an invalid move THEN returns error', async () => {
      const data = await gCall({
        source: getFuzzyMoveName,
        variableValues: { move: 'totally_invalid_move' }
      });

      expect(data.errors).toHaveLength(1);
      expect(data.errors[0].message).toBe('No moves found for: totally_invalid_move');
    });
  });
});
