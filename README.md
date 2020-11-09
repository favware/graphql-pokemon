<div align="center">
  <p>
  <a href="https://graphqlpokemon.favware.tech/"><img style="height: 200px" src="https://cdn.favware.tech/img/gqlp.png" height="200" alt="logo"/></a>
  </p>

  <p>
<h1> GraphQL-Pokemon </h1>
<h3> Extensive Pokémon GraphQL API!</h3>
  </p>

</div>

---

**Table of Contents**

- [Installation](#installation)
- [API Documentation](#api-documentation)
- [Usage](#usage)
  - [Using `Fetch`](#using-fetch)
  - [Using `Apollo Boost`](#using-apollo-boost)
  - [Using `Apollo Client React`](#using-apollo-client-react)
- [Meta](#meta)
  - [License](#license)
  - [Buy us a donut](#buy-us-a-donut)
  - [Contributors ✨](#contributors-%E2%9C%A8)

---

**Project Status**

[![GitHub](https://img.shields.io/github/license/favware/graphql-pokemon?logo=github&style=flat-square)](https://github.com/favware/graphql-pokemon/blob/main/LICENSE.md)
[![Continuous Deployment](https://github.com/favware/graphql-pokemon/workflows/Continuous%20Deployment/badge.svg)](https://github.com/favware/graphql-pokemon/actions?query=workflow%3A"Continuous+Deployment")
[![Continuous Integration](https://github.com/favware/graphql-pokemon/workflows/Continuous%20Integration/badge.svg)](https://github.com/favware/graphql-pokemon/actions?query=workflow%3A"Continuous+Integration")
[![Automatic Data Update](https://github.com/favware/graphql-pokemon/workflows/Automatic%20Data%20Update/badge.svg)](https://github.com/favware/graphql-pokemon/actions?query=workflow%3A"Automatic+Data+Update")

**Social Media and Donations**

[![Join Discord server](https://img.shields.io/discord/512303595966824458?color=697EC4&label=Join%20Discord%20Server&logo=discord&logoColor=FDFEFE&style=flat-square)](https://join.favware.tech)
[![Twitter Follow](https://img.shields.io/twitter/follow/favna_?label=Follow%20@Favna_&logo=twitter&colorB=1DA1F2&style=flat-square)](https://twitter.com/Favna_/follow)
[![Patreon Donate](https://img.shields.io/badge/patreon-donate-brightgreen.svg?label=Donate%20with%20Patreon&logo=patreon&colorB=F96854&style=flat-square&link=https://donate.favware.tech/patreon)](https://donate.favware.tech/patreon)
[![PayPal Donate](https://img.shields.io/badge/paypal-donate-brightgreen.svg?label=Donate%20with%20Paypal&logo=paypal&colorB=00457C&style=flat-square&link=https://donate.favware.tech/paypal)](https://donate.favware.tech/paypal)

**Typings**

[![npm](https://img.shields.io/npm/v/@favware/graphql-pokemon?color=crimson&label=TypeScript%20version&logo=npm&style=flat-square)](https://www.npmjs.com/package/@favware/graphql-pokemon)

---

**_Query for Pokémon data using GraphQL_**

**Key Features**

- Fully generated client-side TypeScript typings published to
  - [npm] as `@favware/graphql-pokemon`
  - [GitHub Package Registry] as `@favware/graphql-pokemon`
- Docker images of the API for private hosting published to
  - [Dockerhub] as `favware/graphql-pokemon`
  - [GitHub Package Registry] as `docker.pkg.github.com/favware/graphql-pokemon/graphql-pokemon`
- Provides information about various assets in Pokémon
  - Pokédex
  - Items
  - Abilities
  - Moves
  - Learnsets
  - Type matchups

# Installation

**_Note: This is only needed if you are writing TypeScript, or if you're using a GraphQL schema validator. If you're using neither of these, you do not need to install this package. The package does NOT include the actual API, ONLY type information._**

Install client side typings from [yarn] or [npm]:

```sh
yarn add -D @favware/graphql-pokemon
```

```sh
npm install -D @favware/graphql-pokemon
```

---

# API Documentation

For the full documentation of the deployed version please see [the GraphQL Playground on the API].

# Usage

_These examples are written as based on TypeScript. For JavaScript simply change out the imports to `require` syntax and remove any type information._

## Using `Fetch`

```ts
import type { Query } from '@favware/graphql-pokemon';

interface GraphQLPokemonResponse<K extends keyof Omit<Query, '__typename'>> {
  data: Record<K, Omit<Query[K], '__typename'>>;
}

fetch('https://graphqlpokemon.favware.tech/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: `
      {
        getPokemonDetails(pokemon: dragonite skip: 0 take: 2 reverse: true) {
            sprite
            num
            species
            color
        }
      }
    `
  })
})
  .then((res) => res.json() as Promise<GraphQLPokemonResponse<'getPokemonDetails'>>)
  .then((json) => console.log(json.data));
```

## Using `Apollo Boost`

_note: for a working example see [dexa]_

```ts
import type { Query, QueryGetPokemonDetailsByFuzzyArgs } from '@favware/graphql-pokemon';
import ApolloClient from 'apollo-boost';
import fetch from 'cross-fetch';
import gql from 'graphql-tag';

type GraphQLPokemonResponse<K extends keyof Omit<Query, '__typename'>> = Record<K, Omit<Query[K], '__typename'>>;

const getPokemonDetailsByFuzzy = gql`
  query pokemonDetails($pokemon: String!) {
    getPokemonDetailsByFuzzy(pokemon: $pokemon, skip: 0, take: 1, reverse: true) {
      sprite
      num
      species
      color
    }
  }
`;

const apolloClient = new ApolloClient({
  uri: 'https://graphqlpokemon.favware.tech/',
  fetch
});

const {
  data: { getPokemonDetailsByFuzzy: pokemonData }
} = await apolloClient.query<GraphQLPokemonResponse<'getPokemonDetailsByFuzzy'>, QueryGetPokemonDetailsByFuzzyArgs>({
  query: getPokemonDetailsByFuzzy,
  variables: { pokemon: 'dragonite' }
});

console.log(pokemonData);
```

## Using `Apollo Client React`

```ts
// ApolloClient setup
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

// Instantiate required constructor fields
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://graphqlpokemon.favware.tech/'
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
    getPokemonDetails(pokemon: dragonite, skip: 0, take: 2, reverse: true) {
      sprite
      num
      species
      color
    }
  }
`;

export const Pokemon: React.FC = () => {
  const { loading, error, data } = useQuery<GraphQLPokemonResponse<'getPokemonDetails'>>(GET_POKEMON_DETAILS, {
    client: client
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return <div> Insert how you want to display the data here </div>;
};
```

# Meta

## License

Copyright © 2019, [Favware](https://github.com/favware).
Released under the [MIT License](LICENSE.md).

## Buy us some doughnuts

Favware projects is and always will be open source, even if we don't get donations. That being said, we know there are amazing people who may still want to donate just to show their appreciation. Thank you very much in advance!

We accept donations through Ko-fi, Paypal, Patreon, GitHub Sponsorships, and various crypto currencies. You can use the buttons below to donate through your method of choice.

|   Donate With   |                      Address                      |
| :-------------: | :-----------------------------------------------: |
|      Ko-fi      |  [Click Here](https://donate.favware.tech/kofi)   |
|     Patreon     | [Click Here](https://donate.favware.tech/patreon) |
|     PayPal      | [Click Here](https://donate.favware.tech/paypal)  |
| GitHub Sponsors |  [Click Here](https://github.com/sponsors/Favna)  |
|     Bitcoin     |       `1E643TNif2MTh75rugepmXuq35Tck4TnE5`        |
|    Ethereum     |   `0xF653F666903cd8739030D2721bF01095896F5D6E`    |
|    LiteCoin     |       `LZHvBkaJqKJRa8N7Dyu41Jd1PDBAofCik6`        |

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://favware.tech/"><img src="https://avatars3.githubusercontent.com/u/4019718?v=4" width="100px;" alt=""/><br /><sub><b>Jeroen Claassens</b></sub></a><br /><a href="https://github.com/favware/graphql-pokemon/issues?q=author%3AFavna" title="Bug reports">🐛</a> <a href="https://github.com/favware/graphql-pokemon/commits?author=Favna" title="Code">💻</a> <a href="#design-Favna" title="Design">🎨</a> <a href="#example-Favna" title="Examples">💡</a> <a href="#ideas-Favna" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-Favna" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-Favna" title="Maintenance">🚧</a> <a href="#platform-Favna" title="Packaging/porting to new platform">📦</a> <a href="#projectManagement-Favna" title="Project Management">📆</a> <a href="https://github.com/favware/graphql-pokemon/pulls?q=is%3Apr+reviewed-by%3AFavna" title="Reviewed Pull Requests">👀</a> <a href="#question-Favna" title="Answering Questions">💬</a> <a href="#security-Favna" title="Security">🛡️</a> <a href="https://github.com/favware/graphql-pokemon/commits?author=Favna" title="Tests">⚠️</a> <a href="#userTesting-Favna" title="User Testing">📓</a></td>
    <td align="center"><a href="https://favware.tech/"><img src="https://avatars1.githubusercontent.com/u/57236085?v=4" width="100px;" alt=""/><br /><sub><b>Favware Bot</b></sub></a><br /><a href="https://github.com/favware/graphql-pokemon/commits?author=Favware-bot" title="Code">💻</a> <a href="#maintenance-Favware-bot" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://imgbot.net/"><img src="https://avatars1.githubusercontent.com/u/31427850?v=4" width="100px;" alt=""/><br /><sub><b>Imgbot</b></sub></a><br /><a href="#maintenance-ImgBotApp" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/apps/dependabot-preview"><img src="https://avatars3.githubusercontent.com/in/2141?v=4" width="100px;" alt=""/><br /><sub><b>dependabot-preview[bot]</b></sub></a><br /><a href="#maintenance-dependabot-preview[bot]" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/apps/depfu"><img src="https://avatars3.githubusercontent.com/in/715?v=4" width="100px;" alt=""/><br /><sub><b>depfu[bot]</b></sub></a><br /><a href="#maintenance-depfu[bot]" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/KunoichiZ"><img src="https://avatars1.githubusercontent.com/u/19984244?v=4" width="100px;" alt=""/><br /><sub><b>Kaoru</b></sub></a><br /><a href="https://github.com/favware/graphql-pokemon/commits?author=KunoichiZ" title="Code">💻</a> <a href="#maintenance-KunoichiZ" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/mudkipscience"><img src="https://avatars1.githubusercontent.com/u/37792540?v=4" width="100px;" alt=""/><br /><sub><b>Emily</b></sub></a><br /><a href="https://github.com/favware/graphql-pokemon/commits?author=mudkipscience" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

<!-- LINK DUMP -->

[the graphql playground on the api]: https://graphqlpokemon.favware.tech
[yarn]: https://yarnpkg.com/package/@favware/graphql-pokemon
[npm]: https://www.npmjs.com/package/@favware/graphql-pokemon
[github package registry]: https://github.com/favware/graphql-pokemon/packages
[dockerhub]: https://hub.docker.com/r/favware/graphql-pokemon
[dexa]: https://github.com/favware/dexa
