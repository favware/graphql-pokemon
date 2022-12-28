import { execFile } from 'node:child_process';
import { inspect } from 'node:util';

export function dataToClipboard<T>(data: T): void {
  if (process.platform === 'darwin') {
    execFile('pbcopy').stdin?.end(
      inspect(data, {
        depth: Infinity,
        maxArrayLength: Infinity,
        showHidden: false
      })
    );
  } else if (process.platform === 'win32') {
    execFile('clippy', ['--copy']).stdin?.end(
      inspect(data, {
        depth: Infinity,
        maxArrayLength: Infinity,
        showHidden: false
      })
    );
  } else {
    throw new Error('Unsupported platform');
  }
}
