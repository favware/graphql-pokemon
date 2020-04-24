import { j2xParser as Json2XML, parse as xml2json } from 'fast-xml-parser';
import { readFile, writeFile } from 'fs-nextra';
import { resolve } from 'path';
import { version } from '../package.json';

const ROOT_DIR = resolve(__dirname, '..');
const NUGET_DIR = resolve(ROOT_DIR, 'generated', 'dotnet');
const json2xml = new Json2XML({ ignoreAttributes: false });

const main = async () => {
  const nuspecFile = resolve(NUGET_DIR, '.nuspec');
  const csprojFile = resolve(NUGET_DIR, 'GraphqlPokemon.csproj');
  const nuspecXml = await readFile(nuspecFile, 'utf-8');
  const csprojXml = await readFile(csprojFile, 'utf-8');
  const nuspecData = xml2json(nuspecXml, { ignoreAttributes: false }) as NuspecXMLData;
  const csprojData = xml2json(csprojXml, { ignoreAttributes: false }) as CsProjXMLData;

  nuspecData.package.metadata.version = version;
  csprojData.Project.Version = version;

  await writeFile(nuspecFile, json2xml.parse(nuspecData));
  await writeFile(csprojFile, json2xml.parse(csprojData));
};

main();

interface CsProjXMLData {
  Project: {
    Version: string;
  };
}

interface NuspecXMLData {
  package: {
    metadata: {
      id: string;
      version: string;
    };
  };
}
