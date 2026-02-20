/**
 * Challenge:
 *
 * - Add a `nav` > `ul` > `li` (x3). The 3 items should say:
 *   "Pricing", "About", and "Contact"
 *
 * Challenge:
 *
 * Using flexbox, line up the `li`s horizontally and put them inline
 * with the React logo.
 *
 * NOTE: for practice's sake, don't select any
 * elements, but use classes for all styling.

 * Challenge:
 * 
 * Move the `width` style off the JSX and into CSS with a dedicated
 * className on the img element, and change the width to 55px instead
 */

function Header({ logo }) {
  return (
    <header className="header">
      <img src={logo} alt="react" className="nav-logo" />
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-items">Pricing</li>
          <li className="nav-items">About</li>
          <li className="nav-items">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
