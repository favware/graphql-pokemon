import { rm } from 'node:fs/promises';

const graphqlPokemonTsFile = new URL('../generated/ts/graphql-pokemon.ts', import.meta.url);

const options = { force: true, recursive: true };

await Promise.all([
  rm(graphqlPokemonTsFile, options) //
]);
