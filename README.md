<div align="center">

[<img height="200" src="https://cdn.favware.tech/img/gqlp.png" alt="ArchAngel"/>][dashboard]

# [`GraphQL-Pokemon`][dashboard]

**Extensive Pokémon GraphQL API!**

[![GitHub](https://img.shields.io/github/license/favware/graphql-pokemon)](https://github.com/favware/graphql-pokemon/blob/main/LICENSE)

[![npm](https://img.shields.io/npm/v/@favware/graphql-pokemon?color=crimson&label=TypeScript%20API%20Typings%20Version&logo=npm)](https://www.npmjs.com/package/@favware/graphql-pokemon)

[![Support Server](https://discord.com/api/guilds/512303595966824458/embed.png?style=banner2)](https://join.favware.tech)

</div>

---

**Table of Contents**

- [GraphQL-Pokemon](#graphql-pokemon)
  - [About](#about)
  - [Key Features](#key-features)
  - [Installation](#installation)
  - [API Documentation](#api-documentation)
  - [Usage](#usage)
    - [Using `Fetch`](#using-fetch)
    - [Using `Apollo Boost`](#using-apollo-boost)
    - [Using `Apollo Client React`](#using-apollo-client-react)
  - [Meta](#meta)
    - [License](#license)
    - [Buy us some doughnuts](#buy-us-some-doughnuts)
    - [Contributors ✨](#contributors-)

---

## About

[GraphQL-Pokemon][dashboard] is a GraphQL API that provides extensive Pokémon
data. Unlike contemporary APIs this API focusses on speed, accuracy and data
quality. New game data is added within relatively short time after release, and
Smogon tier data is automatically updated after tier shifts. Data used for this
API is pulled from the [Pokemon Showdown GitHub][showdown-github], [Serebii],
and [Bulbapedia].

## Key Features

- Fully generated client-side TypeScript typings published to
  - [npm] as `@favware/graphql-pokemon`
  - [GitHub Package Registry][ghcr_npm] as `@favware/graphql-pokemon`
- Docker images of the API for private hosting published to
  - [Dockerhub] as `favware/graphql-pokemon`
  - [GitHub Package Registry][ghcr_docker] as
    `ghcr.io/favware/graphql-pokemon:latest`
- Provides information about various assets in Pokémon
  - Pokédex
  - Items
  - Abilities
  - Moves
  - Learnsets
  - Type matchups

## Installation

**_Note: This is only needed if you are writing TypeScript, or if you're using a
GraphQL schema validator. If you're using neither of these, you do not need to
install this package. The package does NOT include the actual API, ONLY type
information._**

Install client side typings from [yarn] or [npm]:

```sh
yarn add -D @favware/graphql-pokemon
```

```sh
npm install -D @favware/graphql-pokemon
```

## API Documentation

For the full documentation of the deployed version please see [the GraphQL
Playground on the API][dashboard].

## Usage

_These examples are written as based on TypeScript. For JavaScript simply change
out the imports to `require` syntax and remove any type information._

### Using `Fetch`

_note: for a working example see [dragonite]_

```ts
import type { Query } from '@favware/graphql-pokemon';

interface GraphQLPokemonResponse<K extends keyof Omit<Query, '__typename'>> {
  data: Record<K, Omit<Query[K], '__typename'>>;
}

fetch('https://graphqlpokemon.favware.tech/v7', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: `
      {
        getPokemon(pokemon: dragonite) {
            sprite
            num
            species
            color
        }
      }
    `
  })
})
  .then((res) => res.json() as Promise<GraphQLPokemonResponse<'getPokemon'>>)
  .then((json) => console.log(json.data));
```

### Using `Apollo Boost`

_note: for a working example see [dexa]_

```ts
import type { Query, QueryGetFuzzyPokemonArgs } from '@favware/graphql-pokemon';
import ApolloClient from 'apollo-boost';
import fetch from 'cross-fetch';
import gql from 'graphql-tag';

type GraphQLPokemonResponse<K extends keyof Omit<Query, '__typename'>> = Record<
  K,
  Omit<Query[K], '__typename'>
>;

const getFuzzyPokemon = gql`
  query getFuzzyPokemon($pokemon: String!) {
    getFuzzyPokemon(pokemon: $pokemon) {
      sprite
      num
      species
      color
    }
  }
`;

const apolloClient = new ApolloClient({
  uri: 'https://graphqlpokemon.favware.tech/v7',
  fetch
});

const {
  data: { getFuzzyPokemon: pokemonData }
} = await apolloClient.query<
  GraphQLPokemonResponse<'getFuzzyPokemon'>,
  QueryGetFuzzyPokemonArgs
>({
  query: getFuzzyPokemon,
  variables: { pokemon: 'dragonite' }
});

console.log(pokemonData);
```

### Using `Apollo Client React`

```ts
// ApolloClient setup
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

// Instantiate required constructor fields
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://graphqlpokemon.favware.tech/v7'
});

export const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: link,

  // Provide some optional constructor fields
  name: 'graphql-pokemon-client',
  version: '1.0',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network'
    }
  }
});
```

```tsx
// Component
import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import type { Query } from '@favware/graphql-pokemon';
import { client } from './ApolloClient';

interface GraphQLPokemonResponse<K extends keyof Omit<Query, '__typename'>> {
  data: Record<K, Omit<Query[K], '__typename'>>;
}

const GET_POKEMON_DETAILS = gql`
  {
    getPokemon(pokemon: dragonite) {
      sprite
      num
      species
      color
    }
  }
`;

export const Pokemon: React.FC = () => {
  const { loading, error, data } = useQuery<
    GraphQLPokemonResponse<'getPokemon'>
  >(GET_POKEMON_DETAILS, {
    client: client
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return <div> Insert how you want to display the data here </div>;
};
```

## Meta

### License

Copyright © 2019, [Favware](https://github.com/favware). Released under the
[MIT License](LICENSE.md).

### Buy us some doughnuts

Favware projects is and always will be open source, even if we don't get
donations. That being said, we know there are amazing people who may still want
to donate just to show their appreciation. Thank you very much in advance!

We accept donations through Ko-fi, Paypal, Patreon, GitHub Sponsorships, and
various crypto currencies. You can use the buttons below to donate through your
method of choice.

|   Donate With   |                      Address                      |
| :-------------: | :-----------------------------------------------: |
|      Ko-fi      |  [Click Here](https://donate.favware.tech/kofi)   |
|     Patreon     | [Click Here](https://donate.favware.tech/patreon) |
|     PayPal      | [Click Here](https://donate.favware.tech/paypal)  |
| GitHub Sponsors |  [Click Here](https://github.com/sponsors/Favna)  |
|     Bitcoin     |       `1E643TNif2MTh75rugepmXuq35Tck4TnE5`        |
|    Ethereum     |   `0xF653F666903cd8739030D2721bF01095896F5D6E`    |
|    LiteCoin     |       `LZHvBkaJqKJRa8N7Dyu41Jd1PDBAofCik6`        |

### Contributors ✨

Thanks goes to these wonderful people
([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://favware.tech/"><img src="https://avatars3.githubusercontent.com/u/4019718?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jeroen Claassens</b></sub></a><br /><a href="https://github.com/favware/graphql-pokemon/issues?q=author%3Afavna" title="Bug reports">🐛</a> <a href="https://github.com/favware/graphql-pokemon/commits?author=favna" title="Code">💻</a> <a href="#design-favna" title="Design">🎨</a> <a href="#example-favna" title="Examples">💡</a> <a href="#ideas-favna" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-favna" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-favna" title="Maintenance">🚧</a> <a href="#platform-favna" title="Packaging/porting to new platform">📦</a> <a href="#projectManagement-favna" title="Project Management">📆</a> <a href="https://github.com/favware/graphql-pokemon/pulls?q=is%3Apr+reviewed-by%3Afavna" title="Reviewed Pull Requests">👀</a> <a href="#question-favna" title="Answering Questions">💬</a> <a href="#security-favna" title="Security">🛡️</a> <a href="https://github.com/favware/graphql-pokemon/commits?author=favna" title="Tests">⚠️</a> <a href="#userTesting-favna" title="User Testing">📓</a></td>
    <td align="center"><a href="https://favware.tech/"><img src="https://avatars1.githubusercontent.com/u/57236085?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Favware Bot</b></sub></a><br /><a href="https://github.com/favware/graphql-pokemon/commits?author=Favware-bot" title="Code">💻</a> <a href="#maintenance-Favware-bot" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://imgbot.net/"><img src="https://avatars1.githubusercontent.com/u/31427850?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Imgbot</b></sub></a><br /><a href="#maintenance-ImgBotApp" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/apps/dependabot-preview"><img src="https://avatars3.githubusercontent.com/in/2141?v=4?s=100" width="100px;" alt=""/><br /><sub><b>dependabot-preview[bot]</b></sub></a><br /><a href="#maintenance-dependabot-preview[bot]" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/apps/depfu"><img src="https://avatars3.githubusercontent.com/in/715?v=4?s=100" width="100px;" alt=""/><br /><sub><b>depfu[bot]</b></sub></a><br /><a href="#maintenance-depfu[bot]" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/KunoichiZ"><img src="https://avatars1.githubusercontent.com/u/19984244?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kaoru</b></sub></a><br /><a href="https://github.com/favware/graphql-pokemon/commits?author=KunoichiZ" title="Code">💻</a> <a href="#maintenance-KunoichiZ" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/mudkipscience"><img src="https://avatars1.githubusercontent.com/u/37792540?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Emily</b></sub></a><br /><a href="https://github.com/favware/graphql-pokemon/commits?author=mudkipscience" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/Rexogamer"><img src="https://avatars.githubusercontent.com/u/42586271?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ed L</b></sub></a><br /><a href="https://github.com/favware/graphql-pokemon/commits?author=Rexogamer" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/nandhagk"><img src="https://avatars.githubusercontent.com/u/62976649?v=4?s=100" width="100px;" alt=""/><br /><sub><b>nandhagk</b></sub></a><br /><a href="https://github.com/favware/graphql-pokemon/commits?author=nandhagk" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/apps/dependabot"><img src="https://avatars.githubusercontent.com/in/29110?v=4?s=100" width="100px;" alt=""/><br /><sub><b>dependabot[bot]</b></sub></a><br /><a href="#maintenance-dependabot[bot]" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/apps/github-actions"><img src="https://avatars.githubusercontent.com/in/15368?v=4?s=100" width="100px;" alt=""/><br /><sub><b>github-actions[bot]</b></sub></a><br /><a href="#maintenance-github-actions[bot]" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/apps/allcontributors"><img src="https://avatars.githubusercontent.com/in/23186?v=4?s=100" width="100px;" alt=""/><br /><sub><b>allcontributors[bot]</b></sub></a><br /><a href="https://github.com/favware/graphql-pokemon/commits?author=allcontributors[bot]" title="Documentation">📖</a></td>
    <td align="center"><a href="https://kaname.netlify.app"><img src="https://avatars.githubusercontent.com/u/56084970?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kaname</b></sub></a><br /><a href="https://github.com/favware/graphql-pokemon/commits?author=kaname-png" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://renovate.whitesourcesoftware.com/"><img src="https://avatars.githubusercontent.com/u/25180681?v=4?s=100" width="100px;" alt=""/><br /><sub><b>WhiteSource Renovate</b></sub></a><br /><a href="#maintenance-renovate-bot" title="Maintenance">🚧</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/apps/renovate"><img src="https://avatars.githubusercontent.com/in/2740?v=4?s=100" width="100px;" alt=""/><br /><sub><b>renovate[bot]</b></sub></a><br /><a href="#maintenance-renovate[bot]" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!

<!-- LINK DUMP -->

[dashboard]: https://graphqlpokemon.favware.tech/v7
[yarn]: https://yarnpkg.com/package/@favware/graphql-pokemon
[npm]: https://www.npmjs.com/package/@favware/graphql-pokemon
[ghcr_npm]: https://github.com/favware/graphql-pokemon/packages/199047
[ghcr_docker]:
  https://github.com/orgs/favware/packages/container/package/graphql-pokemon
[dockerhub]: https://hub.docker.com/r/favware/graphql-pokemon
[dexa]: https://github.com/favware/dexa
[dragonite]: https://github.com/favware/dragonite
[showdown-github]: https://github.com/smogon/pokemon-showdown/
[serebii]: https://www.serebii.net/
[bulbapedia]: https://bulbapedia.bulbagarden.net/wiki/Main_Page
