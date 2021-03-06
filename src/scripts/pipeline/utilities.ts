import { head } from '../arrays/head';
import { length } from '../arrays/length';
import { reduce } from '../arrays/reduce';
import { reverse } from '../arrays/reverse';
import { tail } from '../arrays/tail';

export const pipeline =
  <T>(...functionList: Array<Function>) =>
  (pipelineInput: T): T => {
    if (length(functionList) === 0) {
      return pipelineInput;
    }

    const transformedInput = head(functionList)(pipelineInput);

    if (length(functionList) === 1) {
      return transformedInput;
    }

    return pipeline<T>(...tail(functionList))(transformedInput);
  };

export const pipeline2 =
  <T>(...functionList: Array<Function>) =>
  (pipelineInput: T): T =>
    reduce(
      (val: string, currentFunc: Function) => currentFunc(val),
      pipelineInput
    )(functionList);

export const compose =
  <T>(...functionList: Array<Function>) =>
  (pipelineInput: T): T =>
    pipeline2<T>(...reverse(functionList))(pipelineInput);

export const pluralize = (singularWord: string) => `${singularWord}s`;

export const heart = (word: string) => `I ❤️  ${word}`;

export const exclaim = (sentence: string) => `${sentence}!`;

export const showSomeLove = (input: string) =>
  pipeline2(pluralize, heart, exclaim)(input);

export const loveSomeShow = (input: string) =>
  pipeline2(exclaim, heart, pluralize)(input);

export const composedShowSomeLove = (input: string) =>
  compose(exclaim)(compose(pluralize, heart)(input));

export const composedPipe = (input: string) =>
  pipeline2(exclaim)(pipeline2(heart, pluralize)(input));

export const composedPipe2 = (input: string) =>
  pipeline2(pipeline2(pluralize, heart), exclaim)(input);
