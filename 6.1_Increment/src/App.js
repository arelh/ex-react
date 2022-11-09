import React, {useState} from "react";
import './App.css';

function App() {
   let [counter, setCounter] = useState(5);
  const clickHandler=()=>{
    setCounter(counter + 1);
  }
  return (

    <div className="App">
     
      <header className="App-header">
      <button onClick={clickHandler}>increment</button>
      <p>{counter}</p>
      </header>
    </div>
  );
}

export default App;
