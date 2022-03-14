import { isDivisble } from '../math/helpers';

export const fizzBuzz = (input: number): number | string => {
  const fizz = isDivisble(3, input) ? 'fizz' : '';
  const buzz = isDivisble(5, input) ? 'buzz' : '';

  return fizz || buzz ? `${fizz}${buzz}` : input;
};
