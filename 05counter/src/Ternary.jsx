import { useState } from "react";

const Ternary = () => {
  /**
   * Challenge: move our ternary directly inside of the JSX
   * so the "Yes" and "No" are determined inside the <h1>
   *
   * Hint: you will no longer need the `answer` variable
   */
  let [isGoingOut, setIsGoingOut] = useState(false);

  const handleClick = () => {
    setIsGoingOut((prev) => !prev);
  };
  return (
    <>
      <section>
        <h1 className="title">Do I feel like going out tonight?</h1>
        <button className="value" onClick={handleClick}>
          {isGoingOut ? "Yes" : "No"}
        </button>
      </section>
    </>
  );
};

export default Ternary;
