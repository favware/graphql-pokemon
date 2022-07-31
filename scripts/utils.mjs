import { fetch, FetchResultTypes } from '@sapphire/fetch';
import { rm, writeFile } from 'node:fs/promises';
import ts from 'typescript';

export const mapToJson = (map) => JSON.stringify([...map]);

export const importFileFromWeb = async ({ url, temporaryFileName }) => {
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
  const tiersData = await import(temporaryOutputFile);

  await rm(temporaryOutputFile);

  return tiersData;
};
