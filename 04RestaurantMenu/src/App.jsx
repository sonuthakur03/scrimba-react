import Menu from "./components/Menu";
import { menuData } from "./menuData";

function App() {
  return (
    <div className="h-full min-h-screen bg-black text-white flex items-center justify-center">
      <Menu menuData={menuData} />
    </div>
  );
}

export default App;
