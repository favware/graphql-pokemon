import { appendFile } from 'node:fs/promises';
import { logFile } from './constants.js';

export async function appendToLog(data: string, indent = true) {
  await appendFile(logFile, `\n${indent ? '\t' : ''}${data}`, { encoding: 'utf-8' });
}
