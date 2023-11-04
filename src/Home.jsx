import React from "react";
import { useLocation, useNavigate } from "react-router";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-screen h-screen flex flex-col items-center justify-center">
      <div className=" flex justify-center items-center flex-col">
        <img className=" w-48 h-48" src="./pngwing.com.png" alt="" />
        <h1 className=" font-bold text-slate-600 text-2xl my-2">
          ENTER INTO STUDENT INFO SYSTEM
        </h1>
      </div>

      <button
        className=" bg-rose-500 w-max px-2 py-1 rounded-md text-white font-medium"
        onClick={() => navigate("/chatbot")}
      >
        Enroll now
      </button>
    </div>
  );
};

export default Home;
