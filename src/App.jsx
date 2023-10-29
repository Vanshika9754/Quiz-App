import React from "react";
import QuizzApp from "./Components/QuizzApp";
import { dummyData } from "./Data/dummyData";
import "./Components/Quiz.css";

function App() {
  return (
    <div className="App">
      <h1>
        <span className="extra">R</span>eact{"  "}
        <span className="extra">Q</span>uiz <span className="extra">A</span>pp
      </h1>
      <QuizzApp questions={dummyData} />
    </div>
  );
}

export default App;
