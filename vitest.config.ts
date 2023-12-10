/// <reference lib="es2021" />

import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: [
      { find: '#arguments', replacement: resolve('src/lib/arguments') },
      { find: '#assets', replacement: resolve('src/lib/assets') },
      { find: '#jsonAssets', replacement: resolve('src/lib/assets') },
      { find: '#dexdata', replacement: resolve('src/lib/assets/pokedex-data') },
      { find: '#resolvers', replacement: resolve('src/lib/resolvers') },
      { find: '#types', replacement: resolve('src/lib/mapped-types') },
      { find: '#utils', replacement: resolve('src/lib/utils') },
      { find: '#validations', replacement: resolve('src/lib/validations') },
      { find: '#mappers', replacement: resolve('src/lib/mappers') },
      { find: '#root', replacement: resolve('src') },
      { find: '#test-utils', replacement: resolve('tests/testUtils') }
    ]
  },
  test: {
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'clover']
    }
  }
});
