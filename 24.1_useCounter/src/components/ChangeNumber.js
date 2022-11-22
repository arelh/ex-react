
import {useState} from "react"
import {useValue} from "../App"

function changeNumber() {
    const[counter,AddOne,RemoveOne,double,divide]=useValue(5)

  return (
    <div>
        <button onClick={AddOne}>increase</button>
        <button onClick={RemoveOne}>decrease</button>
        <button onClick={double}>double</button>
        <button onClick={divide}>divide</button>
        <h1>{counter}</h1>
    </div>
  )
}

export default changeNumber