import { useState } from "react";
import Ternary from "./Ternary";
import ComplexArray from "./ComplexArray";

function App() {
  /**
   * Challenge:
   * Create state to track our count value (initial value is 0)
   * Don't forget to replace the hard-coded "0" with your new state
   */

  /**
   * Note: if you ever need the old value of state
   * to help you determine the new value of state,
   * you should pass a callback function to your
   * state setter function instead of using
   * state directly. This callback function will
   * receive the old value of state as its parameter,
   * which you can then use to determine your new
   * value of state.
   */
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decreaseCounter = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };
  return (
    <>
      <main className="container">
        <h1>How many times will Bob say "state" in this section?</h1>
        <div className="counter">
          <button
            className="minus"
            aria-label="Decrease count"
            onClick={decreaseCounter}
          >
            –
          </button>
          <h2 className="count">{counter}</h2>
          <button
            className="plus"
            aria-label="Increase count"
            onClick={increaseCounter}
          >
            +
          </button>
        </div>
      </main>
      <Ternary />
      <ComplexArray />
    </>
  );
}

export default App;
