import path from 'path';
import execa from 'execa';
import chalk from 'chalk';

(async () => {
  const ROOT_DIR = path.join(__dirname, '..');
  const log = console.log; // eslint-disable-line no-console, @typescript-eslint/unbound-method

  const { stdout } = await execa('git', ['show', '--name-only'], { cwd: ROOT_DIR });
  const lastCommitFiles = stdout.split('\n').slice(6);

  const hasLockfileInCommit = lastCommitFiles.some(commitFile => commitFile.toLowerCase() === 'yarn.lock');

  if (hasLockfileInCommit) {
    log(chalk.cyan('Yarn lockfile was updated, running Yarn for you'));

    execa('yarn', { cwd: ROOT_DIR }).stdout!.pipe(process.stdout);

    log(chalk.green('Successfully ran yarn for you!'));
  }
})();
