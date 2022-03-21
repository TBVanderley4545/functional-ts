import { length } from './length';
import { slice } from './slice';

export const pop = <T>(array: Array<T>) => slice(0, length(array) - 1)(array);
