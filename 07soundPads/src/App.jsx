import Pad from "./components/Pad";
import padsData from "./pads";
import { useState } from "react";

function App({ darkmode }) {
  const [pads, setPads] = useState(padsData);

  const toggle = (id) => {
    setPads((prevPad) =>
      prevPad.map((pad) => (pad.id === id ? { ...pad, on: !pad.on } : pad)),
    );
  };
  const buttonElements = pads.map((pad) => (
    <Pad
      key={pad.id}
      id={pad.id}
      color={pad.color}
      on={pad.on}
      toggle={toggle}
    />
  ));

  return (
    <>
      <main
      // style={
      //   darkmode
      //     ? { backgroundColor: "#222222" }
      //     : { backgroundColor: "#cccccc" }
      // }
      >
        <div className="pad-container">{buttonElements}</div>
      </main>
    </>
  );
}

export default App;
