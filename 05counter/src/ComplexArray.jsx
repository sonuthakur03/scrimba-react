import { useState } from "react";

const ComplexArray = () => {
  /**
   * Challenge: Convert the code below to use an array
   * held in state instead of a local variable. Initialize
   * the state array as an empty array
   *
   * Don't worry about fixing `addFavoriteThing` quite yet.
   */

  const [myFavoriteThings, setMyFavoriteThings] = useState([]);
  const allFavoriteThings = [
    "💦🌹",
    "😺",
    "💡🫖",
    "🔥🧤",
    "🟤🎁",
    "🐴",
    "🍎🥧",
    "🚪🔔",
    "🛷🔔",
    "🥩🍝",
  ];
  const thingsElements = myFavoriteThings.map((thing) => (
    <p key={thing}>{thing}</p>
  ));

  function addFavoriteThing() {
    setMyFavoriteThings((prev) => [...prev, allFavoriteThings[prev.length]]);
  }

  return (
    <section>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">{thingsElements}</section>
    </section>
  );
};

export default ComplexArray;
