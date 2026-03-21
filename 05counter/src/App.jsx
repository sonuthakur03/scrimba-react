import { useState } from "react";
import Ternary from "./Ternary";
import ComplexArray from "./ComplexArray";
import Count from "./Count";

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

  /**
   * Challenge:
   * - Create a new component called `Count`
   *    - It should receive a prop called `number`, whose value
   *      is the current value of our count
   *    - Have the component render the h2.count element below
   *      and display the incoming prop `number`
   * - Replace the h2.count below with an instance of
   *   the new Count component, passing the correct value
   *   to its `number` prop.
   * - After doing this, everything should be  working the
   *   same as before.
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
      <section className="container">
        <h1>How many times will Bob say "state" in this section?</h1>
        <div className="counter">
          <button
            className="minus"
            aria-label="Decrease count"
            onClick={decreaseCounter}
          >
            –
          </button>
          <Count number={counter} />
          <button
            className="plus"
            aria-label="Increase count"
            onClick={increaseCounter}
          >
            +
          </button>
        </div>
      </section>
      <Ternary />
      <ComplexArray />
    </>
  );
}

export default App;
