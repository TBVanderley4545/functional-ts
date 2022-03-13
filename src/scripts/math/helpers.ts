import { filter } from '../arrays/filter';
import { length } from '../arrays/length';

export const isEven = (num: number): boolean => num % 2 === 0;

export const isOdd = (num: number): boolean => !isEven(num);

export const greaterThanFour = (num: number): boolean => num > 4;

export const isPrime =
  (arr: Array<number>) =>
  (num: number): boolean => {
    if (num <= 1) {
      return false;
    }

    const possibleFactors = filter(
      (curr: number) => curr > 1 && curr < num,
      arr
    );

    const factors = filter((curr: number) => num % curr === 0, possibleFactors);

    return length(factors) === 0;
  };
