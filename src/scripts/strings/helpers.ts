export const split =
  (splitCharater: string) =>
  (input: string): Array<string> =>
    input.split(splitCharater);

export const join =
  (joinCharacter: string) =>
  (input: Array<string>): string =>
    input.join(joinCharacter);

export const upperCase = (input: string) => input.toUpperCase();
