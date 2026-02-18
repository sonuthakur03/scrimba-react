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

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        id="container"
        className="flex justify-center items-center flex-col gap-8 border border-black rounded-sm"
      >
        <Header />
        <Entry
          img={{
            src: "https://imgs.search.brave.com/3_ZiPQqSO-7UyE23KaxEG-edQZJX-DN4QQiqwHnsW70/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/My8yMC8xNS80MC9u/YXR1cmUtNzA4MTEz/OF82NDAuanBn",
            alt: "Mount Fuji",
          }}
          title="Mount Fuji"
          country="Japan"
          googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          dates="12 Jan, 2021 - 24 Jan, 2021"
          text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        />
      </div>
    </div>
  );
}

export default App;
