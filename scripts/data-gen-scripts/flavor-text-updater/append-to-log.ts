import { bold } from 'colorette';
import { appendFile } from 'node:fs/promises';
import { logFile } from './constants.js';

/**
 * Logs a message with the specified log level, color, and formatting options.
 * @param msg - The message to be logged.
 * @param logLevel - The function to be used for logging the message.
 * @param color - The function to be used for coloring the message.
 * @param isBold - Indicates whether the message should be displayed in bold.
 * @param isIndent - Indicates whether the message should be indented.
 */
export async function log(msg: string, logLevel: (msg: string) => void, color: (msg: string) => string, isBold: boolean, isIndent: boolean) {
  if (isBold) {
    logLevel(bold(color(msg)));
  } else {
    logLevel(color(msg));
  }

  await appendToLog(msg, isIndent);
}

async function appendToLog(data: string, indent = true) {
  await appendFile(logFile, `\n${indent ? '\t' : ''}${data}`, { encoding: 'utf-8' });
}
