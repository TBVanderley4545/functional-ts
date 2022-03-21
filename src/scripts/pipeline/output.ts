import { snakeToCamel, snakeToTrain } from './strings';
import {
  composedPipe,
  composedPipe2,
  loveSomeShow,
  showSomeLove,
} from './utilities';

console.log(showSomeLove('pipeline'));
console.log(showSomeLove('pure function'));
console.log(showSomeLove('coffee break'));
console.log(loveSomeShow('pipeline'));
console.log(composedPipe('composition'));
console.log(composedPipe2('composition'));

console.log(snakeToCamel('super_cool_variable'));
console.log(snakeToCamel('very_long_variables_should_also_work'));
console.log(snakeToCamel('edgecase'));

console.log(snakeToTrain('snake_case_string'));
console.log(snakeToTrain('random_other_casing'));
