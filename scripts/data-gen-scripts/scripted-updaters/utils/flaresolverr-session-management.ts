import { FetchMediaContentTypes, FetchMethods, FetchResultTypes, fetch } from '@sapphire/fetch';
import { userAgentHeader } from '../../../utils.js';
import type { FlareSolverrSessionCreateResponse } from './types.js';

let currentSession: string;

/**
 * Creates a Flaresolverr session.
 * @returns A promise that resolves to void.
 */
export async function createFlaresolverrSession(): Promise<void> {
  const response = await fetch<FlareSolverrSessionCreateResponse>(
    'http://localhost:8191/v1',
    {
      method: FetchMethods.Post,
      headers: {
        ...userAgentHeader,
        'Content-Type': FetchMediaContentTypes.JSON
      },
      body: JSON.stringify({
        cmd: 'sessions.create'
      })
    },
    FetchResultTypes.JSON
  );

  currentSession = response.session;
}

/**
 * Destroys the current FlareSolverr session.
 * @returns A promise that resolves when the session is destroyed.
 */
export async function destroyFlaresolverrSession(): Promise<void> {
  await fetch<FlareSolverrSessionCreateResponse>(
    'http://localhost:8191/v1',
    {
      method: FetchMethods.Post,
      headers: {
        ...userAgentHeader,
        'Content-Type': FetchMediaContentTypes.JSON
      },
      body: JSON.stringify({
        cmd: 'sessions.destroy',
        session: getCurrentSession()
      })
    },
    FetchResultTypes.JSON
  );
}

/**
 * Retrieves the current session.
 *
 * @returns The current session as a string.
 */
export function getCurrentSession(): string {
  return currentSession;
}
