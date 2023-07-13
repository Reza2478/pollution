export const sortArray = (data) => {
  const result = data.sort((a, b) => b - a);
  return result;
};

export const calculate = (data) => {
  const sum = data.reduce((acc, curr) => acc + curr, 0);
  return sum;
};

export const operation = (data) => {
  if (data !== "") {
    let curr = splitter(data);
    const sumOfPollution = calculate(curr);
    let minimalPollution = sortArray(curr);
    let sumOfMinimal = calculate(curr);
    let filterCount = 0;
    while (sumOfPollution / 2 <= sumOfMinimal) {
      minimalPollution = sortArray(minimalPollution);
      minimalPollution[0] = minimalPollution[0] / 2;
      sumOfMinimal = calculate(minimalPollution);
      filterCount++;
    }
    return [filterCount, splitter(data), minimalPollution, sumOfMinimal, sumOfPollution];
  } 
};

export const splitter = (value) => {
  let result = value.split(",");
  result = result.map(Number);
  return result;
};

export const show = (value) => {
  const result = operation(value);
  console.log(result[1])
  return {
    filterCount: result[0],
    pollution: result[1],
    minimalPollution: result[2],
    sumOfMinimal: result[3],
    sumOfPollution: result[4],
  };
};
