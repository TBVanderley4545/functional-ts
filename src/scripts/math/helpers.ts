import { filter } from '../arrays/filter';
import { length } from '../arrays/length';

export const isEven = (num: number): boolean => num % 2 === 0;

export const isOdd = (num: number): boolean => !isEven(num);

export const isDivisble = (testNumber: number, divisor: number): boolean =>
  testNumber % divisor === 0;

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

export const multiply = (multiplicand: number, multiplier: number) =>
  multiplicand * multiplier;

export const divide = (dividend: number, divisor: number) => dividend / divisor;

export const doubled = (val: number): number => multiply(val, 2);

export const halved = (val: number): number => divide(val, 2);
