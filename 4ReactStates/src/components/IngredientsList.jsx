const IngredientsList = ({ ingredients, getRecipe, ref }) => {
  const ingredientList = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return (
    <section className="flex flex-col justify-center w-full gap-4 px-20 py-8">
      <p className="text-3xl font-bold text-[#141413]">Ingredients on hand:</p>
      <ul className="list-disc pl-5 text-[#475467]">{ingredientList}</ul>
      {ingredients.length > 3 && (
        <div className="flex items-center bg-[#F0EFEB] p-8 rounded-md border border-black justify-between mt-8">
          <div ref={ref} className="flex flex-col gap-2">
            <h3 className="text-xl">Ready for a recipe?</h3>
            <p className="text-[#475467] text-sm">
              Generate a recipe from your list of ingredients.
            </p>
          </div>
          <button
            className=" text-white py-2 px-4 rounded-sm bg-[#e95928] hover:bg-[#D17557] transition-colors duration-300 cursor-pointer"
            onClick={getRecipe}
          >
            Get a recipe
          </button>
        </div>
      )}
    </section>
  );
};

export default IngredientsList;
