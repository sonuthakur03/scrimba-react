import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainComponent from "./components/MainComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <MainComponent />
    </>
  );
}

export default App;
