import { isDivisble } from '../math/helpers';

export const fizzBuzz = (input: number): number | string => {
  const fizz = isDivisble(input, 3) ? 'fizz' : '';
  const buzz = isDivisble(input, 5) ? 'buzz' : '';

  return fizz || buzz ? `${fizz}${buzz}` : input;
};
