import { useEffect, useState } from "react";

const Main = () => {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imgUrl: "http://i.imgflip.com/1bij.jpg",
  });
  const [memeData, setMemeData] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemeData(data.data.memes));
  }, []);

  const handleChange = (event) => {
    const { value, name } = event.currentTarget;
    // console.log(value);
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  const chooseMeme = (event) => {
    event.preventDefault();
    const rand = Math.floor(Math.random() * 100);
    const imageUrl = memeData[rand].url;
    console.log(imageUrl);

    setMeme((prevMeme) => ({
      ...prevMeme,
      imgUrl: imageUrl,
    }));
  };
  return (
    <>
      <main className="w-full max-w-2xl mx-auto flex items-center justify-center flex-col gap-4 bg-white p-4 ">
        <section>
          <form className="flex flex-col gap-6 m-4 w-full flex-shrink">
            <div className="flex flex-col md:flex-row w-full justify-between items-baseline gap-4 ">
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
                  onChange={handleChange}
                  value={meme.topText}
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
                  onChange={handleChange}
                  value={meme.bottomText}
                />
              </div>
            </div>
            <button
              className="w-full self-center md:w-xl p-2 text-white rounded-lg"
              style={{
                background:
                  "linear-gradient(90deg, #672280 1.18%, #A626D3 100%)",
              }}
              onClick={chooseMeme}
            >
              Get a new meme image 🖼
            </button>
          </form>
        </section>
        <section>
          <div className="relative ">
            <img
              src={meme.imgUrl}
              className="w-full h-auto object-contain max-h-[60vh] rounded-lg"
            />
            <span className="absolute top-0 left-0 right-0 text-center text-white font-bold text-xl drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
              {meme.topText}
            </span>
            <span className="absolute bottom-0 left-0 right-0 text-center text-white font-bold text-xl drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
              {meme.bottomText}
            </span>
          </div>
        </section>
        {/* <div>{console.log(memeData)}</div> */}
      </main>
    </>
  );
};

export default Main;
