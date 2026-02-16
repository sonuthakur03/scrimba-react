/**
 * Challenge: create a page that displays your favorite jokes
 * - Create a Joke component in its own file.
 * - Import and render 4-5 <Joke /> components
 * - Each Joke should receive a "setup" prop and a "punchline" prop
 *   and render those however you'd like
 * - Use your favorite 2-part jokes (setup & punchline), or check
 *   jokes.md file for some examples.
 *
 * EXTRA CREDIT:
 * Some jokes are only a punchline with no setup:
 *
 * E.g.: "It’s hard to explain puns to kleptomaniacs because
 * they always take things literally."
 *
 * If you don't pass in a "question" prop, how might you make it only
 * show the punchline?
 */

/**
 * Challenge: Think critically - how would you pass in a prop that
 * isn't a string datatype.
 *
 * E.g. Say you want each Joke component to receive an "upvotes"
 * and "downvotes"prop that is a number, as well as a prop with
 * an array of comments, and a boolean of whether the joke is a
 * pun (`isPun`).
 */

import Jokes from "./components/Jokes";

function App() {
  return (
    <>
      <section
        id="jokes"
        className="h-screen flex items-center justify-center bg-gray-800"
      >
        <div className="flex flex-col mx-auto  justify-center p-3 bg-amber-200 w-[50%] rounded-md gap-3">
          <h2 className="text-2xl font-semibold">
            Jokes that will make you laugh till your death.
          </h2>
          <hr />
          <Jokes
            id="1"
            setup="I got my daughter a fridge for her birthday."
            punchline="I can't wait to see her face light up when she opens it."
          />
          <Jokes
            id="2"
            punchline="It's hard to explain puns to kleptomaniacs because they always take things literally."
          />
        </div>
      </section>
    </>
  );
}

export default App;
