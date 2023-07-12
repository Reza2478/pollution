import React, { useEffect, useState } from "react";

//Helpers
import { func1 } from "./Helper/Functions";

const Form = () => {
  const [pollution, setPollution] = useState("");
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      console.log(pollution);
      const result = func1(pollution);
      setCounter(result);
    }, 1000);
  }, [pollution]);

  const changeHandler = (e) => {
    let reg = /(^\d,+$)/;
    if (e.target.value.match(reg)) {
      setPollution(e.target.value);
      setError("");
    } else {
      setError("لطفا فقط از اعداد همراه با علامت (,) استتفاده کنید");
      setPollution('');
    }
  };

  return (
    <div>
      <input type="text" onChange={changeHandler} />
      {error ? <h1>{error}</h1>:
      <p>counter:{counter}</p>}
    </div>
  );
};

export default Form;
