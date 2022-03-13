import { concat } from './concat';
import { head } from './head';
import { length } from './length';
import { tail } from './tail';

export const filter = <T>(
  predicateFn: Function,
  inputArray: Array<T>
): Array<T> => {
  if (length(inputArray) === 0) return [];

  const firstItem = head(inputArray);
  const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];

  return concat([filteredFirst, filter(predicateFn, tail(inputArray))]);
};
