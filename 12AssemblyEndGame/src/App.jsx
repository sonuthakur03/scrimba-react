import { useState } from "react";
import { languages } from "./languages";
import { clsx } from "clsx";
import { getFarewellText, getCurrentWord } from "./utils";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

function App() {
  // state variables
  const [currentWord, setCurrentWord] = useState(() => getCurrentWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  const { width, height } = useWindowSize();

  // derived variables
  const wrongGuessCount = guessedLetters.filter(
    (letter) => ![...currentWord].includes(letter),
  ).length;
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameWon = [...currentWord].every((letter) =>
    guessedLetters.includes(letter),
  );
  const isGameOver = isGameLost || isGameWon;
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessedLetterWrong =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  const lostLanguage = languages[wrongGuessCount - 1];

  const farewellMsg =
    isLastGuessedLetterWrong && lostLanguage
      ? getFarewellText(lostLanguage.name)
      : "";

  // console.log(getFarewellText("html"));

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
    const isGuessed = guessedLetters.includes(letter);
    const isRevealed = isGuessed || isGameLost;

    const isMissed = isGameLost && !isGuessed;

    return (
      <div
        key={index}
        className={clsx(
          "flex-box rounded-sm h-[50px] w-[50px] border-b-2 transition-colors",

          // 1. Still hidden (Game active & not guessed)
          !isRevealed && "bg-[#323232] border-white",

          // 2. Correct (Guessed by user)
          isGuessed && "bg-[#4a4a4a] border-green-400 text-green-400",

          // 3. Missed (Game over & not guessed)
          isMissed && "bg-[#4a4a4a] border-red-800 text-red-400",
        )}
      >
        {isRevealed ? letter.toUpperCase() : ""}
      </div>
    );
  });

  const keyboardElement = [...alphabet].map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const isButtonDisabled = isGameOver || isGuessed;
    const classname = clsx(
      "flex-box rounded-md h-[50px] w-[50px] border-2 border-white",

      {
        "bg-[#FCBA29]": !isGuessed,

        "bg-green-500": isCorrect,

        "bg-red-500 ": isWrong,

        "opacity-50 cursor-not-allowed": isButtonDisabled,
      },
    );

    return (
      <button
        key={letter}
        value={letter}
        onClick={() => addguessedLetters(letter)}
        className={classname}
        disabled={isButtonDisabled}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  const setNewGame = () => {
    setCurrentWord(getCurrentWord());
    setGuessedLetters([]);
  };

  console.log(currentWord);

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
          farewellMsg && !isGameLost && "bg-[#7A5EA7]",
          isGameLost && "bg-[#BA2A2A]",
        )}
      >
        <p className="text-2xl font-bold italic">
          {isGameOver
            ? isGameLost
              ? `You lose! Better start learning Assembly 😭🫡`
              : `You win! Well Done!!🎉`
            : farewellMsg}
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
        <button
          className="border border-[#D7D7D7] py-4 px-20 rounded-md bg-[#11B5E5] text-black text-xl font-bold"
          onClick={setNewGame}
        >
          New Game
        </button>
      )}
      {isGameWon && <Confetti width={width} height={height} />}
    </main>
  );
}

export default App;
