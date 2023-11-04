import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { input } from "../../redux/slice";
import { useSelector } from "react-redux";

const Input = (props) => {
  const dispatch = useDispatch();
  const [hide, sethide] = useState(false);
  const name = useSelector((state) => state.user.name);
  const handlechange = (e) => {
    dispatch(input(e.target.value));
  };
  const submit = () => {
    sethide(true);
    props.actionProvider.handleinput();
  };
  return (
    <>
      {!hide && (
        <div>
          <input
            onChange={handlechange}
            type="text"
            placeholder="Enter your name"
            className=" py-1 px-2 rounded-md text-sm border border-gray-600"
          />
          <button
            onClick={() => submit()}
            className="  bg-green-400 px-2 py-1 rounded-md w-max mt-2 text-sm font-semibold text-slate-100"
          >
            Submit
          </button>
        </div>
      )}
    </>
  );
};

export default Input;
