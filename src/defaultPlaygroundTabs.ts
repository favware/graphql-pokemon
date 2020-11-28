import type { MiddlewareOptions } from '@apollographql/graphql-playground-html';

const isDev = process.platform === 'win32' || process.platform === 'darwin';

const defaultTabs: NonNullable<MiddlewareOptions['tabs']> = [
  {
    name: 'Get Pokemon Details simple',
    endpoint: isDev ? `http://localhost:${process.env.PORT || 4000}` : 'https://graphqlpokemon.favware.tech/',
    query: [
      '{',
      '  getPokemonDetailsByName(pokemon: dragonite reverse: true take: 1) {',
      '    num',
      '    species',
      '    types',
      '    abilities { first second hidden }',
      '    baseStats { hp attack defense specialattack specialdefense speed }',
      '    gender { male female }',
      '    height',
      '    weight',
      '    flavorTexts { game flavor }',
      '    sprite',
      '    shinySprite',
      '    smogonTier',
      '    smogonPage',
      '    serebiiPage',
      '    bulbapediaPage',
      '  }',
      '}'
    ].join('\n')
  },
  {
    name: 'Pokemon Details with variables',
    endpoint: isDev ? `http://localhost:${process.env.PORT || 4000}` : 'https://graphqlpokemon.favware.tech/',
    variables: ['{', '  "pokemon": "mewtwo"', '}'].join('\n'),
    query: [
      'query($pokemon: Pokemon!) {',
      '  getPokemonDetailsByName(pokemon:$pokemon reverse: true, take:1) {',
      '    num',
      '    species',
      '    types',
      '    abilities { first second hidden }',
      '    baseStats { hp attack defense specialattack specialdefense speed }',
      '    gender { male female }',
      '    height',
      '    weight',
      '    flavorTexts { game flavor }',
      '    sprite',
      '    shinySprite',
      '    smogonTier',
      '    smogonPage',
      '    serebiiPage',
      '    bulbapediaPage',
      '  }',
      '}'
    ].join('\n')
  },
  {
    name: 'Pokemon Details with fragments and variables',
    endpoint: isDev ? `http://localhost:${process.env.PORT || 4000}` : 'https://graphqlpokemon.favware.tech/',
    variables: ['{', '  "pokemon": "arceus",', '  "reverse": true,', '  "take": 1', '}'].join('\n'),
    query: [
      'fragment data on DexDetails {',
      '    num',
      '    species',
      '    types',
      '    abilities { first second hidden }',
      '    baseStats { hp attack defense specialattack specialdefense speed }',
      '    gender { male female }',
      '    height',
      '    weight',
      '    flavorTexts { game flavor }',
      '    sprite',
      '    shinySprite',
      '    smogonTier',
      '    smogonPage',
      '    serebiiPage',
      '    bulbapediaPage',
      '}',
      '',
      'query($pokemon: Pokemon! $reverse: Boolean! $take: Int!) {',
      '    getPokemonDetailsByName(pokemon:$pokemon reverse: $reverse, take: $take) {',
      '        ...data',
      '    }',
      '}'
    ].join('\n')
  }
];

export default defaultTabs;
