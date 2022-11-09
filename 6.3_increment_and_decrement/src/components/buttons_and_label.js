import { useState } from "react";
export default function Counter(props) {
  let [counter, setCounter] = useState(5);

  const removeCounter = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  const addCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      <h2>counter:{counter}</h2>
      <button onClick={addCounter}>increase</button>
      <button onClick={removeCounter}>decrease</button>
    </div>
  );
}
