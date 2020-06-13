import { exec } from '@klasa/utils';
import { resolve } from 'path';
import { kConsole } from './auto/utils';

async function main() {
  const rootDir = resolve(__dirname, '..');

  const { stdout } = await exec('git show --name-only', { cwd: rootDir });
  const lastCommitFiles = stdout.split('\n').slice(6);

  const hasLockfileInCommit = lastCommitFiles.some((commitFile) => commitFile.toLowerCase() === 'yarn.lock');

  if (!hasLockfileInCommit) {
    kConsole.log('Yarn lockfile was updated, running Yarn for you');

    const { stdout, stderr } = await exec('yarn', { cwd: rootDir });

    if (stderr) {
      kConsole.error('An error occurred while running "yarn install"!');
      kConsole.error(stderr);
    } else {
      kConsole.log(stdout);
      kConsole.log('Successfully ran yarn for you!');
    }
  }
}

main();
