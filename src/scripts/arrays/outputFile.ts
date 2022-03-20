import {
  add,
  doubled,
  greaterThanFour,
  halved,
  isEven,
  isOdd,
  isPrime,
  max,
} from '../math/helpers';
import { filter } from './filter';
import { fizzBuzz } from './fizzBuzz';
import { map } from './map';
import { reduce } from './reduce';
import { wholes } from './sampleInput';

console.log(filter(isEven, wholes));
console.log(filter(isOdd, wholes));
console.log(filter(greaterThanFour, wholes));
console.log(filter(isPrime(wholes), wholes));

console.log(map(doubled)(wholes));
console.log(map(halved)(wholes));
console.log(map(fizzBuzz)(wholes));

console.log(reduce<number>(add, 0)(wholes));
console.log(reduce<number>(max, 0)(wholes));
