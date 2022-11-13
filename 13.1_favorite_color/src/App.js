import React, { useState, useEffect } from "react";

const App = () => {
  const [favColor, setFavColor] = useState("");
  useEffect(() => {
    setFavColor("blue");
  }, [favColor]);
  return (
    <>
      {" "}
      <h1>my favorite color is {favColor}</h1>
    </>
  );
};
export default App;
