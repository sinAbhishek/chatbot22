import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userreducer from "./redux/slice";
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({
  reducer: {
    user: userreducer,
  },
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
