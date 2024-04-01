import { FetchMediaContentTypes, FetchMethods, FetchResultTypes, fetch } from '@sapphire/fetch';
import { userAgentHeader } from '../../../utils.js';
import type { FlareSolverrResponse, FlareSolverrSessionCreateResponse } from './types.js';

let currentSession: string;
let cookies: null | object;
let sessionTicker: number = 0;

export async function fetchFlareSolverr(url: URL | string): Promise<FlareSolverrResponse> {
  await createFlaresolverrSession();

  const response = await fetch<FlareSolverrResponse>(
    'http://localhost:8191/v1',
    {
      method: FetchMethods.Post,
      headers: {
        ...userAgentHeader,
        'Content-Type': FetchMediaContentTypes.JSON
      },
      body: JSON.stringify({
        cmd: 'request.get',
        url,
        maxTimeout: 120_000,
        // session: getCurrentSession(),
        cookies
      })
    },
    FetchResultTypes.JSON
  );

  sessionTicker++;
  cookies = response.solution.cookies;

  if (sessionTicker >= 50) {
    cookies = null;
    await destroyFlaresolverrSession();
  }

  return response;
}

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
