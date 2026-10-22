import { URL } from 'node:url';
import { rootDir } from '../../../utils';

export function getPokemonGenerationForDexNumber(dexNumber: number) {
	if (dexNumber >= 0 && dexNumber <= 151) return 1;
	if (dexNumber >= 152 && dexNumber <= 251) return 2;
	if (dexNumber >= 252 && dexNumber <= 386) return 3;
	if (dexNumber >= 387 && dexNumber <= 493) return 4;
	if (dexNumber >= 494 && dexNumber <= 649) return 5;
	if (dexNumber >= 650 && dexNumber <= 721) return 6;
	if (dexNumber >= 722 && dexNumber <= 809) return 7;
	if (dexNumber >= 810 && dexNumber <= 905) return 8;
	if (dexNumber >= 906 && dexNumber <= 1_025) return 9;

	return -1;
}

export function getModulePathForGeneration(generation: number): URL {
	const dexdataFolder = new URL('src/lib/assets/pokedex-data/', rootDir);
	switch (generation) {
		case 1:
			return new URL('gen1.ts', dexdataFolder);
		case 2:
			return new URL('gen2.ts', dexdataFolder);
		case 3:
			return new URL('gen3.ts', dexdataFolder);
		case 4:
			return new URL('gen4.ts', dexdataFolder);
		case 5:
			return new URL('gen5.ts', dexdataFolder);
		case 6:
			return new URL('gen6.ts', dexdataFolder);
		case 7:
			return new URL('gen7.ts', dexdataFolder);
		case 8:
			return new URL('gen8.ts', dexdataFolder);
		case 9:
			return new URL('gen9.ts', dexdataFolder);
		default:
			throw new Error(`Invalid generation: ${generation}`);
	}
}
