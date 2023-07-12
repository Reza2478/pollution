import React, { useEffect, useState } from "react";

//Helpers
import { show } from "./Helper/Functions";

//Images
import Earth from "../Assets/Images/27634.jpg";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState({
    sumOfMinimal: 0,
    sumOfPollution: 0,
    pollution: [],
    minimalPollution: [],
    counter: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      if(inputValue!=="")setData({ ...show(inputValue) });
    }, 1000);
  }, [inputValue]);

  const changeHandler = (e) => {
    let reg = new RegExp(/^(?!,$)[\d,.]+$/);
    if (e.target.value.match(reg)) {
      setInputValue(e.target.value);
      setError("");
    } else {
      setError("لطفا فقط از اعداد همراه با علامت ( , ) استفاده کنید");
      setInputValue("");
    }
  };

  return (
    <div className="bg-blue-100 h-[100vh] flex flex-col items-center justify-center p-8">
      <div className="bg-blue100 w-full h-[100vh]  flex items-center justify-center">
        <div className="flex shadow-md">
          <div>
            <img src={Earth} alt="pic" className="max-w-sm" />
          </div>
          <div className="bg-orange-400 flex flex-col p-4 w-72">
            <p className="text-white text-xl font-bold focus:outline-none border-none mb-5">
              محاسبه ی آلودگی
            </p>
            <label className="text-sm text-white font-semibold mb-2">
              مقادیر آلودگی کارخانه ها را وارد کنید
            </label>
            <input
              dir="ltr"
              className="p-1"
              type="text"
              onChange={changeHandler}
            />
            {error ? (
              <p className="text-red-800 text-sm mt-5">{error}</p>
            ) : (
              <p className="text-white margin-top-5 mt-5">
                حداقل تعداد فیلتر برای کم کردن آلودگی: {data.counter}
              </p>
            )}

            <div className="flex">
              {data.pollution !== undefined &&
                data.pollution.map((item) => <p key={item}>{`${item}+`}</p>)}
            </div>
            <div className="flex">
              {data.minimalPollution !== undefined &&
                data.minimalPollution.map((item) => (
                  <p key={item}>{`${item}+`}</p>
                ))}
            </div>
            {data.sumOfPollution !== undefined && <p>{data.sumOfPollution}</p>}
            {data.sumOfMinimal !== undefined && <p>{data.sumOfMinimal}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
