import { length } from './length';
import { tail } from './tail';

export const concat = <T>(inputArrays: Array<Array<T>>): Array<T> => {
  if (length(inputArrays) === 0) {
    return [];
  }

  if (length(inputArrays) === 1) {
    return inputArrays[0];
  }

  return [...inputArrays[0], ...concat(tail(inputArrays))];
};
