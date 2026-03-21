import React, { useState } from "react";

const Jokes = ({ id, setup, punchline }) => {
  const [isShown, setIsShown] = useState(false);

  const togglePunchline = () => {
    setIsShown((prevShown) => !prevShown);
  };
  return (
    <div id="joke">
      <h3 className="text-xl font-medium">Joke {id}:</h3>
      {setup && <div id="setup">Setup: {setup}</div>}
      {isShown ? <div id="punchline">Punchline: {punchline}</div> : null}
      <button
        className="border-2 border-black p-2 rounded-md mb-2 hover:bg-gray-200 "
        onClick={togglePunchline}
      >
        {isShown ? "Hide Punchline" : "Show Punchline"}
      </button>
      <hr />
    </div>
  );
};

export default Jokes;
