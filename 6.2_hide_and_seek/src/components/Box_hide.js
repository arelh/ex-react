import React from "react";

const BoxHide = ({ clickHandler, val }) => {
  return (
    <div className="container">
      <button onClick={clickHandler}>show/hide</button>
      <div className={val ? "box" : ""}></div>
    </div>
  );
};
export default BoxHide;
//!PROPS
