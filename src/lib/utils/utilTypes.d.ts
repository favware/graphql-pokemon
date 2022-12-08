/**
 * Removes `null`, `undefined` and `?` from an object
 * This essentially combines `Required<T>`,
 * `NonNullable<T>` and `NonUndefined<T>`
 */
export type NonNullish<T> = {
  [P in keyof T]-?: Exclude<T[P], undefined | null>;
};

export type UnwrapArray<T extends unknown[]> = T extends (infer U)[] ? U : never;

export type Generation = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
