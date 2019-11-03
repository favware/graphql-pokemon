<div align="center">
  <p>
  <a href="https://favware.tech/ribbon"><img style="height: 200px" src="https://storage.googleapis.com/data-sunlight-146313.appspot.com/website-project-icons/favware-graphql.png" height="200" alt="logo"/></a>
  </p>

  <p>
<h1> GraphQL-Pokemon </h1>
<h3> Expansive Pokemon GraphQL API!</a></h3>
  </p>

</div>

---

**Project Status**

[![GitHub](https://img.shields.io/github/license/favware/graphql-pokemon?logo=github&style=flat-square)](https://github.com/favware/graphql-pokemon/blob/master/LICENSE.md)

**Social Media and Donations**

[![Join Discord server](https://img.shields.io/discord/512303595966824458?color=697EC4&label=Join%20Discord%20Server&logo=discord&logoColor=FDFEFE&style=flat-square)](https://favware.tech/redirect/server)
[![Twitter Follow](https://img.shields.io/twitter/follow/favna_?label=Follow%20@Favna_&logo=twitter&colorB=1DA1F2&style=flat-square)](https://twitter.com/Favna_/follow)
[![Patreon Donate](https://img.shields.io/badge/patreon-donate-brightgreen.svg?label=Donate%20with%20Patreon&logo=patreon&colorB=F96854&style=flat-square&link=https://www.patreon.com/bePatron?u=9336537)](https://www.patreon.com/bePatron?u=9336537)
[![PayPal Donate](https://img.shields.io/badge/paypal-donate-brightgreen.svg?label=Donate%20with%20Paypal&logo=paypal&colorB=00457C&style=flat-square&link=https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XMAYCF9SDHZ34)](https://www.patreon.com/bePatron?u=9336537)

**Typings**

[![npm bundle size](https://img.shields.io/bundlephobia/min/@favware/graphql-pokemon?label=graphql-pokemon%20-%20minified&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@favware/graphql-pokemon)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@favware/graphql-pokemon?label=graphql-pokemon%20-%20minzipped&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@favware/graphql-pokemon)
[![npm](https://img.shields.io/npm/v/@favware/graphql-pokemon?color=crimson&label=graphql-pokemon%20version&logo=npm&style=flat-square)](https://www.npmjs.com/package/@favware/graphql-pokemon)

---

__***Query for Pokemon data using GraphQL***__

**Key Features**
- Fully generated client-side type information published to npm under `@favware/graphql-pokemon`
  - Has TypeScript and FlowJS Typings
- Provides information about not just Pokemon. See supported queries below.

# Install

Install client side typings with [yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/):

```sh
yarn add @favware/graphql-pokemon

# npm install @favware/graphql-pokemon
```

* * *

# Usage

```ts
import { DetailsEntry, Query } from '@favware/graphql-pokemon';

type fetchResponse<T> = {
  data: Record<keyof Query, T>
}

fetch('https://eu-west1-favware-graphql.cloudfunctions.net/api', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: '{getPokemonDetails(pokemon: "pikachu" skip: 0 take: 4 reverse: true)}'
  })
})
.then(res => res.json() as fetchResponse<DetailsEntry>)
.then(json => console.log(json.data))
```

## Supported Queries

### getPokemonDetails

Gets details on a single pokemon based on species name.You can supply skip and take to limit the amount of flavour texts to return and reverse to show latest games on top.Reversal is applied before pagination

### getPokemonDetailsByFuzzy

Gets details on a single pokemon based on a fuzzy search.You can supply skip and take to limit the amount of flavour texts to return and reverse to show latest games on top.Reversal is applied before pagination!

### getDexEntries

Gets dex entries for pokemon based on a fuzzy searchYou can supply a skip and take to paginate the results and reverse to show the results least to most well matchesReversal is applied before pagination!

### getDexEntryBySpeciesName

Gets the dex entry for a pokemon based on their species name

###  getDexEntryByDexNumber

Gets the dex entry for a pokemon based on their dex number

## [Web hosted documentation](https://favware.github.io/graphql-pokemon)