import { fileURLToPath } from 'node:url';

const { pages } = await import('./pages.mjs');

const CommonDescription = 'Extensive Pokémon GraphQL API with data for all generations.';
const CommonTitle = 'GraphQL Pokémon';
const CommonURL = 'https://graphqlpokemon.js.org';

/**
 * @type {import("@magidoc/cli").MagidocConfiguration}
 */
const config = {
  introspection: {
    type: 'sdl',
    paths: ['./graphql/*.graphql'] // CWD is the root of the project, not the current docs/ directory
  },
  dev: {
    watch: [fileURLToPath(new URL('./pages', import.meta.url)), fileURLToPath(new URL('./pages.mjs', import.meta.url))]
  },
  website: {
    template: 'carbon-multi-page',
    output: fileURLToPath(new URL('./magidoc', import.meta.url)),
    options: {
      pages,
      appTitle: 'GraphQL Pokémon Docs',
      appFavicon: 'https://cdn.favware.tech/img/gqlp.png',
      appLogo: 'https://cdn.favware.tech/img/gqlp-and-name.png',
      externalLinks: [
        {
          label: 'Github',
          href: 'https://github.com/favware/graphql-pokemon'
        },
        {
          group: 'Demo',
          label: 'Playground',
          href: 'https://graphqlpokemon.favware.tech/v8'
        },
        {
          group: 'Donate',
          label: 'Patreon',
          href: 'https://donate.favware.tech/patreon'
        },
        {
          group: 'Donate',
          label: 'GitHub',
          href: 'https://donate.favware.tech/github'
        },
        {
          group: 'Donate',
          label: 'PayPal',
          href: 'https://donate.favware.tech/paypal'
        }
      ],
      siteMeta: {
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'black',
        'apple-mobile-web-app-title': CommonTitle,
        'application-name': CommonTitle,
        'identifier-URL': CommonURL,
        'og:description': CommonDescription,
        'og:email': 'support@favware.tech',
        'og:image:alt': 'OpenGraphImage',
        'og:image:height': '1836',
        'og:image:width': '1836',
        'og:image': 'https://cdn.favware.tech/img/gqlp.png',
        'og:locale': 'en_US',
        'og:site_name': CommonTitle,
        'og:title': CommonTitle,
        'og:type': 'website',
        'reply-to': 'support@favware.tech',
        'revisit-after': '7 days',
        'twitter:card': 'summary',
        'twitter:creator': '@favna_',
        'twitter:image': 'https://cdn.favware.tech/img/gqlp.png',
        'twitter:site': '@favna_',
        audience: 'all',
        author: 'Favware',
        coverage: 'Worldwide',
        description: CommonDescription,
        designer: 'Favware, Sunny Pelletier',
        distribution: 'Global',
        googlebot: 'index,follow',
        HandheldFriendly: 'True',
        keywords: 'graphql,documentation,docs,api,pokemon,favware,favna,static,javascript,typescript,nodejs',
        owner: 'Favware, support@favware.tech',
        rating: 'safe for kids',
        robots: 'archive,follow,imageindex,index,odp,snippet,translate',
        shortlink: CommonURL,
        subject: CommonDescription,
        summary: CommonDescription,
        target: 'all',
        url: CommonURL
      }
    }
  }
};

export default config;
