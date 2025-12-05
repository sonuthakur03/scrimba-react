// import { createRoot } from "react-dom/client";

// // create root with id selection
// let root = createRoot(document.getElementById("root"));

// // render root
// root.render(<h1>Ahoy!! React</h1>);

/**
 * Challenge: Set up a React app from scratch again.
 * This time, try rendering an unordered list with 2-3 list items inside
 * with why you're excited to be learning React.
 */
// import { createRoot } from "react-dom/client";

// createRoot(document.getElementById("root")).render(
//   <ul>
//     <li>To be frontend engineer</li>
//     <li>To get job</li>
//     <li>To be happy</li>
//   </ul>
// );

// Using of createElement method
// import { createRoot } from "react-dom/client";
// import { createElement } from "react";

// // create React element using createElement method
// let reactElement = createElement(
//   "h1",
//   null,
//   "Using createElement method to create React element"
// );

// console.log(reactElement); // object representation of the React element

// // render the react element to the DOM
// createRoot(document.getElementById("root")).render(reactElement);
/**
 * Challenge:
 * Create your very first custom React component!
 * Call it "MainContent", and have it return a simple
 * h1 element that says "React is great!"
 *
 * Afterward, render it on the line below MyAwesomeNavbar
 */
// import { createRoot } from "react-dom/client";

// let root = createRoot(document.getElementById("root"));
// function MainContent() {
//   return <h1>React is great!</h1>;
// }
// root.render(
//   <div>
//     <MainContent />
//   </div>
// );

// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))

// root.render(
//     <h1>Hello, React!</h1>
// )

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element (createElement)
- Give it some textContent
- Give it a class name of "header"
- append it as a child (using `appendChild`) of the div#root

Don't use innerHTML to accomplish any of this.
    
// */

// let h1 = document.createElement("h1");
// h1.textContent = "Hello react from JS";
// h1.className = "header";

// let root = document.getElementById("root");
// root.appendChild(h1);

/**
 * Challenge: set up a new React app from scratch!
 * Hints:
 * 1. Need to import the method to create a new root
 *    from the "react-dom/client" package)
 * 2. Use that root to render some JSX. For now, just render
 *    an h1 element that says anything you want.
 */
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(<h1>Helllllo faxs</h1>);
