import React from "react";
import "./App.css";
import Mother from "./components/mother";
import Child from "./components/Child";
import Balloons from "./components/Balloons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ color: "red" }}>{"tale of five balloons"}</p>
        <Mother></Mother>
      </header>
    </div>
  );
}

export default App;
