import { getAbilityName, getAbilityWithFullData } from '#test-utils/queries/abilities';
import { executeGraphQL } from '#test-utils/testUtils';

describe('getAbility', () => {
  describe('Regular Ability name only requests', () => {
    test('GIVEN a valid name THEN returns Ability', async () => {
      const { data } = await executeGraphQL<'getAbility'>({
        query: getAbilityName,
        variables: { ability: 'multiscale' }
      });

      expect(data.getAbility.name).toEqual('Multiscale');
    });
  });

  describe('Regular Ability full data requests', () => {
    test('GIVEN valid ability request THEN returns Ability WITH all data', async () => {
      const { data } = await executeGraphQL<'getAbility'>({
        query: getAbilityWithFullData,
        variables: { ability: 'multiscale' }
      });

      expect(data.getAbility).toEqual({
        desc: null,
        isFieldAbility: null,
        isNonstandard: null,
        name: 'Multiscale',
        shortDesc: 'If this Pokémon is at full HP, damage taken from attacks is halved.',
        serebiiPage: 'https://www.serebii.net/abilitydex/multiscale.shtml',
        smogonPage: 'https://www.smogon.com/dex/ss/abilities/multiscale',
        bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Multiscale_(Ability)',
        key: 'multiscale',
        pokemonThatHaveThisAbility: [
          {
            key: 'cresceidon',
            species: 'cresceidon',
            abilities: {
              first: {
                key: 'multiscale',
                bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Multiscale_(Ability)',
                desc: null,
                isFieldAbility: null,
                isNonstandard: null,
                name: 'Multiscale',
                serebiiPage: 'https://www.serebii.net/abilitydex/multiscale.shtml',
                shortDesc: 'If this Pokémon is at full HP, damage taken from attacks is halved.',
                smogonPage: 'https://www.smogon.com/dex/ss/abilities/multiscale'
              },
              hidden: null,
              second: {
                key: 'roughskin',
                bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Rough_Skin_(Ability)',
                desc: 'Pokémon making contact with this Pokémon lose 1/8 of their maximum HP, rounded down.',
                isFieldAbility: null,
                isNonstandard: null,
                name: 'Rough Skin',
                serebiiPage: 'https://www.serebii.net/abilitydex/rough_skin.shtml',
                shortDesc: 'Pokémon making contact with this Pokémon lose 1/8 of their max HP.',
                smogonPage: 'https://www.smogon.com/dex/ss/abilities/rough_skin'
              },
              special: null
            }
          },
          {
            key: 'dragonite',
            species: 'dragonite',
            abilities: {
              first: {
                key: 'innerfocus',
                bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Inner_Focus_(Ability)',
                desc: 'This Pokémon cannot be made to flinch. This Pokémon is immune to the effect of the Intimidate Ability.',
                isFieldAbility: null,
                isNonstandard: null,
                name: 'Inner Focus',
                serebiiPage: 'https://www.serebii.net/abilitydex/inner_focus.shtml',
                shortDesc: 'This Pokémon cannot be made to flinch. Immune to Intimidate.',
                smogonPage: 'https://www.smogon.com/dex/ss/abilities/inner_focus'
              },
              hidden: {
                key: 'multiscale',
                bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Multiscale_(Ability)',
                desc: null,
                isFieldAbility: null,
                isNonstandard: null,
                name: 'Multiscale',
                serebiiPage: 'https://www.serebii.net/abilitydex/multiscale.shtml',
                shortDesc: 'If this Pokémon is at full HP, damage taken from attacks is halved.',
                smogonPage: 'https://www.smogon.com/dex/ss/abilities/multiscale'
              },
              second: null,
              special: null
            }
          },
          {
            key: 'lugia',
            species: 'lugia',
            abilities: {
              first: {
                key: 'pressure',
                bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Pressure_(Ability)',
                desc: "If this Pokémon is the target of an opposing Pokémon's move, that move loses one additional PP. Imprison, Snatch, and Tera Blast also lose one additional PP when used by an opposing Pokémon, but Sticky Web does not.",
                isFieldAbility:
                  'If you have a Pokémon with Pressure at the front of your party (even if fainted), there is a 50% chance that a Pokémon will be forced to the upper bound of their encounter level range.',
                isNonstandard: null,
                name: 'Pressure',
                serebiiPage: 'https://www.serebii.net/abilitydex/pressure.shtml',
                shortDesc: "If this Pokémon is the target of a foe's move, that move loses one additional PP.",
                smogonPage: 'https://www.smogon.com/dex/ss/abilities/pressure'
              },
              hidden: {
                key: 'multiscale',
                bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Multiscale_(Ability)',
                desc: null,
                isFieldAbility: null,
                isNonstandard: null,
                name: 'Multiscale',
                serebiiPage: 'https://www.serebii.net/abilitydex/multiscale.shtml',
                shortDesc: 'If this Pokémon is at full HP, damage taken from attacks is halved.',
                smogonPage: 'https://www.smogon.com/dex/ss/abilities/multiscale'
              },
              second: null,
              special: null
            }
          }
        ]
      });
    });
  });

  describe('Error Requests', () => {
    test('GIVEN an invalid ability THEN returns error', async () => {
      const data = await executeGraphQL({
        query: getAbilityName,
        variables: { ability: 'totally_invalid_ability' }
      });

      expect(data.errors).toHaveLength(1);
      expect(data.errors?.[0].message).toBe(
        'Variable "$ability" got invalid value "totally_invalid_ability"; Value "totally_invalid_ability" does not exist in "AbilitiesEnum" enum.'
      );
    });
  });
});
