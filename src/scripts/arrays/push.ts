export const push =
  <T>(element: T) =>
  (array: Array<T>) =>
    [...array, element];
