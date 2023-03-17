declare module "lodash" {
  function head<T>(array: number[]): T | undefined;
  function hasIn(object: object, path: string | string[]): boolean;
  function isBoolean(value: boolean): boolean;
  function toString(value: unknown): string;
  function split(
    string: string,
    separator: RegExp | string,
    limit?: number
  ): Array<string>;
  function hasPath(object: object, path: Array<string> | string): boolean;
  function filter<T>(
    array: Array<T> | Record<string, T>,
    predicate?: (value: T, index: string | number, array: any) => boolean
  ): Array<T>;
  function every<T>(array: ArrayLike<T>, predicate: (value: T, index: number, array: ArrayLike<T>) => boolean): boolean;
  function map<T, U>(array: T[], iteratee: (value: T, index: number, array: T[]) => U): U[];
}

