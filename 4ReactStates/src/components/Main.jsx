import { useState } from "react";
import IngredientsList from "./IngredientsList";
import Recipe from "./Recipe";
import { getRecipeFromAI } from "../ai";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);

  const getRecipe = async () => {
    setLoading(true);
    const generatedRecipe = await getRecipeFromAI(ingredients);
    setRecipe(generatedRecipe);
    setLoading(false);
  };

  const addIngredients = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };
  return (
    <main className="w-[50%] h-auto mb-4 mx-auto flex  justify-center flex-col bg-[#fafaf8] ">
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
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}
      {loading ? (
        <>
          <p
            className="text-xl font-medium text-gray-700 my-4 mx-auto"
            aria-live="assertive"
          >
            🤖 Cooking something delicious...
          </p>
          <div className="skeleton">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line short"></div>
          </div>
        </>
      ) : (
        recipe && <Recipe recipe={recipe} />
      )}
    </main>
  );
};

export default Main;
