function App() {
  // const signup = (formData) => {
  //   const name = formData.get("name");
  //   const password = formData.get("password");
  //   const empStatus = formData.get("empStatus");
  //   const diet = formData.getAll("diet");
  //   const color = formData.get("color");
  //   const desc = formData.get("desc");

  //   console.log("Name:", name);
  //   console.log("Password:", password);
  //   console.log("Employment Status:", empStatus);
  //   console.log("Dietary Preferences:", diet);
  //   console.log("Favorite Color:", color);
  //   console.log("Description:", desc);
  // };

  const signup = (formData) => {
    const data = Object.fromEntries(formData);
    const dietData = formData.getAll("diet");
    const allData = { ...data, diet: dietData };
    console.log(allData);
  };

  /* 
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const password = formData.get("password");

    console.log("Name:", name);
    console.log("Password:", password);
    }
  */

  return (
    <>
      <section className="flex w-full h-screen bg-black text-white items-center justify-center flex-col">
        <form
          action={signup}
          className="bg-white rounded-md text-black w-[800px] m-4 h-auto flex items-center  flex-col p-8"
        >
          <h2 className="text-4xl p-8 font-bold">SignUp Form</h2>
          <div className="flex items-center justify-center w-full gap-4">
            <label htmlFor="name" className="w-full">
              Name:
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Jhon Doe"
                defaultValue="Sonu Thakur"
                className="p-2 m-2 w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </label>

            <label htmlFor="password" className="w-full">
              Password:
              <input
                type="password"
                name="password"
                id="password"
                className="p-2 m-2 w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </label>
          </div>

          <div className="flex items-center justify-center w-full gap-4">
            <fieldset className="flex flex-col items-start justify-center border-2 border-gray-300 p-4 w-full">
              <legend>Employment</legend>
              <label htmlFor="unemployed" className="flex items-center gap-2">
                <input
                  type="radio"
                  name="empStatus"
                  id="unemployed"
                  value="unemployed"
                />
                Unemployed
              </label>

              <label htmlFor="partTime" className="flex items-center gap-2">
                <input
                  type="radio"
                  name="empStatus"
                  id="partTime"
                  value="part-time"
                />
                Part-Time
              </label>

              <label htmlFor="fullTime" className="flex items-center gap-2">
                <input
                  type="radio"
                  name="empStatus"
                  id="fullTime"
                  value="full-time"
                  defaultChecked
                />
                Full-Time
              </label>
            </fieldset>
            <fieldset className="flex flex-col items-start justify-center border-2 border-gray-300 p-4 w-full">
              <legend>Diet</legend>
              <label htmlFor="nonVeg" className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="diet"
                  id="nonVeg"
                  value="non-veg"
                />
                Non-Vegetarian
              </label>

              <label htmlFor="vegan" className="flex items-center gap-2">
                <input type="checkbox" name="diet" id="vegan" value="vegan" />
                Vegan
              </label>

              <label htmlFor="vegetarian" className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="diet"
                  id="vegetarian"
                  value="vegetarian"
                  defaultChecked
                />
                Vegetarian
              </label>
            </fieldset>
          </div>

          <label htmlFor="color" className="w-full">
            <select
              name="color"
              id="color"
              className="p-2 m-2 w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
              defaultValue=""
              required
            >
              <option value="" disabled>
                --Choose a color--
              </option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="pink">Pink</option>
              <option value="">White</option>
            </select>
          </label>

          <label htmlFor="desc" className="w-full">
            Description:
            <textarea
              id="desc"
              name="desc"
              className="p-2 m-2 w-full rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white w-[50%] p-2 m-4 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      </section>
    </>
  );
}

export default App;
