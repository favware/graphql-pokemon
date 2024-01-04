import { defineConfig, type Options } from 'tsup';

const baseConfig: Options = {
  clean: true,
  dts: true,
  minify: false,
  skipNodeModulesBundle: true,
  sourcemap: true,
  target: 'es2020',
  tsconfig: './tsconfig.package.json',
  keepNames: true,
  treeshake: true
};

export default [
  defineConfig({
    ...baseConfig,
    outDir: 'dist/codegen/cjs',
    format: 'cjs',
    entry: ['codegen/graphql-pokemon.ts']
  }),
  defineConfig({
    ...baseConfig,
    outDir: 'dist/codegen/esm',
    format: 'esm',
    entry: ['codegen/graphql-pokemon.ts'],
    outExtension: () => ({ js: '.mjs' })
  }),
  defineConfig({
    ...baseConfig,
    outDir: 'dist/utilities/cjs',
    format: 'cjs',
    entry: ['utilities/index.ts']
  }),
  defineConfig({
    ...baseConfig,
    outDir: 'dist/utilities/esm',
    format: 'esm',
    entry: ['utilities/index.ts'],
    outExtension: () => ({ js: '.mjs' })
  })
];
