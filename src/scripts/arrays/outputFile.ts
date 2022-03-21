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
import { pipeline } from '../pipeline/utilities';
import { filter } from './filter';
import { fizzBuzz } from './fizzBuzz';
import { map } from './map';
import { pop } from './pop';
import { push } from './push';
import { reduce } from './reduce';
import { wholesSubset, wholes } from './sampleInput';
import { slice } from './slice';
import { update } from './update';

console.log(filter(isEven, wholes));
console.log(filter(isOdd, wholes));
console.log(filter(greaterThanFour, wholes));
console.log(filter(isPrime(wholes), wholes));

console.log(map(doubled)(wholes));
console.log(map(halved)(wholes));
console.log(map(fizzBuzz)(wholes));

console.log(reduce<number>(add, 0)(wholes));
console.log(reduce<number>(max, 0)(wholes));

console.log(wholesSubset);
console.log(push(4)(wholesSubset));

console.log(wholesSubset);
console.log(update<number>(1)(4)(wholesSubset));

console.log(wholesSubset);
console.log(pop(wholesSubset));
console.log(pipeline(pop, pop)(wholesSubset));

console.log(wholesSubset);
console.log(slice(0, 3)(wholesSubset));

console.log(wholesSubset);
