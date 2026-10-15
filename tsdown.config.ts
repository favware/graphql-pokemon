import { defineConfig } from 'tsdown';
import replace from 'unplugin-replace/rolldown';

export default defineConfig({
	outDir: 'api',
	clean: true,
	dts: false,
	entry: ['src/**/*.ts'],
	root: 'src',
	format: ['esm'],
	fixedExtension: false,
	minify: false,
	deps: { neverBundle: [/^#/, /^(?![./]|node:)/] },
	sourcemap: true,
	target: 'esnext',
	tsconfig: 'src/tsconfig.json',
	unbundle: true,
	shims: false,
	outputOptions: { keepNames: true },
	plugins: [
		replace({
			preventAssignment: true,
			values: {
				'globalThis.process': JSON.stringify(true),
				'process.env.NODE_ENV': JSON.stringify('production')
			}
		})
	],
	copy: {
		from: ['src/lib/assets/flavorText.json', 'src/lib/assets/formats.json'],
		to: 'api/lib/assets'
	}
});
