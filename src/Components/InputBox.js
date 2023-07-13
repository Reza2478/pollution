import React from "react";

const InputBox = ({ fn }) => {
  return (
    <React.Fragment>
      <label className="text-sm text-white font-semibold mb-3">
        مقادیر آلودگی کارخانه ها را وارد کنید
      </label>
      <input dir="ltr" className="p-1" type="text" onChange={fn} />
    </React.Fragment>
  );
};

export default InputBox;
