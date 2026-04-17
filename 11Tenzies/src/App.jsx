import { useState, useRef , useEffect } from "react";
import { Die } from "./components/Die";
import {nanoid} from "nanoid";
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

function App() {
  const [newDice, setNewDice] = useState(() => generateAllNewDice());
  const { width, height } = useWindowSize();
  const buttonRef = useRef(null);
  let gameWon = newDice.every(die => die.isHeld) && newDice.every(die => die.value === newDice[0].value);

  useEffect(() => {
      if(gameWon) {buttonRef.current.focus()}
  }, [gameWon])


  const hold = (id) => {
    setNewDice(prevDice => prevDice.map( dice => {
      return dice.id === id ? {...dice, isHeld : !dice.isHeld}: dice;
    }))
  }

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => {
    const rand = Math.ceil(Math.random() * 6);
    return {
      value : rand,

      isHeld : false,
      id : nanoid(),
    }
    });
  }

  const handleRoll = () => {
    gameWon? 
    setNewDice(generateAllNewDice()):   
    setNewDice(prevDice => {
      return prevDice.map( die => {
        return die.isHeld? 
        die:
        { ...die,
          value : Math.ceil(Math.random() * 6)
         } 
      } )
    });
  };
  const dieElement = newDice.map((dice) => {
    // console.log(num);
    return <Die key={dice.id} id={dice.id} value={dice.value} isHeld={dice.isHeld} hold={hold} />;
  });
  return (
    <main className="bg-[#0B2434] min-h-screen flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center bg-[#d3d3d3] rounded-lg max-w-[500px] w-auto sm:w-full md:w-full p-8 gap-8">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-center text-[#2B283A] ">
            Tenzies
          </h1>
          <p className="text-lg text-[#4A4E74] text-center p-4">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 place-items-center gap-4">
          {dieElement}
        </div>
        <button
          ref={buttonRef}
          className="px-12 py-4 bg-[#4427ff] text-lg font-semibold text-white rounded-md m-4"
          onClick={handleRoll}
        >
          {gameWon? "New Game!" : "Roll"}
        </button>
        {gameWon && <Confetti width={width} height={height}/>}
      </div>
    </main>
  );
}

export default App;
