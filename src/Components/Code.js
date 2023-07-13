import React from "react";

const Code = () => {
  const code =
    'if (data !== "") { \n let curr = splitter(data);\nconst sumOfPollution = calculate(curr);\nlet minimalPollution = sortArray(curr);\nlet sumOfMinimal = calculate(curr);\nlet filterCount = 0;\nwhile (sumOfPollution / 2 <= sumOfMinimal) {\n minimalPollution = sortArray(minimalPollution);\nminimalPollution[0] = minimalPollution[0] / 2;\nsumOfMinimal = calculate(minimalPollution);\nfilterCount++;\n}\nreturn [filterCount, splitter(data), minimalPollution, sumOfMinimal, sumOfPollution];\n}';
  return (
    <div className="bg-white m-2 p-2 w-96 text-slate-600 shadow-md rounded-md">
      <p className="font-bold drop-shadow-md mb-7">تابع نوشته شده برای انجام عملیات</p>
      <text dir="ltr">{code.split('\n').map(i=><p>{i}</p>)}</text>
    </div>
  );
};

export default Code;
