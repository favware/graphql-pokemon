import { getFuzzyItemName, getFuzzyItemWithFullData } from '#test-utils/queries/items';
import { executeGraphQL } from '#test-utils/testUtils';

describe('getFuzzyItem', () => {
  describe('Fuzzy Item name only requests', () => {
    test('GIVEN a valid name THEN returns Item', async () => {
      const { data } = await executeGraphQL<'getFuzzyItem'>({
        query: getFuzzyItemName,
        variables: { item: 'lifeorb' }
      });

      expect(data.getFuzzyItem).toEqual([{ name: 'Life Orb' }]);
    });
  });

  describe('Fuzzy Item full data requests', () => {
    test('GIVEN valid item request THEN returns Item WITH all data', async () => {
      const { data } = await executeGraphQL<'getFuzzyItem'>({
        query: getFuzzyItemWithFullData,
        variables: { item: 'lifeorb' }
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
          smogonPage: 'https://www.smogon.com/dex/sv/items/life-orb',
          sprite: 'https://play.pokemonshowdown.com/sprites/itemicons/life-orb.png'
        }
      ]);
    });

    test('GIVEN single letter item THEN returns multiple Items WITH all data', async () => {
      const { data } = await executeGraphQL<'getFuzzyItem'>({
        query: getFuzzyItemWithFullData,
        variables: { item: 'a', take: 3 }
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
          smogonPage: 'https://www.smogon.com/dex/sv/items/assault-vest',
          sprite: 'https://play.pokemonshowdown.com/sprites/itemicons/assault-vest.png'
        },
        {
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Choice_Band',
          desc: "Holder's Attack is 1.5x, but it can only select the first move it executes.",
          generationIntroduced: 3,
          isNonstandard: null,
          name: 'Choice Band',
          serebiiPage: 'https://www.serebii.net/itemdex/choiceband.shtml',
          shortDesc: null,
          smogonPage: 'https://www.smogon.com/dex/sv/items/choice-band',
          sprite: 'https://play.pokemonshowdown.com/sprites/itemicons/choice-band.png'
        },
        {
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Focus_Sash',
          desc: "If holder's HP is full, will survive an attack that would KO it with 1 HP. Single use.",
          generationIntroduced: 4,
          isNonstandard: null,
          name: 'Focus Sash',
          serebiiPage: 'https://www.serebii.net/itemdex/focussash.shtml',
          shortDesc: null,
          smogonPage: 'https://www.smogon.com/dex/sv/items/focus-sash',
          sprite: 'https://play.pokemonshowdown.com/sprites/itemicons/focus-sash.png'
        }
      ]);
    });

    test('GIVEN single letter item AND reverse:true THEN returns multiple Items WITH all data', async () => {
      const { data } = await executeGraphQL<'getFuzzyItem'>({
        query: getFuzzyItemWithFullData,
        variables: { item: 'a', take: 3, reverse: true }
      });

      expect(data.getFuzzyItem).toEqual([
        {
          bulbapediaPage: "https://bulbapedia.bulbagarden.net/wiki/Miraidon's_Poké_Ball",
          desc: 'A Poké Ball that can hold the mysterious Pokémon known as Miraidon. A boy named Arven gave it to you.',
          generationIntroduced: 9,
          isNonstandard: null,
          name: "Miraidon's Poké Ball",
          serebiiPage: 'https://www.serebii.net/itemdex/miraidonspokeball.shtml',
          shortDesc: null,
          smogonPage: 'https://www.smogon.com/dex/sv/items/miraidon-s-poké-ball',
          sprite: "https://www.serebii.net/itemdex/sprites/miraidon'spokeball.png"
        },
        {
          bulbapediaPage: "https://bulbapedia.bulbagarden.net/wiki/Koraidon's_Poké_Ball",
          desc: 'A Poké Ball that can hold the mysterious Pokémon known as Koraidon. A boy named Arven gave it to you.',
          generationIntroduced: 9,
          isNonstandard: null,
          name: "Koraidon's Poké Ball",
          serebiiPage: 'https://www.serebii.net/itemdex/koraidonspokeball.shtml',
          shortDesc: null,
          smogonPage: 'https://www.smogon.com/dex/sv/items/koraidon-s-poké-ball',
          sprite: "https://www.serebii.net/itemdex/sprites/koraidon'spokeball.png"
        },
        {
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Unremarkable_Teacup',
          desc: 'Evolves Poltchageist into Sinistcha when used.',
          generationIntroduced: 9,
          isNonstandard: null,
          name: 'Unremarkable Teacup',
          serebiiPage: 'https://www.serebii.net/itemdex/unremarkableteacup.shtml',
          shortDesc: null,
          smogonPage: 'https://www.smogon.com/dex/sv/items/unremarkable-teacup',
          sprite: 'https://play.pokemonshowdown.com/sprites/itemicons/unremarkable-teacup.png'
        }
      ]);
    });
  });
});
