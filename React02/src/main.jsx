/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding more styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="react-logo.png"` in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */
// import { createRoot } from "react-dom/client";

// createRoot(document.getElementById("root")).render(
//   <div>
//     {/* <img src={reactLogo} width={40} />
//     <h1>Fun facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100k stars on Github</li>
//       <li>Is maintained by Meta</li>
//       <li>Powers thousands of enterprise app, including mobile apps</li>
//     </ul> */}
//     <Page />
//   </div>
// );

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 *
 * It should return ordered list with the reason why you're
 * excited to be learning React :)
 *
 * Render the Page component.
 */

/**
  Challenge: 
  
  Part 2: 
  - Add a `<header>` element with an `<img />` element with the image of the 
  React logo inside (src="react-logo.png") and make sure to set the 
  width to something more manageable so it doesn't take up the whole screen.
  Also, as always, you should include some alt text on the image.
  - Add an `<h1>` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it  above the ordered list, then wrap
  the `<h1>` and `<ol>` inside a `<main>` element to keep our semantic
  structure flowing well.
  - Add a `<footer>` after the list that says: 
  "© 20xx <last name here> development. All rights reserved."
  */

// import { createRoot } from "react-dom/client";
// import Header from "./components/Header";

/** Mini Challenge:
 *
 * Move the `header` element from the Page component into
 * its own component called "Header"
 *
 * Then render an instance of the Header component inside
 * the Page component where the `header` used to be.
 */

/** Challenge:
 * Move the `main` element into its own component called "MainContent"
 * and render that component inside the Page component.
 *
 * Do the same with the `footer` element, moving it into a new
 * component called "Footer"
 */

import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainComponent from "./components/MainComponent";
import reactLogo from "./assets/react.svg";
import "./index.css";

function Page() {
  return (
    <>
      <Header logo={reactLogo} />
      <MainComponent />
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(<Page />);
