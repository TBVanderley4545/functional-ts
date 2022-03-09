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

export const recursiveFibonacci = (sequenceIndex: number): number => {
  if (sequenceIndex === 0) {
    return 0;
  }

  if (sequenceIndex === 1) {
    return 1;
  }

  return (
    recursiveFibonacci(sequenceIndex - 1) +
    recursiveFibonacci(sequenceIndex - 2)
  );
};

console.log(iterativeFibonacci(8));
console.log(recursiveFibonacci(8));
