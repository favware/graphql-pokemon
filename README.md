<div align="center">
  <p>
  <a href="https://favware.tech/api"><img style="height: 200px" src="https://storage.googleapis.com/data-sunlight-146313.appspot.com/website-project-icons/favware-graphql.png" height="200" alt="logo"/></a>
  </p>

  <p>
<h1> GraphQL-Pokemon </h1>
<h3> Expansive Pokemon GraphQL API!</h3>
  </p>

</div>

---

**Table of Contents**

- [Install](#install)
- [Usage](#usage)
- [API Documentation](#api-documentation)

---

**Project Status**

[![GitHub](https://img.shields.io/github/license/favware/graphql-pokemon?logo=github&style=flat-square)](https://github.com/favware/graphql-pokemon/blob/master/LICENSE.md)
[![Code Quality](https://github.com/favware/graphql-pokemon/workflows/Code%20Quality/badge.svg)](https://github.com/favware/graphql-pokemon/actions?query=workflow%3A"Code+Quality")
[![Unit Tests](https://github.com/favware/graphql-pokemon/workflows/Unit%20Tests/badge.svg)](https://github.com/favware/graphql-pokemon/actions?query=workflow%3A"Unit+Tests")
[![Showdown Tierlists](https://github.com/favware/graphql-pokemon/workflows/Update%20Showdown%20Tierlists/badge.svg)](https://github.com/favware/graphql-pokemon/actions?query=workflow%3A"Update+Showdown+Formats")

**Social Media and Donations**

[![Join Discord server](https://img.shields.io/discord/512303595966824458?color=697EC4&label=Join%20Discord%20Server&logo=discord&logoColor=FDFEFE&style=flat-square)](https://favware.tech/redirect/server)
[![Twitter Follow](https://img.shields.io/twitter/follow/favna_?label=Follow%20@Favna_&logo=twitter&colorB=1DA1F2&style=flat-square)](https://twitter.com/Favna_/follow)
[![Patreon Donate](https://img.shields.io/badge/patreon-donate-brightgreen.svg?label=Donate%20with%20Patreon&logo=patreon&colorB=F96854&style=flat-square&link=https://www.patreon.com/bePatron?u=9336537)](https://www.patreon.com/bePatron?u=9336537)
[![PayPal Donate](https://img.shields.io/badge/paypal-donate-brightgreen.svg?label=Donate%20with%20Paypal&logo=paypal&colorB=00457C&style=flat-square&link=https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XMAYCF9SDHZ34)](https://www.patreon.com/bePatron?u=9336537)

**Typings**

[![npm](https://img.shields.io/npm/v/@favware/graphql-pokemon?color=crimson&label=graphql-pokemon%20version&logo=npm&style=flat-square)](https://www.npmjs.com/package/@favware/graphql-pokemon)

---

**_Query for Pokemon data using GraphQL_**

**Key Features**

- Fully generated client-side type information published to npm under `@favware/graphql-pokemon`
- Provides information about various assets in Pokémon
  - Pokédex
  - Items
  - Abilities
  - Moves
  - Learnsets
  - Type matchups

# Install

Install client side typings with [yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/):

```sh
yarn add -D @favware/graphql-pokemon

# npm install -D @favware/graphql-pokemon
```

---

# Usage

## With [browser Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) or [node-fetch](https://www.npmjs.com/package/node-fetch)

```ts
import { Query } from '@favware/graphql-pokemon';
// const { Query } = require('@favware/graphql-pokemon');

interface GraphQLPokemonResponse<K extends keyof Omit<Query, '__typename'>> {
  data: Record<K, Omit<Query[K], '__typename'>>;
}

fetch('https://favware.tech/api', {
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
  .then(res => res.json() as GraphQLPokemonResponse<'getPokemonDetails'>)
  .then(json => console.log(json.data));
```

## With [Apollo Client React](https://www.apollographql.com/docs/react/)

```ts
// ApolloClient setup
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

// Instantiate required constructor fields
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://favware.tech/api',
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
      fetchPolicy: 'cache-and-network',
    },
  },
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
    getPokemonDetails(pokemon: dragonite skip: 0 take: 2 reverse: true) {
      sprite
      num
      species
      color
    }
  }
`;

export const Pokemon: React.FC = () => {
  const { loading, error, data } = useQuery<GraphQLPokemonResponse<'getPokemonDetails'>>(GET_POKEMON_DETAILS, { client: client } );

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  
  return (
    <div> Insert how you want to display the data here </div>
  )
}
```

# API Documentation

For the full documentation of the deployed version please see [the GraphQL Playground on the API](https://favware.tech/api?ngsw-bypass=true).
