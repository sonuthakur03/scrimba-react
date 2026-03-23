import { useState } from "react";
import IngredientsList from "./IngredientsList";
import Recipe from "./Recipe";
import { getRecipeFromAI } from "../ai";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);
  const [recipe, setRecipe] = useState("");

  const toggleRecipeShown = async () => {
    if (!recipeShown) {
      const generatedRecipe = await getRecipeFromAI(ingredients);
      setRecipe(generatedRecipe);
    }
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
      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          toggleRecipe={toggleRecipeShown}
        />
      )}
      {recipeShown && <Recipe recipe={recipe} />}
    </main>
  );
};

export default Main;
