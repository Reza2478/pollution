export const sortArray = (data) => {
  const result = data.sort((a, b) => b - a);
  return result;
};

export const calculate = (data) => {
  const sum = data.reduce((acc, curr) => acc + curr, 0);
  return sum;
};

export const func1 = (data) => {
  if (data !== "") {
    let curr = splitter(data);
    const sum = calculate(curr);
    let newArr = sortArray(curr);
    let newSum = calculate(curr);
    let counter = 0;
    while (sum / 2 <= newSum) {
      newArr = sortArray(newArr);
      newArr[0] = newArr[0] / 2;
      newSum = calculate(newArr);
      counter++;
    }

    return [counter, splitter(data), newArr, newSum, sum];
  } 
};

export const splitter = (value) => {
  let result = value.split(",");
  result = result.map(Number);
  return result;
};

export const show = (value) => {
  const result = func1(value);
  console.log(result[1])
  return {
    counter: result[0],
    pollution: result[1],
    minimalPollution: result[2],
    sumOfMinimal: result[3],
    sumOfPollution: result[4],
  };
};
