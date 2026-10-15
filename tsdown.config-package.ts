import { defineConfig, type UserConfig } from 'tsdown';
import replace from 'unplugin-replace/rolldown';

const baseConfig: UserConfig = {
	clean: true,
	dts: true,
	minify: false,
	deps: { neverBundle: true },
	sourcemap: true,
	target: 'es2020',
	tsconfig: './tsconfig.package.json',
	outputOptions: { keepNames: true },
	treeshake: true,
	plugins: [
		replace({
			include: /codegen\/graphql-pokemon\.ts$/,
			delimiters: ['', ''],
			values: [{ find: /\};/g, replacement: '}' }]
		})
	]
};

export default defineConfig([
	{
		...baseConfig,
		outDir: 'dist/codegen/cjs',
		format: 'cjs',
		entry: ['codegen/graphql-pokemon.ts']
	},
	{
		...baseConfig,
		outDir: 'dist/codegen/esm',
		format: 'esm',
		entry: ['codegen/graphql-pokemon.ts'],
		outExtensions: () => ({ js: '.mjs', dts: '.d.mts' })
	},
	{
		...baseConfig,
		outDir: 'dist/utilities/cjs',
		format: 'cjs',
		entry: ['utilities/index.ts']
	},
	{
		...baseConfig,
		outDir: 'dist/utilities/esm',
		format: 'esm',
		entry: ['utilities/index.ts'],
		outExtensions: () => ({ js: '.mjs', dts: '.d.mts' })
	}
]);
