import { getFuzzyAbilityName, getFuzzyAbilityWithFullData } from '#test-utils/queries/abilities';
import { executeGraphQL } from '#test-utils/testUtils';

describe('getFuzzyAbility', () => {
  describe('Fuzzy Ability name only requests', () => {
    test('GIVEN a valid fuzzy name THEN returns Ability', async () => {
      const { data } = await executeGraphQL<'getFuzzyAbility'>({
        query: getFuzzyAbilityName,
        variables: { ability: 'multiscale' }
      });

      expect(data.getFuzzyAbility).toEqual([
        {
          name: 'Multiscale'
        }
      ]);
    });
  });

  describe('Fuzzy Ability full data requests', () => {
    test('GIVEN valid fuzzy ability request THEN returns Ability WITH all data', async () => {
      const { data } = await executeGraphQL<'getFuzzyAbility'>({
        query: getFuzzyAbilityWithFullData,
        variables: { ability: 'multiscale' }
      });

      expect(data.getFuzzyAbility).toEqual([
        {
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Multiscale_(Ability)',
          desc: null,
          isFieldAbility: null,
          isNonstandard: null,
          name: 'Multiscale',
          serebiiPage: 'https://www.serebii.net/abilitydex/multiscale.shtml',
          shortDesc: 'If this Pokémon is at full HP, damage taken from attacks is halved.',
          smogonPage: 'https://www.smogon.com/dex/ss/abilities/multiscale'
        }
      ]);
    });

    test('GIVEN single letter ability THEN returns multiple Abilities WITH all data', async () => {
      const { data } = await executeGraphQL<'getFuzzyAbility'>({
        query: getFuzzyAbilityWithFullData,
        variables: { ability: 'a', take: 3 }
      });

      expect(data.getFuzzyAbility).toEqual([
        {
          desc: 'While this Pokémon is active, Explosion, Mind Blown, Misty Explosion, Self-Destruct, and the Aftermath Ability are prevented from having an effect.',
          isFieldAbility: null,
          isNonstandard: null,
          name: 'Damp',
          shortDesc: 'Prevents Explosion/Mind Blown/Misty Explosion/Self-Destruct/Aftermath while active.',
          serebiiPage: 'https://www.serebii.net/abilitydex/damp.shtml',
          smogonPage: 'https://www.smogon.com/dex/ss/abilities/damp',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Damp_(Ability)'
        },
        {
          desc: 'Prevents opposing Pokémon from choosing to switch out, unless they are holding a Shed Shell, are a Ghost type, or also have this Ability.',
          isFieldAbility: null,
          isNonstandard: null,
          name: 'Shadow Tag',
          shortDesc: 'Prevents foes from choosing to switch unless they also have this Ability.',
          serebiiPage: 'https://www.serebii.net/abilitydex/shadow_tag.shtml',
          smogonPage: 'https://www.smogon.com/dex/ss/abilities/shadow_tag',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Shadow_Tag_(Ability)'
        },
        {
          desc: "This Pokémon's Normal-type moves become Flying-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
          isFieldAbility: null,
          isNonstandard: null,
          name: 'Aerilate',
          shortDesc: "This Pokémon's Normal-type moves become Flying type and have 1.2x power.",
          serebiiPage: 'https://www.serebii.net/abilitydex/aerilate.shtml',
          smogonPage: 'https://www.smogon.com/dex/ss/abilities/aerilate',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Aerilate_(Ability)'
        }
      ]);
    });

    test('GIVEN single letter ability AND reverse:true THEN returns multiple Abilities WITH all data', async () => {
      const { data } = await executeGraphQL<'getFuzzyAbility'>({
        query: getFuzzyAbilityWithFullData,
        variables: { ability: 'a', take: 3, reverse: true }
      });

      expect(data.getFuzzyAbility).toEqual([
        {
          desc: null,
          isFieldAbility: null,
          isNonstandard: null,
          name: 'Embody Aspect (Hearthflame)',
          shortDesc: "On switch-in, this Pokémon's Attack is raised by 1 stage.",
          serebiiPage: 'https://www.serebii.net/abilitydex/embody_aspect_(hearthflame).shtml',
          smogonPage: 'https://www.smogon.com/dex/ss/abilities/embody_aspect_(hearthflame)',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Embody_Aspect_(Hearthflame)_(Ability)'
        },
        {
          desc: null,
          isFieldAbility: null,
          isNonstandard: null,
          name: 'Embody Aspect (Cornerstone)',
          shortDesc: "On switch-in, this Pokémon's Defense is raised by 1 stage.",
          serebiiPage: 'https://www.serebii.net/abilitydex/embody_aspect_(cornerstone).shtml',
          smogonPage: 'https://www.smogon.com/dex/ss/abilities/embody_aspect_(cornerstone)',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Embody_Aspect_(Cornerstone)_(Ability)'
        },
        {
          desc: null,
          isFieldAbility: null,
          isNonstandard: null,
          name: 'Embody Aspect (Wellspring)',
          shortDesc: "On switch-in, this Pokémon's Special Defense is raised by 1 stage.",
          serebiiPage: 'https://www.serebii.net/abilitydex/embody_aspect_(wellspring).shtml',
          smogonPage: 'https://www.smogon.com/dex/ss/abilities/embody_aspect_(wellspring)',
          bulbapediaPage: 'https://bulbapedia.bulbagarden.net/wiki/Embody_Aspect_(Wellspring)_(Ability)'
        }
      ]);
    });
  });
});
