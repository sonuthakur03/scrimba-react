/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way?
 */

import Contact from "./components/Contact";

function App() {
  return (
    <div className="contacts">
      <Contact
        img="https://i.pinimg.com/736x/16/ca/b1/16cab153397fc070d5369635ba891e8d.jpg"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        mail="mr.whiskaz@catnap.meow"
      />
      <Contact
        img="https://i.pinimg.com/736x/76/a6/ff/76a6ff24827e10303b7f1023d2a28457.jpg"
        name="Fluffykins"
        phone="(212) 555-2345"
        mail="fluff@me.com"
      />
      <Contact
        img="https://i.pinimg.com/736x/24/10/04/241004171a0bd3c2b51a0b6bd75ceb2e.jpg"
        name="Felix"
        phone="(212) 555-4567"
        mail="thecat@hotmail.com"
      />
      <Contact
        img="https://i.pinimg.com/736x/32/d2/c2/32d2c2e381908dd343d97f840aed4656.jpg"
        name="Pumpkin"
        phone="(0800) CAT KING"
        mail="pumpkin@scrimba.com"
      />
    </div>
  );
}

export default App;
