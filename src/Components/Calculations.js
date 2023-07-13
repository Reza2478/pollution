import React from "react";

const Calculations = ({ list, sum ,status}) => {
  return (
    <div className="flex flex-col mb-3">
      <p className="drop-shadow-md text-white">
        {status==='before'?'واحد آلودگی ها قبل از فیلتر':'واحد آلودگی ها بعد از فیلتر'}
      </p>
      <div className="flex">
        {sum !== undefined && <p className="text-yellow-100">{sum}=</p>}
        {list !== undefined &&
          list.map((item, i, list) => (
            <p className="text-white" key={i}>
              {i + 1 === list.length ? `${item}` : `${item}+`}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Calculations;
