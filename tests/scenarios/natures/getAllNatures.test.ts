import { getAllNatures } from '#test-utils/queries/natures';
import { executeGraphQL } from '#test-utils/testUtils';

describe('getAllNatures', () => {
  test('GIVEN no parameters THEN returns all Natures', async () => {
    const { data } = await executeGraphQL<'getAllNatures'>({
      query: getAllNatures
    });

    expect(data.getAllNatures).toEqual([
      {
        key: 'adamant',
        name: 'Adamant'
      },
      {
        key: 'bashful',
        name: 'Bashful'
      },
      {
        key: 'bold',
        name: 'Bold'
      },
      {
        key: 'brave',
        name: 'Brave'
      },
      {
        key: 'calm',
        name: 'Calm'
      },
      {
        key: 'careful',
        name: 'Careful'
      },
      {
        key: 'docile',
        name: 'Docile'
      },
      {
        key: 'gentle',
        name: 'Gentle'
      },
      {
        key: 'hardy',
        name: 'Hardy'
      },
      {
        key: 'hasty',
        name: 'Hasty'
      },
      {
        key: 'impish',
        name: 'Impish'
      },
      {
        key: 'jolly',
        name: 'Jolly'
      },
      {
        key: 'lax',
        name: 'Lax'
      },
      {
        key: 'lonely',
        name: 'Lonely'
      },
      {
        key: 'mild',
        name: 'Mild'
      },
      {
        key: 'modest',
        name: 'Modest'
      },
      {
        key: 'naive',
        name: 'Naive'
      },
      {
        key: 'naughty',
        name: 'Naughty'
      },
      {
        key: 'quiet',
        name: 'Quiet'
      },
      {
        key: 'quirky',
        name: 'Quirky'
      },
      {
        key: 'rash',
        name: 'Rash'
      },
      {
        key: 'relaxed',
        name: 'Relaxed'
      },
      {
        key: 'sassy',
        name: 'Sassy'
      },
      {
        key: 'serious',
        name: 'Serious'
      },
      {
        key: 'timid',
        name: 'Timid'
      }
    ]);
  });
});
