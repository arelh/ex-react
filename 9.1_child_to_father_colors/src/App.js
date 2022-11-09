import { CustumButton } from "./components/custumButton";
import "./App.css";
import { useState } from "react";

function App() {
  const [col, setCol] = useState();
  const colorByClick = (color) => {
    setCol(color);
  };

  const colors = ["blue", "red", "yellow"];
  return (
    <div className="App">
      {colors.map((color, ) => (
        <CustumButton colorByClick={colorByClick} color={color} />
      ))}

      {<h1>The color is: {col}</h1>}
    </div>
  );
}

export default App;
