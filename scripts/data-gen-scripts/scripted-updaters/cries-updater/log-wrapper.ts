import { log as baseLog, type LogParamaters } from '../utils/append-to-log.js';
import { logFile } from './constants.js';

export async function log(params: Omit<LogParamaters, 'logFile'>) {
  return baseLog({ ...params, logFile });
}
