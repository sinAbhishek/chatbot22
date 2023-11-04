import React, { useState } from "react";

const Start = (props) => {
  const [hide, sethide] = useState(false);
  const handle = () => {
    props.actionProvider.handlegotit();
    sethide(true);
  };
  return (
    <>
      {!hide && (
        <div>
          <button
            className="  border border-slate-400 w-max px-2 py-1 font-medium rounded-md hover:bg-black hover:text-white transition duration-200"
            onClick={() => handle()}
          >
            Got it
          </button>
        </div>
      )}
    </>
  );
};

export default Start;
