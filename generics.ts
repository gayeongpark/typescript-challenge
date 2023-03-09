//Call Singnature
type lastFn = <T>(array: T[]) => T;
type prependFn = <T>(array: T[], item: T) => T[];

//This is the function that returns last element.
function lastFn<T>(array: T[]) {
  return array[array.length - 1];
}

//This is the function that adds item at the begining.
function prependFn<T>(array: T[], item: T) {
  return [item, ...array];
}
