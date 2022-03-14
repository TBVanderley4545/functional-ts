import { filter } from '../arrays/filter';
import { length } from '../arrays/length';

export const isEven = (num: number): boolean => num % 2 === 0;

export const isOdd = (num: number): boolean => !isEven(num);

export const isDivisble = (divisor: number, testNumber: number): boolean =>
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

export const add = (addend1: number, addend2: number) => addend1 + addend2;

export const multiply = (multiplier: number, multiplicand: number) =>
  multiplicand * multiplier;

export const divide = (divisor: number, dividend: number) => dividend / divisor;

export const doubled = (val: number): number => multiply(2, val);

export const halved = (val: number): number => divide(2, val);

export const max = (firstNum: number, secondNum: number) =>
  firstNum > secondNum ? firstNum : secondNum;
