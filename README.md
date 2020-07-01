<div align="center">
  <p>
  <a href="https://graphqlpokemon.favware.tech/"><img style="height: 200px" src="https://cdn.favware.tech/img/gqlp.png" height="200" alt="logo"/></a>
  </p>

  <p>
<h1> GraphQL-Pokemon </h1>
<h3> Extensive Pokemon GraphQL API!</h3>
  </p>

</div>

---

**Table of Contents**

- [Installation](#installation)
  - [NodeJS](#nodejs)
  - [.NET Core](#net-core)
- [API Documentation](#api-documentation)
- [Usage](#usage)
  - [NodeJS](#nodejs-1)
    - [With browser Fetch API or node-fetch](#with-browser-fetch-api-or-node-fetch)
    - [With Apollo Client React](#with-apollo-client-react)
  - [.NET Core](#net-core-1)
- [Meta](#meta)
  - [License](#license)
  - [Buy us a donut](#buy-us-a-donut)

---

**Project Status**

[![GitHub](https://img.shields.io/github/license/favware/graphql-pokemon?logo=github&style=flat-square)](https://github.com/favware/graphql-pokemon/blob/master/LICENSE.md)
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
[![nuget](https://img.shields.io/nuget/v/Favware.Graphqlpokemon?color=blue&label=.NET%20Core%20version&logo=nuget&style=flat-square)](https://www.nuget.org/packages/Favware.Graphqlpokemon/)

---

**_Query for Pokemon data using GraphQL_**

**Key Features**

- Fully generated client-side TypeScript typings published to
  - [npm] as `@favware/graphql-pokemon`
  - [GitHub Package Registry] as `@favware/graphql-pokemon`
- Fully generated client-side .NET Core typings published to [nuget]
- Docker images of the API for private hosting published to
  - [Dockerhub] as `favware/graphql-pokemon`
  - [GitHub Package Registry] as `docker.pkg.github.com/favware/graphql-pokemon/graphql-pokemon`
  - [Google Cloud Container Registry] as `gcr.io/data-sunlight-146313/graphql-pokemon:latest`
- Provides information about various assets in Pokémon
  - Pokédex
  - Items
  - Abilities
  - Moves
  - Learnsets
  - Type matchups

# Installation

## NodeJS

Install client side typings from [yarn] or [npm]:

```sh
yarn add -D @favware/graphql-pokemon
```

```sh
npm install -D @favware/graphql-pokemon
```

## .NET Core

Install client side typings from [NuGet].

Search `Favware.Graphqlpokemon` in your NuGet manager and install it from there

---

# API Documentation

For the full documentation of the deployed version please see [the GraphQL Playground on the API].

# Usage

## NodeJS

### With browser [`Fetch API`] or [`node-fetch`]

```ts
import { Query } from '@favware/graphql-pokemon';

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
  .then((res) => res.json() as GraphQLPokemonResponse<'getPokemonDetails'>)
  .then((json) => console.log(json.data));
```

### With [`Apollo Client React`]

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
import { Query } from '@favware/graphql-pokemon';
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

## .NET Core

_**More can be added here in due time, this is open for contribution by someone who is more familiarized with .NET.**_

```cs
using GraphQLCodeGen;

namespace MyProject.Consumer
{
  public class GraphqlConsumer
  {
    private Graphqlpokemon.Abilities Abilities;
  }
}
```

# Meta

## License

Copyright © 2019, [Favware](https://github.com/favware).
Released under the [MIT License](LICENSE.md).

## Buy us a donut

Favware projects are open source and always will be, even if there are no donations. That said, we also know there are people out there that may still want to donate just to show their appreciation so this is for you guys. Thanks in advance!

You can contribute in a multitude of ways:

- [PayPal](https://donate.favware.tech/paypal)
- [Patreon](https://www.patreon.com/favna)
- [Ko-Fi](https://ko-fi.com/favna)
- [GitHub Sponsors Favware](https://github.com/sponsors/favware)
- [GitHub Sponsors Favna](https://github.com/sponsors/Favna)
- Bitcoin: `1E643TNif2MTh75rugepmXuq35Tck4TnE5`
- Ethereum: `0xF653F666903cd8739030D2721bF01095896F5D6E`
- LiteCoin: `LZHvBkaJqKJRa8N7Dyu41Jd1PDBAofCik6`

<!-- LINK DUMP -->

[`apollo client react`]: https://www.apollographql.com/docs/react/
[`node-fetch`]: https://github.com/node-fetch/node-fetch
[`fetch api`]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[the graphql playground on the api]: https://graphqlpokemon.favware.tech
[nuget]: https://www.nuget.org/packages/Favware.Graphqlpokemon/
[yarn]: https://yarnpkg.com/package/@favware/graphql-pokemon
[npm]: https://www.npmjs.com/package/@favware/graphql-pokemon
[github package registry]: https://github.com/favware/graphql-pokemon/packages
[dockerhub]: https://hub.docker.com/r/favware/graphql-pokemon
[google cloud container registry]: https://gcr.io/data-sunlight-146313/graphql-pokemon
