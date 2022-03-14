import { head } from './head';
import { length } from './length';
import { tail } from './tail';

export const reduce = <T, T2 = T>(
  predicateFn: Function,
  initialValue: T2,
  inputArray: Array<T>
): T2 => {
  if (length(inputArray) === 0) {
    return initialValue;
  }

  const currentReducer = predicateFn(initialValue, head(inputArray));

  return reduce(predicateFn, currentReducer, tail(inputArray));
};
