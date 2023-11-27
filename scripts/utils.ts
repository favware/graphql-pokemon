import { fetch, FetchResultTypes } from '@sapphire/fetch';
import { rm, writeFile } from 'node:fs/promises';
import ts from 'typescript';

export function mapToJson<K extends PropertyKey, V extends object>(map: Map<K, V>): string {
  return JSON.stringify([...map]);
}

export async function importFileFromWeb<T extends object>({ url, temporaryFileName }): Promise<T> {
  const body = await fetch(url, FetchResultTypes.Text);

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

export interface GitCommit {
  sha: string;
}
