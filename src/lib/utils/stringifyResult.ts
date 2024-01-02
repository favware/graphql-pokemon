import type { FormattedExecutionResult } from 'graphql/execution/execute';
import type { ObjMap } from 'graphql/jsutils/ObjMap';
import { JsonStreamStringify } from 'json-stream-stringify';

export async function stringifyResult(value: FormattedExecutionResult<ObjMap<unknown>, ObjMap<unknown>>): Promise<string> {
  const stringifyStream = new JsonStreamStringify(value);
  let stringified = '';

  for await (const chunk of stringifyStream) {
    stringified += chunk;
  }

  return `${stringified}\n`;
}
