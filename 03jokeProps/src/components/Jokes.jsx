const Jokes = ({ id, setup, punchline }) => {
  return (
    <div id="joke">
      <h3 className="text-xl font-medium">Joke {id}:</h3>
      {setup && <div id="setup">Setup: {setup}</div>}
      <div id="punchline">Punchline: {punchline}</div>
    </div>
  );
};

export default Jokes;
