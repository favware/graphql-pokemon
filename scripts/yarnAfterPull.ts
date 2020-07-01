import { exec } from '@klasa/utils';
import { resolve } from 'path';
import Util from '../src/utils/util';

async function main() {
  const rootDir = resolve(__dirname, '..');
  const { stdout, stderr } = await exec('yarn', { cwd: rootDir });

  if (stderr) {
    Util.kConsole.error('An error occurred while running "yarn install"!');
    Util.kConsole.error(stderr);
  } else {
    Util.kConsole.log(stdout);
    Util.kConsole.log('Successfully ran yarn for you!');
  }
}

main();
