import React, { useContext } from "react";
import { MainContextFromGrandfather } from "./Grandfather";
import Grandson from "./Grandson";

function Father() {
  const abc = useContext(MainContextFromGrandfather);
  
  const giftArr = ["sony", "chocolate", "toys"];

  abc.setGift(() => [...giftArr]);

  return (
    <div>
      <Grandson />
    </div>
  );
}

export default Father;
