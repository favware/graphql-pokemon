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
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Choice_Band',
          desc: "Holder's Attack is 1.5x, but it can only select the first move it executes.",
          generationIntroduced: 3,
          isNonstandard: null,
          name: 'Choice Band',
          serebiiPage: 'https://www.serebii.net/itemdex/choiceband.shtml',
          shortDesc: null,
          smogonPage: 'https://www.smogon.com/dex/ss/items/choice-band',
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
          smogonPage: 'https://www.smogon.com/dex/ss/items/focus-sash',
          sprite: 'https://play.pokemonshowdown.com/sprites/itemicons/focus-sash.png'
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
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Ilima_s_Normalium_Z',
          desc: 'The Normalium Z you were entrusted with by Ilima. You were asked to place it on the pedestal at the back of Verdant Cavern.',
          generationIntroduced: 7,
          isNonstandard: null,
          name: "Ilima's Normalium Z",
          serebiiPage: 'https://www.serebii.net/itemdex/ilimasnormaliumz.shtml',
          shortDesc: null,
          smogonPage: null,
          sprite: "https://www.serebii.net/itemdex/sprites/ilima'snormaliumz.png"
        },
        {
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Ultranecrozium_Z',
          desc: 'Dusk Mane/Dawn Wings Necrozma: Ultra Burst, then Z-Move w/ Photon Geyser.',
          generationIntroduced: 7,
          isNonstandard: 'Past',
          name: 'Ultranecrozium Z',
          serebiiPage: 'https://www.serebii.net/itemdex/ultranecroziumz.shtml',
          shortDesc: null,
          smogonPage: 'https://www.smogon.com/dex/ss/items/ultranecrozium-z',
          sprite: 'https://play.pokemonshowdown.com/sprites/itemicons/ultranecrozium-z.png'
        },
        {
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Terrain_Extender',
          desc: "Holder's use of Electric/Grassy/Misty/Psychic Terrain lasts 8 turns instead of 5.",
          generationIntroduced: 7,
          isNonstandard: null,
          name: 'Terrain Extender',
          serebiiPage: 'https://www.serebii.net/itemdex/terrainextender.shtml',
          shortDesc: null,
          smogonPage: 'https://www.smogon.com/dex/ss/items/terrain-extender',
          sprite: 'https://play.pokemonshowdown.com/sprites/itemicons/terrain-extender.png'
        }
      ]);
    });
  });
});
