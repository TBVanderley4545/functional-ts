import { isDivisble } from '../math/helpers';

export const fizzBuzz = (input: number): number | string => {
  const divisibleByThree = isDivisble(input, 3);
  const divisibleByFive = isDivisble(input, 5);

  if (divisibleByThree && divisibleByFive) {
    return 'fizzbuzz';
  }

  if (divisibleByThree) {
    return 'fizz';
  }

  if (divisibleByFive) {
    return 'buzz';
  }

  return input;
};
