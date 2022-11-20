import React from "react";
import "./App.css";

class StartApp extends React.Component {
  state = { number: 0}
  clickHandlerIncrease = () => {
      this.setState((prev) => {
        return {number: prev.number +1}
      },
      () => {
        return this.state.number;
      }
    )
  };
  clickHandlerDecrease = () => {
    this.setState((prev) => {
      return {number: prev.number -1}
    },
    () => {
      return this.state.number;
    }
    )
  };
  render() {
    return (
      <>
        <button onClick={this.clickHandlerIncrease}>+</button>
        <button onClick={this.clickHandlerDecrease}>_</button>
        <p className={this.state.number < 0 ? "red" : this.state.number === 0 ? "black" : "green"}>
          {this.state.number}
        </p>
      </>
    );
  }
}

function App() {
  // let start = 0;
  // let [number, setNumber] = useState(start);
 

  return <div className="App">
    <StartApp/>
  </div>;
}
export default App;
