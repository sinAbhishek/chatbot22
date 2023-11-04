import React from "react";
import { useState } from "react";
import { weekdays, Months } from "../../data/data";

const Dateslots = ({ data, active }) => {
  const date = new Date(data).getDate();
  const day = new Date(data).getDay();
  const Month = new Date(data).getMonth();
  const [push, setpush] = useState([]);

  return (
    <>
      <div className=" flex justify-center items-center flex-col">
        <div className=" flex">
          <h1
            style={{ color: active === data ? "white" : "#34c6eb" }}
            className=" flex justify-center items-center text-xs font-bold "
          >
            {date}
          </h1>
          <h1
            style={{ color: active === data ? "white" : "#34c6eb" }}
            className=" flex justify-center items-center text-xs mx-1 font-bold "
          >
            {Months[Month]}
          </h1>
        </div>
        <h1 className=" text-xs font-semibold">{weekdays[day]}</h1>
      </div>
    </>
  );
};

export default Dateslots;
