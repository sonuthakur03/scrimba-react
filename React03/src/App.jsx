/**
 * Challenge: pass props to the Entry component to display
 * its data. See the `data.md` file for each prop name and its
 * value.
 *
 * Then on the Entry component, receive and display the values
 * for those props. In the end, the page should look the same
 * as it does now, but without all the hard-coded data in the
 * component
 */

import Entry from "./components/Entry";
import Header from "./components/Header";
import data from "./data";

function App() {
  const entries = data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        img={entry.img}
        title={entry.title}
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        dates={entry.dates}
        text={entry.text}
      />
    );
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        id="container"
        className="flex justify-center items-center flex-col gap-4 border border-black rounded-sm pb-4"
      >
        <Header />
        {entries}
      </div>
    </div>
  );
}

export default App;
