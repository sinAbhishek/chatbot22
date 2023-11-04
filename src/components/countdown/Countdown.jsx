import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

const Countdown = () => {
  const [count, setcount] = useState({ value: 5 });
  const navigate = useNavigate();
  useEffect(() => {
    count.value === 0 && navigate("/success");
  }, [count.value]);
  useEffect(() => {
    const inter = setInterval(() => {
      setcount((prev) => {
        return { value: prev.value - 1 };
      });
    }, 1000);
    count.value === 0 && clearInterval(inter);
    return () => clearInterval(inter);
  }, [count.value]);

  return (
    <div>
      <h1 className=" text-cyan-700 font-semibold">
        In <span className=" text-rose-700 mx-2 font-bold">{count.value}</span>{" "}
        seconds,bot will exit
      </h1>
    </div>
  );
};

export default Countdown;
