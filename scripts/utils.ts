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

export interface GitCommit {
  sha: string;
}
