import { createChatBotMessage } from "react-chatbot-kit";
import { createClientMessage } from "react-chatbot-kit";
import Start from "../components/Start";
import Calendar from "../components/calendar/Calendar";
import Input from "../components/input/input";
import Age from "../components/age/Age";
import Countdown from "../components/countdown/Countdown";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello,Welcome to student info system!`, {
      widget: "Gotit",
    }),
  ],
  widgets: [
    {
      widgetName: "Gotit",
      widgetFunc: (props) => <Start {...props} />,
    },
    {
      widgetName: "Calendar",
      widgetFunc: (props) => <Calendar {...props} />,
    },
    {
      widgetName: "Input",
      widgetFunc: (props) => <Input {...props} />,
    },
    {
      widgetName: "Age",
      widgetFunc: (props) => <Age {...props} />,
    },
    {
      widgetName: "Countdown",
      widgetFunc: (props) => <Countdown {...props} />,
    },
  ],
};

export default config;
