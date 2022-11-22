import "./App.css";
import UseFetch from "./Hooks/UseFetch";

function App() {
  const [data, isLoading, error] = UseFetch(
    "https://api.chucknorris.io/jokes/random"
  );
  const [data2, isLoading2, error2] = UseFetch(
    "https://6374c35a08104a9c5f8866ff.mockapi.io/DaitingApp"
  );

  return (
    <div className="App">
      <p>{data && data.value}</p>
      {isLoading && <h1>spinner</h1>}
      <p>{error && error.massage}</p>
      {data2 &&
        data2.map((e) => {
          return <h1 key={e.id}>{e.city}</h1>;
        })}
      {isLoading2 && <h1>spinner</h1>}
      <p>{error2 && error.massage}</p>
    </div>
  );
}

export default App;
