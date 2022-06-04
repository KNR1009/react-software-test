import React from "react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import { RenderInput } from "./RenderInput";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RenderInput
        outputConsole={(e) => {
          console.log(e);
        }}
      ></RenderInput>
    </div>
  );
}

export default App;
