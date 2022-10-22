import React from "react";
import "./App.css";
import LeftSection from "./components/left-section/Leftsection";
import MiddleSection from "./components/middle-section/Middlesection";
import RightSection from "./components/right-section/Rightsection";

function App() {
  return (
    <div>
      <div className="flex">
        <div className="w-[20%]"><LeftSection /></div>
        <div className="w-[100%] md:w-[50%]"><MiddleSection /></div>
        <div className="w-[30%]"><RightSection /></div>
      </div>
    </div>
  );
}

export default App;
