export interface FlareSolverrResponse extends ResponseBaseProperties {
  solution: FlareSolverrSolution;
}

export interface FlareSolverrSessionCreateResponse extends ResponseBaseProperties {
  session: string;
}

interface FlareSolverrSolution {
  url: string;
  status: number;
  cookies: never;
  userAgent: string;
  headers: never;
  response: string;
}

interface ResponseBaseProperties {
  status: string;
  message: string;
  startTimestamp: number;
  endTimestamp: number;
  version: string;
}
