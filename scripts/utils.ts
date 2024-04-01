import { FetchResultTypes, fetch } from '@sapphire/fetch';
import { readFile, rm, writeFile } from 'node:fs/promises';
import { platform, release } from 'node:os';
import { inspect } from 'node:util';
import prettier from 'prettier';
import ts from 'typescript';
import prettierConfig from '../.prettierrc.mjs';

export const rootDir = new URL('../', import.meta.url);

export function mapToJson<K extends PropertyKey, V extends object>(map: Map<K, V>): string {
  return JSON.stringify([...map]);
}

export async function importFileFromWeb<T extends object>({ url, temporaryFileName }): Promise<T> {
  const body = await fetch(url, { headers: userAgentHeader }, FetchResultTypes.Text);

  const result = ts.transpileModule(body, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      newLine: ts.NewLineKind.LineFeed,
      moduleResolution: ts.ModuleResolutionKind.NodeJs,
      target: ts.ScriptTarget.ESNext,
      removeComments: true,
      declaration: false,
      sourceMap: false,
      declarationMap: false,
      incremental: false,
      importHelpers: false
    }
  });

  const temporaryOutputFile = new URL(temporaryFileName, import.meta.url);

  await writeFile(temporaryOutputFile, result.outputText);
  // @ts-expect-error Node supports URLs just fine
  const tiersData = await import(temporaryOutputFile);

  await rm(temporaryOutputFile);

  return tiersData;
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

export async function writeDataToFileAndPrettify(data: string, fileResolver: string | URL): Promise<void> {
  const fileToWriteTo = typeof fileResolver === 'string' ? new URL(import.meta.resolve(fileResolver)) : fileResolver;

  const formattedData = await prettier.format(data, { ...prettierConfig, parser: 'typescript' });
  await writeFile(fileToWriteTo, formattedData);
}

export interface GitCommit {
  sha: string;
}

const packageJsonRaw = await readFile(new URL('../package.json', import.meta.url), 'utf8');
const { version, repository } = JSON.parse(packageJsonRaw);
const userAgent = `@favware/graphql-pokemon/${version} (NodeJS) ${platform()}/${release()} (${repository.url.slice(4)})`;
export const userAgentHeader = { 'User-Agent': userAgent };
