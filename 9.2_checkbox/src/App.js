import "./App.css";
//import {useStat} from react

const checkBox = ({ checkBoxText }) => {
  return (
    <div>
      <input type="checkbox" />
      <label></label>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <checkBox checkBoxText="i first" />
      <checkBox checkBoxText="i second" />
      <checkBox checkBoxText="i third" />
    </div>
  );
}

export default App;
