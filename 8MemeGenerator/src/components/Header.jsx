const Header = () => {
  return (
    <>
      <header
        className="w-[50%] flex items-center justify-center gap-4 p-4 text-white h-16"
        style={{
          background: "linear-gradient(90deg, #672280 1.18%, #A626D3 100%)",
        }}
      >
        <img
          src="https://media.tenor.com/AXY-D-1UU-MAAAAm/troll-lol.webp"
          alt=""
          className="h-12 w-12 rounded-full"
        />
        <h1 className="text-4xl font-bold">Meme Generator</h1>
      </header>
    </>
  );
};

export default Header;
