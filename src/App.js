import { useEffect, useState } from "react";
import "./App.css";
import Success from "./success";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyComponent from "./chatbot/chatbot";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<MyComponent />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
