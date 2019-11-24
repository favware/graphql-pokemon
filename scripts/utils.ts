import fetch from 'node-fetch';
import { dirname } from 'path';

export const mapToJson = (map: Map<string, unknown>) => JSON.stringify([ ...map ]);

export const needFile = async (url: string) => {
  const NodeModule: Module = module.constructor as Module;
  const request = await fetch(url);
  const body: string = await request.text();
  const nodeModule = new NodeModule(url, module.parent);
  nodeModule.fileName = url;
  /* eslint-disable no-underscore-dangle */
  nodeModule.paths = NodeModule._nodeModulePaths(dirname(url));
  nodeModule._compile(body, url);

  /* eslint-enable no-underscore-dangle */
  return nodeModule.exports;
};

export interface TierEntry {
  tier: string;
}

export interface DataJSON {
  lastSha: string;
}

export type Formats = Record<string, TierEntry>;

interface Module extends Function {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  _nodeModulePaths: any;

  new(url: string, parents: NodeModule | null): any;

  /* eslint-enable @typescript-eslint/no-explicit-any */
}