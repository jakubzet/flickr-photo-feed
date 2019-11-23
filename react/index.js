/* global document */
import React from "react";
import ReactDOM from "react-dom";
import { Sample } from "./components";

const App = () => (
  <div>
    <Sample>I am React App!</Sample>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
