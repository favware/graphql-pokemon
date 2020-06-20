import { exec } from '@klasa/utils';
import { resolve } from 'path';
import { kConsole } from './auto/utils';

async function main() {
  const rootDir = resolve(__dirname, '..');
  const { stdout, stderr } = await exec('yarn', { cwd: rootDir });

  if (stderr) {
    kConsole.error('An error occurred while running "yarn install"!');
    kConsole.error(stderr);
  } else {
    kConsole.log(stdout);
    kConsole.log('Successfully ran yarn for you!');
  }
}

main();
