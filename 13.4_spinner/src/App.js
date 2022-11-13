import "./App.css";
import Spinner from "./components/Spinner";
import React, { useState, useEffect } from "react";

function App() {
  const [timer, setTimer] = useState(false);
  useEffect(() => {
    console.log("start");
    setTimer(true);
    setTimeout(() => {
      console.log("end");
      setTimer(false);
    }, 4000);
  }, []);

  return <div>{timer && <Spinner />}</div>;
}

export default App;
