import { useState } from "react";
import { languages } from "./languages";
import { clsx } from "clsx";

function App() {
  // state variables
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState([]);

  // derived variables
  const wrongGuessCount = guessedLetters.filter(
    (letter) => ![...currentWord].includes(letter),
  ).length;
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameWon = [...currentWord].every((letter) =>
    guessedLetters.includes(letter),
  );
  const isGameOver = isGameLost || isGameWon;

  // console.log(wrongGuessCount);

  // static variables
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const addguessedLetters = (value) => {
    setGuessedLetters((prevArr) => {
      return prevArr.includes(value) ? prevArr : [...prevArr, value];
    });
  };

  const languageElements = languages.map((language, index) => {
    // Check if this specific language should be "lost"
    const isLost = index < wrongGuessCount;
    return (
      <button
        key={language.name}
        style={{
          backgroundColor: language.backgroundColor,
          color: language.color,
        }}
        className={clsx(
          "relative p-2 rounded-md font-semibold overflow-hidden transition-all",
          // Only apply these classes if isLost is true
          isLost &&
            "before:content-['💀'] before:absolute before:inset-0 before:flex before:items-center before:justify-center before:bg-black/70 before:text-[0.85rem]",
        )}
      >
        {language.name}
      </button>
    );
  });

  const wordElement = [...currentWord].map((letter, index) => {
    const isRevealed = guessedLetters.includes(letter);
    return (
      <div
        className={clsx(
          "flex-box rounded-sm h-[50px] w-[50px] border-b-2 transition-colors",
          // Default state
          !isRevealed && "bg-[#323232] border-white",
          // Revealed state
          isRevealed && "bg-[#4a4a4a] border-green-400 text-green-400",
        )}
        key={index}
      >
        {guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
      </div>
    );
  });

  const keyboardElement = [...alphabet].map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const classname = clsx(
      "flex-box rounded-md h-[50px] w-[50px] border-2 border-white",

      {
        "bg-[#FCBA29]": !isGuessed,

        "bg-green-500": isCorrect,

        "bg-red-500": isWrong,

        "opacity-50": isGuessed && !isCorrect && isWrong,
      },
    );

    return (
      <button
        key={letter}
        value={letter}
        onClick={() => addguessedLetters(letter)}
        className={classname}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  return (
    <main className="flex-box flex-col mt-8 gap-8 w-[60%] mx-auto">
      <header className="flex-box flex-col gap-5">
        <h2 className="text-3xl ">Assembly: End Game</h2>
        <p className="text-lg text-[#8E8E8E]">
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section
        className={clsx(
          "h-24  w-full p-6 my-2 flex-box rounded-md transition-all",
          isGameWon && "bg-[#10A95B]",
        )}
      >
        <p className="text-2xl font-bold italic">
          {isGameOver
            ? isGameLost
              ? `You lose! Better start learning Assembly 😭🫡`
              : `You win! Well Done!!🎉`
            : null}
        </p>
      </section>
      <section className="flex-box flex-wrap w-[75%] gap-2">
        {languageElements}
      </section>
      <section className="flex-box gap-1 text-white text-2xl font-black">
        {wordElement}
      </section>
      <section className="flex-box flex-wrap w-[80%] gap-2 font-bold text-[#1E1E1E] text-xl p-8">
        {keyboardElement}
      </section>
      {isGameOver && (
        <button className="border border-[#D7D7D7] py-4 px-20 rounded-md bg-[#11B5E5] text-black text-xl font-bold">
          New Game
        </button>
      )}
    </main>
  );
}

export default App;
