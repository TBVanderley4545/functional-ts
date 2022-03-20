import { map } from '../arrays/map';
import { reduce } from '../arrays/reduce';
import { join, split, upperCase } from '../strings/helpers';
import { pipeline } from './utilities';

export const desnake = (input: string): Array<string> => split('_')(input);

export const capitalizeFirstLetter = (input: string) =>
  pipeline(
    split(''),
    reduce(
      (acc: string, curr: string, index: number) =>
        `${acc}${index === 0 ? upperCase(curr) : curr}`,
      ''
    )
  )(input);

export const camelize = (input: Array<string>): Array<string> =>
  map((curr: string, index: number) =>
    index !== 0 ? capitalizeFirstLetter(curr) : curr
  )(input);

export const pascalize = (input: Array<string>): Array<string> =>
  map((curr: string) => capitalizeFirstLetter(curr))(input);

export const snakeToCamel = (input: string): string =>
  pipeline(desnake, camelize, join(''))(input);

export const snakeToTrain = (input: string): string =>
  pipeline(desnake, pascalize, join('-'))(input);
