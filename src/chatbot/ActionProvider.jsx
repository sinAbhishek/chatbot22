import React, { useEffect, useState } from "react";
import { createClientMessage } from "react-chatbot-kit";
import { useSelector } from "react-redux";
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const store = useSelector((state) => state.user);

  const handlehello = () => {
    const botmessage = createChatBotMessage("hello");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmessage],
    }));
  };
  const handlegotit = () => {
    const botmessage = createClientMessage("Got it !");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmessage],
    }));
    handlecalendar();
  };

  const handlecalendar = () => {
    const botmessage = createChatBotMessage("Pick a slot !", {
      widget: "Calendar",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmessage],
    }));
  };
  const handleschedule = (c) => {
    const botmessage = createClientMessage(c, {});
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmessage],
    }));
    handleinput();
  };
  const handleinput = () => {
    const botmessage = createChatBotMessage("Enter your name", {
      widget: "Input",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmessage],
    }));
  };
  const submitinput = () => {
    const botmessage = createClientMessage(store.name);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmessage],
    }));
    handleage();
  };
  const handleage = () => {
    const botmessage = createChatBotMessage("Enter your age", {
      widget: "Age",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmessage],
    }));
  };
  const submitage = () => {
    const botmessage = createClientMessage(store.age);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmessage],
    }));
    handleredirect();
  };
  const handleredirect = () => {
    const botmessage = createChatBotMessage("Thank you.", {
      widget: "Countdown",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmessage],
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handlehello,
            handlegotit,
            handleschedule,
            submitinput,
            submitage,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
