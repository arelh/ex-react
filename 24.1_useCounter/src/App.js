
import {useState} from "react"


export const useValue=(num)=>{
    const [counter,setCounter]=useState(num)
    const AddOne=()=>{
      setCounter(counter+1)
    }
    const RemoveOne=()=>{
      setCounter(counter-1)
    }
    const double=()=>{
      setCounter(counter*2)
    }
    const divide=()=>{
      setCounter(counter/2)
    }
    return [counter,AddOne,RemoveOne,double,divide]


}




import "./App.css";

function App() {
  return <div className="App"></div>;
}

export default App;
