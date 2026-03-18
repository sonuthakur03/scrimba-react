const Main = () => {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];
  /**
   * Review Challenge:
   * Map over the list of ingredients and render them as list items
   *
   * Note: We're doing things a weird way here. Don't worry,
   * we're building up to learning the right way 🙂
   * Challenge:
   * Add an `onSubmit` event listener on the form. Have the function
   * simply console.log("Form submitted!") for now
   * Challenge:
   * Add the new ingredient to the array of ingredients. Also, add a
   * console.log(ingredients) after adding the ingredient, because
   * **warning**: you aren't going to see the page update!
   *
   * Hint: this is a one-liner solution, so don't overthink it 😅
   */

  const ingredientList = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    console.log(newIngredient);
    ingredients.push(newIngredient);
    console.log(ingredients);
  };
  return (
    <main className="w-[50%] h-auto my-0 mx-auto flex  justify-center flex-col bg-[#fafaf8] ">
      <form
        className="flex h-30 items-center justify-center w-full gap-4 pt-8"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="ingredient"
          id="ingredient"
          aria-label="Enter your ingredient"
          placeholder="e.g. Oregano"
          className="border-2 border-[#D1D5DB] border-solid p-2 w-[55%] rounded-md"
        />
        <button className="w-[20%] text-white bg-[#141413] p-3 rounded-md text-sm">
          + Add ingredient
        </button>
      </form>
      <section className="flex flex-col justify-center w-full gap-4 px-20 py-8">
        <p className="text-3xl font-bold text-[#141413]">
          Ingredients on hand:
        </p>
        <ul className="list-disc pl-5 text-[#475467]">{ingredientList}</ul>
      </section>
    </main>
  );
};

export default Main;
