import React, { useEffect, useState } from "react";

//Helpers
import { show } from "./Helper/Functions";

//Components
import Calculations from "./Calculations";
import Title from "./Title";
import InputBox from "./InputBox";
import Code from "./Code";

//Images
import Earth from "../Assets/Images/27634.jpg";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState({
    sumOfMinimal: null,
    sumOfPollution: null,
    pollution: [],
    minimalPollution: [],
    filterCount: 0,
  });

  useEffect(() => {
    if (inputValue !== "") setData({ ...show(inputValue) });
  }, [inputValue]);

  const changeHandler = (e) => {
    let reg = new RegExp(/^(?!,$)[\d,.]+$/);
    if (e.target.value.match(reg)) {
      setTimeout(() => {
        setInputValue(e.target.value);
      }, 1000);
      setError("");
    } else {
      setError("لطفا فقط از اعداد همراه با علامت ( , ) استفاده کنید");
      setInputValue("");
    }
  };

  

  return (
    <div className="bg-blue-100 h-[100vh] flex flex-col items-center justify-center p-8">
      <div className="bg-blue100 w-full h-[100vh]  flex md:flex-row flex-col items-center justify-center">
        <Code/>
        <div className="flex  shadow-md">
          <div>
            <img src={Earth} alt="pic" className="max-w-sm hidden md:block" />
          </div>
          <div className="bg-orange-400 flex flex-col p-4 w-72">
            <Title />
            <InputBox fn={changeHandler} />
            {error ? (
              <p className="text-red-800 text-sm mt-5">{error}</p>
            ) : (
              inputValue && (
                <div className="flex flex-col">
                  <p className="text-white margin-top-5 my-3 drop-shadow-md">
                    حداقل تعداد فیلتر برای کم کردن آلودگی: {data.filterCount}
                  </p>
                  <Calculations
                    list={data.pollution}
                    sum={data.sumOfPollution}
                    status="before"
                  />
                  <Calculations
                    list={data.minimalPollution}
                    sum={data.sumOfMinimal}
                    status="after"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
