import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { age } from "../../redux/slice";
const Age = (props) => {
  const [hide, sethide] = useState(false);
  const dispatch = useDispatch();
  const agerange = [];
  for (let i = 18; i <= 40; i++) {
    agerange.push(i);
  }
  const handlesubmit = () => {
    props.actionProvider.handleage();
    sethide(true);
  };
  return (
    <>
      {!hide && (
        <div className=" flex flex-col ">
          <select
            onChange={(e) => dispatch(age(e.target.value))}
            className=" w-32 bg-slate-100 text-slate-800 py-2 px-2 rounded-md border border-slate-400"
          >
            {agerange[0] && agerange.map((c) => <option>{c}</option>)}
          </select>
          <button
            className=" bg-fuchsia-400 px-2 py-1 rounded-md w-max mt-2 text-sm font-semibold text-slate-100"
            onClick={handlesubmit}
          >
            Submit
          </button>
        </div>
      )}
    </>
  );
};

export default Age;
