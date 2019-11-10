<div align="center">
  <p>
  <a href="https://favware.tech/api"><img style="height: 200px" src="https://storage.googleapis.com/data-sunlight-146313.appspot.com/website-project-icons/favware-graphql.png" height="200" alt="logo"/></a>
  </p>

  <p>
<h1> GraphQL-Pokemon </h1>
<h3> Expansive Pokemon GraphQL API!</a></h3>
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
# graphql is a peer dependency for type information

yarn add -D graphql @favware/graphql-pokemon

# npm install -D graphql @favware/graphql-pokemon
```

* * *

# Usage

```ts
import { DetailsEntry, Query } from '@favware/graphql-pokemon';

type fetchResponse<T> = {
  data: Record<keyof Query, T>
}

fetch('https://favware.tech/api', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: '{getPokemonDetails(pokemon:pikachu skip:0 take:4 reverse:true)}'
  })
})
.then(res => res.json() as fetchResponse<DetailsEntry>)
.then(json => console.log(json.data))
```

# API Documentation

For the full documentation of the deployed version please see [the GraphQL Playground on the API](https://favware.tech/api).

**Please note that if you visited my site normally before a cache-clear refresh (Control + F5) might be required due to the Service Worker caching the regular site data!**