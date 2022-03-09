const numberSet: Array<number> = [2, 4, 6, 8, 10];

export const iterativeSum = (numbers: Array<number>): number => {
  let total = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }

  return total;
};

export const recursiveSum = (numbers: Array<number>): number => {
  if (numbers.length === 0) {
    return 0;
  }

  if (numbers.length === 1) {
    return numbers[0];
  }

  return numbers[0] + recursiveSum(numbers.slice(1));
};

console.log(iterativeSum(numberSet));
console.log(recursiveSum(numberSet));
