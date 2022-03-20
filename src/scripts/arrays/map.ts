import { concat } from './concat';
import { head } from './head';
import { length } from './length';
import { tail } from './tail';

export const map =
  (predicateFn: Function, index: number = 0) =>
  <T>(inputArray: Array<T>): Array<T> => {
    if (length(inputArray) === 0) {
      return [];
    }

    const mappedFirst = predicateFn(head(inputArray), index);

    return concat([
      [mappedFirst],
      map(predicateFn, index + 1)(tail(inputArray)),
    ]);
  };
