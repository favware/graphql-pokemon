import { defineConfig } from 'tsup';

export default defineConfig({
  outDir: 'api',
  clean: true,
  dts: false,
  entry: ['src/**/*.ts', '!src/**/*.d.ts'],
  format: ['esm'],
  minify: false,
  skipNodeModulesBundle: true,
  sourcemap: true,
  target: 'esnext',
  tsconfig: 'src/tsconfig.json',
  bundle: false,
  shims: false,
  keepNames: true,
  splitting: false
});
