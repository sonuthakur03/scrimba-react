const Main = () => {
  return (
    <>
      <main className="w-[50%] flex items-center justify-center flex-col gap-4 bg-white p-4 ">
        <section>
          <form className="flex flex-col gap-6 m-4">
            <div className="flex gap-4 ">
              <div className="flex flex-col gap-2">
                <label className="w-full" htmlFor="top">
                  Top Text
                </label>
                <input
                  type="text"
                  placeholder="One does not simply"
                  name="topText"
                  id="top"
                  className="p-2 border-2 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="w-full" htmlFor="bottom">
                  Bottom Text
                </label>
                <input
                  type="text"
                  placeholder="Walk into Mordor"
                  name="bottomText"
                  id="bottom"
                  className="p-2 border-2 rounded-lg"
                />
              </div>
            </div>
            <button
              className="p-2 text-white rounded-lg"
              style={{
                background:
                  "linear-gradient(90deg, #672280 1.18%, #A626D3 100%)",
              }}
            >
              Get a new meme image 🖼
            </button>
          </form>
        </section>
        <section>
          <div className="relative ">
            <img src="http://i.imgflip.com/1bij.jpg" />
            <span className="absolute top-0 left-0 right-0 text-center text-white font-bold text-xl drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
              One does not simply
            </span>
            <span className="absolute bottom-0 left-0 right-0 text-center text-white font-bold text-xl drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
              Walk into Mordor
            </span>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
