import { greaterThanFour, isEven, isOdd, isPrime } from '../math/helpers';
import { filter } from './filter';
import { wholes } from './sampleInput';

console.log(filter(isEven, wholes));
console.log(filter(isOdd, wholes));
console.log(filter(greaterThanFour, wholes));
console.log(filter(isPrime(wholes), wholes));
