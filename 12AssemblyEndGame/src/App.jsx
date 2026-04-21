import LangauageButton from "./components/LangauageButton";

function App() {
  return (
    <main className="flex-box flex-col my-10 gap-10 w-[50%] mx-auto">
      <header className="flex-box flex-col gap-5">
        <h2 className="text-3xl ">Assembly: End Game</h2>
        <p className="text-lg text-[#8E8E8E]">
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className="bg-[#7A5EA7] border-2 border-dashed w-full p-8 flex-box">
        <p className="text-2xl font-semibold italic">
          "Farewell HTML and CSS"🫡
        </p>
      </section>
      <LangauageButton />

      <section className="flex-box gap-1 text-white text-2xl font-black">
        <div className="flex-box rounded-sm bg-[#323232]  h-[50px] w-[50px] border-b-2 border-white">
          R
        </div>
      </section>
      <section className="flex-box flex-wrap gap-2 font-bold text-[#1E1E1E] text-xl p-8">
        <button className="flex-box rounded-md bg-[#FCBA29]  h-[50px] w-[50px] border-2 border-white">
          A
        </button>
      </section>
    </main>
  );
}

export default App;
