import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

import InputText from "./components/InputText";

function App() {
  return (
    <div className="App">
      <h1>Todo App with React Hooks</h1>
      <InputText />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
