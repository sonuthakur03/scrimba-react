import { Die } from "./components/Die";

function App() {
  return (
    <main className="bg-[#0B2434] h-screen flex flex-col items-center justify-center p-4">
      <p className="bg-[#F5F5F5] rounded-lg max-w-[400px] max-h-[400px] w-full h-screen">
        <div>
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
        </div>
      </p>
    </main>
  );
}

export default App;
