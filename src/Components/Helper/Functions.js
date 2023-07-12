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
    data = splitter(data);
    const sum = calculate(data);
    let newArr = sortArray(data);
    let newSum = calculate(data);
    let counter = 0;
    while (sum / 2 <= newSum) {
      newArr = sortArray(newArr);
      newArr[0] = newArr[0] / 2;
      newSum = calculate(newArr);
      counter++;
    }

    return [ counter, newArr, newSum, sum ];
  } else return 0;
};

export const splitter = (value) => {
  let result = value.split(",");
  result = result.map(Number);
  return result;
};

export const show = (pollution) => {
  const arr=splitter(pollution)
  const result = func1(pollution);
  return {
    counter:result[0],
    pollution: arr,
    minimalPollution: result[1],
    sumOfMinimal: result[2],
    sumOfPollution: result[3],
  };
};
