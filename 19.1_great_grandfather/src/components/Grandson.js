import React, { useContext } from "react";
import { MainContextFromGrandfather } from "./Grandfather";

function Grandson() {
  const { gift } = useContext(MainContextFromGrandfather);
  return (
    <div>
      {gift.map((e, i) => {
        return <p key={i}>{e}</p>;
      })}
    </div>
  );
}

export default Grandson;
