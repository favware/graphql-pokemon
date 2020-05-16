import { j2xParser as Json2XML, parse as xml2json } from 'fast-xml-parser';
import { promises as fsp } from 'fs';
import { resolve } from 'path';
import { version } from '../package.json';

const DOTNET_DIR = resolve(__dirname, '..', 'generated', 'dotnet');
const json2xml = new Json2XML({ ignoreAttributes: false });

const main = async () => {
  const csprojFile = resolve(DOTNET_DIR, 'Favware.Graphqlpokemon.csproj');
  const csprojXml = await fsp.readFile(csprojFile, 'utf-8');
  const csprojData = xml2json(csprojXml, { ignoreAttributes: false }) as CsProjXMLData;

  csprojData.Project.PropertyGroup[0].Version = version;

  await fsp.writeFile(csprojFile, json2xml.parse(csprojData));
};

main();

interface CsProjXMLData {
  Project: {
    PropertyGroup: {
      PackageId: string;
      Product: string;
      Description: string;
      PackageReleaseNotes: string;
      Version: string;
      Authors: string;
      PackageTags: string;
      TargetFramework: string;
      Platforms: string;
      GeneratePackageOnBuild: string;
      DocumentationFile: string;
    }[];
    ItemGroup: {
      None: unknown;
      PackageReference: unknown[];
    }[];
  };
}
