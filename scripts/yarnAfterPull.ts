import path from 'path';
import execa from 'execa';
import { greenColour, yellowColour } from './auto/utils';

(async () => {
  const ROOT_DIR = path.join(__dirname, '..');
  const log = console.log; // eslint-disable-line no-console, @typescript-eslint/unbound-method

  const { stdout } = await execa('git', ['show', '--name-only'], { cwd: ROOT_DIR });
  const lastCommitFiles = stdout.split('\n').slice(6);

  const hasLockfileInCommit = lastCommitFiles.some((commitFile) => commitFile.toLowerCase() === 'yarn.lock');

  if (hasLockfileInCommit) {
    log(yellowColour.format('Yarn lockfile was updated, running Yarn for you'));

    execa('yarn', { cwd: ROOT_DIR }).stdout!.pipe(process.stdout);

    log(greenColour.format('Successfully ran yarn for you!'));
  }
})();
