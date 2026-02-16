const Jokes = () => {
  return (
    <section className="flex flex-col mx-auto  justify-center p-3 bg-amber-200 w-[50%] rounded-md gap-3">
      <h2 className="text-2xl font-semibold">
        Jokes that will make you laugh till your death.
      </h2>
      <hr />
      <div id="joke">
        <h3 className="text-xl font-medium">Joke 1:</h3>
        <div id="setup">
          Setup: I got my daughter a fridge for her birthday.
        </div>
        <div id="punchline">
          Punchline: I can't wait to see her face light up when she opens it.
        </div>
      </div>
    </section>
  );
};

export default Jokes;
