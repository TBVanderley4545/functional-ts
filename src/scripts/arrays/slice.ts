import { reduce } from './reduce';

export const slice =
  <T>(indexStart: number = 0, indexEnd: number = Infinity) =>
  (array: Array<T>) =>
    reduce(
      (acc: Array<T>, curr: T, index: number) =>
        index >= indexStart && index < indexEnd ? [...acc, curr] : acc,
      []
    )(array);
