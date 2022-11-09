import React, { useState } from "react";
import "./App.css";
import BoxHide from "./components/Box_hide";

function App() {
  const [isShow, setShow] = useState(true);

  const clickHandler = () => {
    console.log("hhh")
    setShow(!isShow);
  };

  return (
    <div className="App">
      <header className="App-header">
        <BoxHide clickHandler={clickHandler} val={isShow}></BoxHide>
      </header>
    </div>
  );
}

export default App;
