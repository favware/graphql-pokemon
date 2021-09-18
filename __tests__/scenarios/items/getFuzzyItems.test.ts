import { getFuzzyItemName, getFuzzyItemWithFullData } from '#test-utils/queries/items';
import { gCall } from '#test-utils/testUtils';

describe('getFuzzyItem', () => {
  describe('Name only requests', () => {
    test('GIVEN a valid name THEN returns Item', async () => {
      const { data } = await gCall<'getFuzzyItem'>({
        source: getFuzzyItemName,
        variableValues: { item: 'lifeorb' }
      });

      expect(data.getFuzzyItem).toEqual([{ name: 'Life Orb' }]);
    });
  });

  describe('Full data requests', () => {
    test('GIVEN valid item request THEN returns Item WITH all data', async () => {
      const { data } = await gCall<'getFuzzyItem'>({
        source: getFuzzyItemWithFullData,
        variableValues: { item: 'lifeorb' }
      });

      expect(data.getFuzzyItem).toEqual([
        {
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Life_Orb',
          desc: "Holder's attacks do 1.3x damage, and it loses 1/10 its max HP after the attack.",
          generationIntroduced: 4,
          isNonstandard: null,
          name: 'Life Orb',
          serebiiPage: 'https://www.serebii.net/itemdex/lifeorb.shtml',
          shortDesc: null,
          smogonPage: 'https://www.smogon.com/dex/ss/items/life-orb',
          sprite: 'https://play.pokemonshowdown.com/sprites/itemicons/life-orb.png'
        }
      ]);
    });

    test('GIVEN single letter item THEN returns multiple Items WITH all data', async () => {
      const { data } = await gCall<'getFuzzyItem'>({
        source: getFuzzyItemWithFullData,
        variableValues: { item: 'a', take: 3 }
      });

      expect(data.getFuzzyItem).toEqual([
        {
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Assault_Vest',
          desc: "Holder's Sp. Def is 1.5x, but it can only select damaging moves.",
          generationIntroduced: 6,
          isNonstandard: null,
          name: 'Assault Vest',
          serebiiPage: 'https://www.serebii.net/itemdex/assaultvest.shtml',
          shortDesc: null,
          smogonPage: 'https://www.smogon.com/dex/ss/items/assault-vest',
          sprite: 'https://play.pokemonshowdown.com/sprites/itemicons/assault-vest.png'
        },
        {
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Salac_Berry',
          desc: 'If held by a Salamence, this item allows it to Mega Evolve in battle.',
          generationIntroduced: 6,
          isNonstandard: null,
          name: 'Salac Berry',
          serebiiPage: 'https://www.serebii.net/itemdex/salacberry.shtml',
          shortDesc: null,
          smogonPage: 'https://www.smogon.com/dex/ss/items/salac-berry',
          sprite: 'https://play.pokemonshowdown.com/sprites/itemicons/salac-berry.png'
        },
        {
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Yache_Berry',
          desc: 'Halves damage taken from a supereffective Ice-type attack. Single use.',
          generationIntroduced: 4,
          isNonstandard: null,
          name: 'Yache Berry',
          serebiiPage: 'https://www.serebii.net/itemdex/yacheberry.shtml',
          shortDesc: null,
          smogonPage: 'https://www.smogon.com/dex/ss/items/yache-berry',
          sprite: 'https://play.pokemonshowdown.com/sprites/itemicons/yache-berry.png'
        }
      ]);
    });

    test('GIVEN single letter item AND reverse:true THEN returns multiple Items WITH all data', async () => {
      const { data } = await gCall<'getFuzzyItem'>({
        source: getFuzzyItemWithFullData,
        variableValues: { item: 'a', take: 3, reverse: true }
      });

      expect(data.getFuzzyItem).toEqual([
        {
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Gold_Bottle_Cap',
          desc: "Used for Hyper Training. All of a Pokémon's stats are calculated with an IV of 31.",
          generationIntroduced: 7,
          isNonstandard: null,
          name: 'Gold Bottle Cap',
          serebiiPage: 'https://www.serebii.net/itemdex/goldbottlecap.shtml',
          shortDesc: null,
          smogonPage: 'https://www.smogon.com/dex/ss/items/gold-bottle-cap',
          sprite: 'https://play.pokemonshowdown.com/sprites/itemicons/gold-bottle-cap.png'
        },
        {
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Left_Poké_Ball',
          desc: "A Poké Ball with a Pokémon that lost its Trainer inside. It seems to be from Ula'ula Island.",
          generationIntroduced: 7,
          isNonstandard: null,
          name: 'Left Poké Ball',
          serebiiPage: 'https://www.serebii.net/itemdex/leftpokéball.shtml',
          shortDesc: null,
          smogonPage: null,
          sprite: 'https://www.serebii.net/itemdex/sprites/leftpokeball.png'
        },
        {
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Honor_Of_Kalos',
          desc: 'A precious symbol that is awarded only to an individual who has done great things for the Kalos region.',
          generationIntroduced: 6,
          isNonstandard: null,
          name: 'Honor of Kalos',
          serebiiPage: 'https://www.serebii.net/itemdex/honorofkalos.shtml',
          shortDesc: null,
          smogonPage: null,
          sprite: 'https://www.serebii.net/itemdex/sprites/honorofkalos.png'
        }
      ]);
    });
  });

  describe('Error Requests', () => {
    test('GIVEN an invalid item THEN returns error', async () => {
      const data = await gCall({
        source: getFuzzyItemName,
        variableValues: { item: 'totally_invalid_item' }
      });

      expect(data.errors).toHaveLength(1);
      expect(data.errors[0].message).toBe('No items found for: totally_invalid_item');
    });
  });
});
