import { getItemName, getItemWithFullData } from '#test-utils/queries/items';
import { gCall } from '#test-utils/testUtils';

describe('getItem', () => {
  describe('Name only requests', () => {
    test('GIVEN a valid name THEN returns Item', async () => {
      const { data } = await gCall<'getItem'>({
        source: getItemName,
        variableValues: { item: 'lifeorb' }
      });

      expect(data.getItem.name).toEqual('Life Orb');
    });
  });

  describe('Full data requests', () => {
    test('GIVEN valid item request THEN returns Item WITH all data', async () => {
      const { data } = await gCall<'getItem'>({
        source: getItemWithFullData,
        variableValues: { item: 'lifeorb' }
      });

      expect(data.getItem).toEqual({
        bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Life_Orb',
        desc: "Holder's attacks do 1.3x damage, and it loses 1/10 its max HP after the attack.",
        generationIntroduced: 4,
        isNonstandard: null,
        name: 'Life Orb',
        serebiiPage: 'https://www.serebii.net/itemdex/lifeorb.shtml',
        shortDesc: null,
        smogonPage: 'https://www.smogon.com/dex/ss/items/life-orb',
        sprite: 'https://play.pokemonshowdown.com/sprites/itemicons/life-orb.png'
      });
    });
  });

  describe('Error Requests', () => {
    test('GIVEN an invalid item THEN returns error', async () => {
      const data = await gCall({
        source: getItemName,
        variableValues: { item: 'totally_invalid_item' }
      });

      expect(data.errors).toHaveLength(1);
      expect(data.errors[0].message).toBe(
        'Variable "$item" got invalid value "totally_invalid_item"; Value "totally_invalid_item" does not exist in "ItemsEnum" enum.'
      );
    });
  });
});
