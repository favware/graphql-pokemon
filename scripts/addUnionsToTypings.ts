import { closeSync, openSync, writeSync } from 'fs';
import { readFile } from 'fs-nextra';
import { join } from 'path';

const ROOT_DIR = join(__dirname, '..');
const TYPINGS_DIR = join(ROOT_DIR, 'typings');

const removeLines = (data: string, linesToRemove: number) => {
  return data
    .split('\n')
    .slice(linesToRemove)
    .join('\n');
};

const scalars = Buffer.from(`
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };

export type MoveCategoryUnion = 'Physical' | 'Special' | 'Status';
export type MoveTargetUnion =
| 'Random'
| 'Self'
| 'Adjacent Ally or Self'
| 'Adjacent Foes'
| 'Adjacent Foe'
| 'All Adjacent Foes'
| 'All Adjacent'
| 'Adjacent Ally'
| 'Any'
| 'Foe that last hit user'
| 'Foe\\'s Side'
| 'Ally\\'s Side'
| 'Normal'
| 'All';

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The \`JSONObject\` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any,
  /** A field whose value matches the provided regular expression /^(?:Physical|Special|Status)$/. */
  MoveCategoryUnion: MoveCategoryUnion,
  /**
 * A field whose value matches the provided regular expression
   * /^(?=randomNormal|Self|Adjacent ally or self|Adjacent Ally|Adjacent
   * foes|Adjacent foe|All adjacent foes|All adjacent|Any|Foe that last hit
   * user|Foe\\'s side|Ally\\'s side|Normal|All)[\\w \\']+$/.
 */
  MoveTargetUnion: MoveTargetUnion;
};
`);

(async () => {
  const dt = Buffer.from(
    removeLines(
      await readFile(
        join(TYPINGS_DIR, 'graphql-pokemon.ts'), { encoding: 'utf8' }
      ), 22)
  );
  const fd = openSync(join(TYPINGS_DIR, 'graphql-pokemon.ts'), 'w+');

  writeSync(fd, scalars, 0, scalars.length, 0);
  writeSync(fd, dt, 0, dt.length, scalars.length);

  closeSync(fd);
})();