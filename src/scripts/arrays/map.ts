import { concat } from './concat';
import { head } from './head';
import { length } from './length';
import { tail } from './tail';

export const map = <T>(
  predicateFn: Function,
  inputArray: Array<T>
): Array<T> => {
  if (length(inputArray) === 0) {
    return [];
  }

  const mappedFirst = predicateFn(head(inputArray));

  return concat([[mappedFirst], map(predicateFn, tail(inputArray))]);
};
