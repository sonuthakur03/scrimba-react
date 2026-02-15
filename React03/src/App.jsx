import Entry from "./components/Entry";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        id="container"
        className="flex justify-center items-center flex-col gap-8 border border-black rounded-sm"
      >
        <Header />
        <Entry />
      </div>
    </div>
  );
}

export default App;
