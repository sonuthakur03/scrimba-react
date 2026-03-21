import { useState } from "react";

const Main = () => {
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
    
     * Challenge:
     * 1. Create a boolean state that, for now, will represent whether
     *    we've gotten a recipe back from the "chef". Default to `false`.
     *    Can call it `recipeShown`.
     * 2. Grab the markup in recipeCode.md and paste it below. This will
     *    be a placeholder for the content that will come back from the 
     *    chef once we set up that feature.
     * 3. When the user clicks the "Get a recipe" button, flip the
     *    `recipeShown` state to true.
     * 4. Only display the recipe code content if `recipeShown` is true.
     */

  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);
  const ingredientList = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  const toggleRecipeShown = () => {
    setRecipeShown((prevShown) => !prevShown);
  };

  const addIngredients = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };
  return (
    <main className="w-[50%] h-auto my-0 mx-auto flex  justify-center flex-col bg-[#fafaf8] ">
      <form
        className="flex h-30 items-center justify-center w-full gap-4 pt-8"
        action={addIngredients}
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
      {ingredientList.length > 0 && (
        <section className="flex flex-col justify-center w-full gap-4 px-20 py-8">
          <p className="text-3xl font-bold text-[#141413]">
            Ingredients on hand:
          </p>
          <ul className="list-disc pl-5 text-[#475467]">{ingredientList}</ul>
          {ingredientList.length > 3 && (
            <div className="flex items-center bg-[#F0EFEB] p-8 rounded-md border border-black justify-between mt-8">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl">Ready for a recipe?</h3>
                <p className="text-[#475467] text-sm">
                  Generate a recipe from your list of ingredients.
                </p>
              </div>
              <button
                className=" text-white py-2 px-4 rounded-sm bg-[#e95928] hover:bg-[#D17557] transition-colors duration-300 cursor-pointer"
                onClick={toggleRecipeShown}
              >
                Get a recipe
              </button>
            </div>
          )}
        </section>
      )}
      {recipeShown && (
        <section className="flex flex-col justify-center w-full gap-4 px-20 py-8">
          <h2 className="text-2xl text-[#141413]">Chef Claude Recommends:</h2>
          <article className="text-[#475467]" aria-live="polite">
            <p className="mb-8">
              Based on the ingredients you have available, I would recommend
              making a simple a delicious <strong>Beef Bolognese Pasta</strong>.
              Here is the recipe:
            </p>
            <h3 className="text-xl font-bold mb-2">Beef Bolognese Pasta</h3>
            <strong>Ingredients:</strong>
            <ul className="list-disc ml-8 my-4 flex flex-col gap-2">
              <li>1 lb. ground beef</li>
              <li>1 onion, diced</li>
              <li>3 cloves garlic, minced</li>
              <li>2 tablespoons tomato paste</li>
              <li>1 (28 oz) can crushed tomatoes</li>
              <li>1 cup beef broth</li>
              <li>1 teaspoon dried oregano</li>
              <li>1 teaspoon dried basil</li>
              <li>Salt and pepper to taste</li>
              <li>
                8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)
              </li>
            </ul>
            <strong>Instructions:</strong>
            <ol className="list-decimal ml-8 my-4 flex flex-col gap-2">
              <li>
                Bring a large pot of salted water to a boil for the pasta.
              </li>
              <li>
                In a large skillet or Dutch oven, cook the ground beef over
                medium-high heat, breaking it up with a wooden spoon, until
                browned and cooked through, about 5-7 minutes.
              </li>
              <li>
                Add the diced onion and minced garlic to the skillet and cook
                for 2-3 minutes, until the onion is translucent.
              </li>
              <li>Stir in the tomato paste and cook for 1 minute.</li>
              <li>
                Add the crushed tomatoes, beef broth, oregano, and basil. Season
                with salt and pepper to taste.
              </li>
              <li>
                Reduce the heat to low and let the sauce simmer for 15-20
                minutes, stirring occasionally, to allow the flavors to meld.
              </li>
              <li>
                While the sauce is simmering, cook the pasta according to the
                package instructions. Drain the pasta and return it to the pot.
              </li>
              <li>
                Add the Bolognese sauce to the cooked pasta and toss to combine.
              </li>
              <li>
                Serve hot, garnished with additional fresh basil or grated
                Parmesan cheese if desired.
              </li>
            </ol>
          </article>
        </section>
      )}
    </main>
  );
};

export default Main;
