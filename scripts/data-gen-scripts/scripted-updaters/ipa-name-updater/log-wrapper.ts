import { log as baseLog, type LogParamaters } from '../utils/append-to-log.js';

export const logFile = new URL('./output.log', import.meta.url);

export async function log(params: Omit<LogParamaters, 'logFile'>) {
  return baseLog({ ...params, logFile });
}
