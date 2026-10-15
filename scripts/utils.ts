import { readFile, rm, writeFile } from 'node:fs/promises';
import { platform, release } from 'node:os';
import { inspect } from 'node:util';
import { FetchResultTypes, fetch } from '@sapphire/fetch';
import { transform } from 'oxc-transform';
import { format, type FormatConfig } from 'oxfmt';
import oxfmtConfig from '../.oxfmtrc.json';

const packageJsonRaw = await readFile(new URL('../package.json', import.meta.url), 'utf8');
const { version, repository } = JSON.parse(packageJsonRaw);
const userAgent = `@favware/graphql-pokemon/${version} (NodeJS) ${platform()}/${release()} (${repository.url.slice(4)})`;

export const rootDir = new URL('../', import.meta.url);
export const userAgentHeader = { 'User-Agent': userAgent };

export function mapToJson<K extends PropertyKey, V extends object>(map: Map<K, V>): string {
	return JSON.stringify([...map]);
}

export async function importFileFromWeb<T extends object>({ url, temporaryFileName }: { url: string; temporaryFileName: string }): Promise<T> {
	const body = await fetch(url, { headers: userAgentHeader }, FetchResultTypes.Text);

	const result = await transform(temporaryFileName, body, {
		lang: 'ts',
		sourceType: 'module',
		target: 'esnext'
	});

	if (result.errors.length > 0) {
		throw new Error(`Failed to compile ${url}: ${result.errors.map((error) => error.message).join('\n')}`);
	}

	const temporaryOutputFile = new URL(temporaryFileName, import.meta.url);

	await writeFile(temporaryOutputFile, result.code);

	try {
		return (await import(temporaryOutputFile.href)) as T;
	} finally {
		await rm(temporaryOutputFile);
	}
}

export function sortObjectByKey<T extends object>(obj: T): T {
	const keys: string[] = [];
	const sortedObj: T = {} as T;

	for (const key in obj) {
		if (Reflect.has(obj, key)) {
			keys.push(key);
		}
	}

	keys.sort((a, b) => {
		const lowercaseA = a.toLowerCase();
		const lowercaseB = b.toLowerCase();

		if (lowercaseA < lowercaseB) {
			return -1;
		}

		if (lowercaseA > lowercaseB) {
			return 1;
		}

		return 0;
	});

	for (const key of keys) {
		sortedObj[key] = obj[key];
	}

	return sortedObj;
}

/**
 * Replaces occurrences of "Poke Ball" with "Poké Ball" and "Pokemon" with "Pokémon" in the input string.
 * @param input - The input string to be processed.
 * @returns The input string with the replacements made.
 */
export function replacePokeWithAccentedPoke(input: string) {
	return input //
		.replaceAll('Poke Ball', 'Poké Ball')
		.replaceAll('Pokemon', 'Pokémon');
}

export function inspectData<T>(data: T): string {
	return inspect(data, {
		depth: Infinity,
		maxArrayLength: Infinity,
		showHidden: false
	});
}

export function replaceEnumLikeValues(data: string): string {
	const isNonStandardReplacedData = data
		.replaceAll(/"?isNonstandard"?: ['"]Past['"]/g, 'isNonstandard: IsNonStandard.Past')
		.replaceAll(/"?isNonstandard"?: ['"]Unobtainable['"]/g, 'isNonstandard: IsNonStandard.Unobtainable')
		.replaceAll(/"?isNonstandard"?: ['"]CAP['"]/g, 'isNonstandard: IsNonStandard.Cap')
		.replaceAll(/"?isNonstandard"?: ['"]Gigantamax['"]/g, 'isNonstandard: IsNonStandard.Gigantamax')
		.replaceAll(/"?isNonstandard"?: ['"]LetsGoPikachuEevee['"]/g, 'isNonstandard: IsNonStandard.LetsGoPikachuEevee');

	// oxlint-disable-next-line prefer-named-capture-group
	const typesEnumRegex = /"?types"?: \[\s['"]([a-zA-Z]+)['"](?:, ['"]([a-zA-Z]+)['"])?\s\]/g;

	const replacedTypesData = isNonStandardReplacedData.replace(typesEnumRegex, (_, type1, type2) => {
		const capitalizedType1 = type1.charAt(0).toUpperCase() + type1.slice(1);

		if (type2) {
			const capitalizedType2 = type2.charAt(0).toUpperCase() + type2.slice(1);
			return `types: [TypesEnum.${capitalizedType1}, TypesEnum.${capitalizedType2}]`;
		}

		return `types: [TypesEnum.${capitalizedType1}]`;
	});

	return replacedTypesData;
}

export async function writeDataToFileAndPrettify(data: string, fileToWriteTo: URL): Promise<void> {
	const formattedData = await format('', data, oxfmtConfig as FormatConfig);
	await writeFile(fileToWriteTo, formattedData.code);
}

export interface GitCommit {
	sha: string;
}
