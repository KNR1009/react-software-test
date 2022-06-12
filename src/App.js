import React from "react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import { RenderInput } from "./RenderInput";
import { FrameworkList } from "./FrameworkList";
import { Reviewing } from "./Reviewing";

import "./App.css";
const data = [
  {
    id: 1,
    item: "React",
  },
  {
    id: 2,
    item: "Angular",
  },
  {
    id: 3,
    item: "Vue",
  },
];

function App() {
  return (
    <div className="App">
      {/* <FrameworkList frameworks={data}></FrameworkList> */}
      {/* <RenderInput
        outputConsole={(e) => {
          console.log(e);
        }}
      ></RenderInput> */}
      <Reviewing></Reviewing>
    </div>
  );
}

export default App;
