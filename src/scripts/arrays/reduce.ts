import { head } from './head';
import { length } from './length';
import { tail } from './tail';

export const reduce = <T>(
  predicateFn: Function,
  initialValue: T,
  inputArray: Array<T>
): T => {
  if (length(inputArray) === 0) {
    return initialValue;
  }

  const currentReducer = predicateFn(initialValue, head(inputArray));

  return reduce(predicateFn, currentReducer, tail(inputArray));
};
