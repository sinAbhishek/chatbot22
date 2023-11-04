import React from "react";
import { useSelector } from "react-redux";
const Success = () => {
  const store = useSelector((state) => state.user);
  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-gray-900">
      <h1 className=" text-white font-semibold text-xl md:text-2xl mx-4">
        Your name <span className=" text-red-400">{store.name}</span> aged{" "}
        <span className=" text-red-400">{store.age}</span> has been added to
        student system.You may now exit
      </h1>
    </div>
  );
};

export default Success;
