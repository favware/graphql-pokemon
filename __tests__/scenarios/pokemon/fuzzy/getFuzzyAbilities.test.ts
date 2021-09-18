import { getFuzzyAbilityName, getFuzzyAbilityWithFullData } from '#test-utils/queries/abilities';
import { gCall } from '#test-utils/testUtils';

describe('getFuzzyAbility', () => {
  describe('Name only requests', () => {
    test('GIVEN a valid name THEN returns Ability', async () => {
      const { data } = await gCall<'getFuzzyAbility'>({
        source: getFuzzyAbilityName,
        variableValues: { ability: 'multiscale' }
      });

      expect(data.getFuzzyAbility).toEqual([
        {
          name: 'Multiscale'
        }
      ]);
    });
  });

  describe('Full data requests', () => {
    test('GIVEN valid ability request THEN returns Ability WITH all data', async () => {
      const { data } = await gCall<'getFuzzyAbility'>({
        source: getFuzzyAbilityWithFullData,
        variableValues: { ability: 'multiscale' }
      });

      expect(data.getFuzzyAbility).toEqual([
        {
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Multiscale_(Ability)',
          desc: null,
          isFieldAbility: null,
          name: 'Multiscale',
          serebiiPage: 'https://www.serebii.net/abilitydex/multiscale.shtml',
          shortDesc: 'If this Pokémon is at full HP, damage taken from attacks is halved.',
          smogonPage: 'https://www.smogon.com/dex/ss/abilities/multiscale'
        }
      ]);
    });
  });

  describe('Error Requests', () => {
    test('GIVEN an invalid ability THEN returns error', async () => {
      const data = await gCall({
        source: getFuzzyAbilityName,
        variableValues: { ability: 'totally_invalid_ability' }
      });

      expect(data.errors).toHaveLength(1);
      expect(data.errors[0].message).toBe('No abilities found for: totally_invalid_ability');
    });
  });
});
