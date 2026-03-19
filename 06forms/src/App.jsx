function App() {
  return (
    <>
      <section className="flex w-full h-screen bg-black text-white items-center justify-center flex-col">
        <form className="bg-white rounded-md text-black w-[400px] m-4 h-[400px] flex items-center  flex-col p-8">
          <h2 className="text-4xl p-8 font-bold">SignUp Form</h2>
          <label htmlFor="name" className="w-full">
            Name:
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Jhon Doe"
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
