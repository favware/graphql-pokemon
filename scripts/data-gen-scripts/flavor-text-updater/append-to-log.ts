import { bold } from 'colorette';
import { appendFile } from 'node:fs/promises';
import { logFile } from './constants.js';

interface LogParamaters {
  bypassCiCheck?: boolean;
  msg: string;
  color: (msg: string) => string;
  isBold: boolean;
  isIndent: boolean;
}

/**
 * Logs a message with the specified log level, color, and formatting options.
 * @param msg - The message to be logged.
 * @param color - The function to be used for coloring the message.
 * @param isBold - Indicates whether the message should be displayed in bold.
 * @param isIndent - Indicates whether the message should be indented.
 */
export async function log({ msg, color, isBold, isIndent, bypassCiCheck = false }: LogParamaters) {
  if (process.env.CI) {
    if (bypassCiCheck) {
      logToConsole({ msg, color, isBold });
    }
  } else {
    logToConsole({ msg, color, isBold });
  }

  await appendToLog({ msg, isIndent });
}

function logToConsole({ msg, color, isBold }: Omit<LogParamaters, 'isIndent' | 'bypassCiCheck'>) {
  console.log(isBold ? bold(color(msg)) : color(msg));
}

async function appendToLog({ msg, isIndent = true }: Pick<LogParamaters, 'msg' | 'isIndent'>) {
  await appendFile(logFile, `\n${isIndent ? '\t' : ''}${msg}`, { encoding: 'utf-8' });
}
