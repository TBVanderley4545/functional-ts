export const iterativeFibonacci = (sequenceIndex: number): number => {
  let firstValue = 0;
  let secondValue = 1;
  let next = 0;

  if (sequenceIndex === 0) {
    return firstValue;
  }

  if (sequenceIndex === 1) {
    return secondValue;
  }

  for (let i = 1; i < sequenceIndex; i += 1) {
    next = firstValue + secondValue;

    firstValue = secondValue;
    secondValue = next;
  }

  return next;
};

export const recursiveFibonacci = (
  sequenceIndex: number,
  cache: Record<number, number> = {}
): number => {
  if (sequenceIndex === 0) {
    return 0;
  }

  if (sequenceIndex === 1) {
    return 1;
  }

  if (cache[sequenceIndex]) {
    return cache[sequenceIndex];
  }

  // eslint-disable-next-line no-param-reassign
  cache[sequenceIndex] =
    recursiveFibonacci(sequenceIndex - 1, cache) +
    recursiveFibonacci(sequenceIndex - 2, cache);

  return cache[sequenceIndex];
};

console.log('iterative', iterativeFibonacci(100));
console.log('recursive', recursiveFibonacci(100));
