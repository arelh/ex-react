import "./App.css";
import { useReducer } from "react";

function reducer(count, action) {
  switch (action.type) {
    case "increment":
      return count + 1;
    case "decrement":
      return count - 1;
    case "reset":
      return 0;
    case "change-count":
      return count + action.payload.amount;
    default:
      return count;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button
        onClick={() => {
          dispatch({ type: "change-count", payload: { amount: 5 } });
        }}
      >
        Add 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}
export default App;
