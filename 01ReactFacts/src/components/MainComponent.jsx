/**
 * Challenge: Build out the main content section!
 *
 * For now, skip 2 aspects of the design and we'll work on them later:
 *   1. The colored bullets in the list
 *   2. The larger gray React logo on the side
 */
const MainComponent = () => {
  return (
    <>
      <main className="mainContent">
        <h1>Fun facts about React</h1>
        <ul className="main-facts">
          <li className="main-fact">Was first released in 2013</li>
          <li className="main-fact">Was originally created by Jordan Walke</li>
          <li className="main-fact">Has well over 200K stars on GitHub</li>
          <li className="main-fact">Is maintained by Meta</li>
          <li className="main-fact">
            Powers thousands of enterprise apps, including mobile apps
          </li>
        </ul>
      </main>
    </>
  );
};

export default MainComponent;
