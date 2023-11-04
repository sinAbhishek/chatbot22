import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes("hello")) {
      actions.handlehello();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {
            handlegotit: actions.handlegotit,
            handleschedule: actions.handleschedule,
            handleinput: actions.submitinput,
            handleage: actions.submitage,
          },
        });
      })}
    </div>
  );
};

export default MessageParser;
