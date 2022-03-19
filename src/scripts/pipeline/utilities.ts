import { head } from '../arrays/head';
import { length } from '../arrays/length';
import { tail } from '../arrays/tail';

export const pipeline =
  (...functionList: Array<Function>) =>
  <T>(pipelineInput: T): T => {
    if (length(functionList) === 0) {
      return pipelineInput;
    }

    const transformedInput = head(functionList)(pipelineInput);

    if (length(functionList) === 1) {
      return transformedInput;
    }

    return pipeline(...tail(functionList))(transformedInput);
  };

export const pluralize = (singularWord: string) => `${singularWord}s`;

export const heart = (word: string) => `I ❤️ ${word}`;

export const exclaim = (sentence: string) => `${sentence}!`;

export const showSomeLove = (input: string) =>
  pipeline(pluralize, heart, exclaim)(input);

export const loveSomeShow = (input: string) =>
  pipeline(exclaim, heart, pluralize)(input);
