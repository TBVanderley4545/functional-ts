import { concat } from './concat';
import { head } from './head';
import { length } from './length';
import { tail } from './tail';

export const filter = <T>(predicateFn: Function, array: Array<T>): Array<T> => {
  if (length(array) === 0) return [];

  const firstItem = head(array);
  const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];

  return concat(filteredFirst, filter(predicateFn, tail(array)));
};
