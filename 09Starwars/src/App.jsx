import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [starWarsData, setStarWarsData] = useState({});

  console.log("Rendered");

  useEffect(() => {
    console.log("Fetched");

    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [count]);

  return (
    <>
      <div>
        <h2>The count is {count}</h2>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Next Character
        </button>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      </div>
    </>
  );
}

export default App;
