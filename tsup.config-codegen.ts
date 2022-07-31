import { defineConfig } from 'tsup';

export default defineConfig({
  outDir: 'dist',
  clean: true,
  dts: true,
  entry: ['codegen/graphql-pokemon.ts'],
  format: ['esm', 'cjs'],
  minify: false,
  skipNodeModulesBundle: true,
  sourcemap: true,
  target: 'es2020',
  tsconfig: './tsconfig.codegen.json',
  bundle: false,
  shims: false,
  keepNames: true,
  splitting: false
});
