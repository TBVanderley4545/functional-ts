import { pipeline } from '../pipeline/utilities';
import { curriedConcat } from './concat';
import { slice } from './slice';

export const update =
  <T>(index: number) =>
  (value: T) =>
  (array: Array<T>) =>
    pipeline(
      slice(0, index),
      curriedConcat([value]),
      curriedConcat(slice(index + 1)(array))
    )(array);
