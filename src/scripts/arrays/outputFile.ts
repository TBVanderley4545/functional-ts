import {
  doubled,
  greaterThanFour,
  halved,
  isEven,
  isOdd,
  isPrime,
} from '../math/helpers';
import { filter } from './filter';
import { fizzBuzz } from './fizzBuzz';
import { map } from './map';
import { wholes } from './sampleInput';

console.log(filter(isEven, wholes));
console.log(filter(isOdd, wholes));
console.log(filter(greaterThanFour, wholes));
console.log(filter(isPrime(wholes), wholes));

console.log(map(doubled, wholes));
console.log(map(halved, wholes));
console.log(map(fizzBuzz, wholes));
