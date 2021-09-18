import { getAbilityName, getAbilityWithFullData } from '#test-utils/queries/abilities';
import { gCall } from '#test-utils/testUtils';

describe('getAbility', () => {
  describe('Name only requests', () => {
    test('GIVEN a valid name THEN returns Ability', async () => {
      const { data } = await gCall<'getAbility'>({
        source: getAbilityName,
        variableValues: { ability: 'multiscale' }
      });

      expect(data.getAbility.name).toEqual('Multiscale');
    });
  });

  describe('Full data requests', () => {
    test('GIVEN valid ability request THEN returns Ability WITH all data', async () => {
      const { data } = await gCall<'getAbility'>({
        source: getAbilityWithFullData,
        variableValues: { ability: 'multiscale' }
      });

      expect(data.getAbility).toEqual({
        bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Multiscale_(Ability)',
        desc: null,
        isFieldAbility: null,
        name: 'Multiscale',
        serebiiPage: 'https://www.serebii.net/abilitydex/multiscale.shtml',
        shortDesc: 'If this Pokémon is at full HP, damage taken from attacks is halved.',
        smogonPage: 'https://www.smogon.com/dex/ss/abilities/multiscale'
      });
    });
  });

  describe('Error Requests', () => {
    test('GIVEN an invalid ability THEN returns error', async () => {
      const data = await gCall({
        source: getAbilityName,
        variableValues: { ability: 'totally_invalid_ability' }
      });

      expect(data.errors).toHaveLength(1);
      expect(data.errors[0].message).toBe(
        'Variable "$ability" got invalid value "totally_invalid_ability"; Value "totally_invalid_ability" does not exist in "AbilitiesEnum" enum.'
      );
    });
  });
});
