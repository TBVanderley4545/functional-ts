import { filter } from './filter';
import { wholes } from './sampleInput';

const filterPredicate = (curr: number) => curr % 2 === 0;

console.log(filter(filterPredicate, wholes));
