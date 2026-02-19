import MenuItem from "./MenuItem";

const MenuCategories = ({ currency, categories }) => {
  return (
    <>
      {categories.map((category) => {
        return (
          <div
            key={category.id}
            className="border-b-2 border-dashed border-amber-950 pb-2 w-full"
          >
            <div id="categoryInfo" className="my-5 ">
              <h3 className="w-[75%] text-xl tracking-[4px] font-semibold py-1 border-b-2 border-dotted border-amber-500">
                {category.title}
              </h3>
              <p className="text-md italic text-gray-800">
                {category.titleText}
              </p>
            </div>
            <div
              id="items"
              className={`flex gap-4 ${category.id === 3 ? "flex-col" : "flex-row"}`}
            >
              {!(category.id === 3) && (
                <div
                  className={`${
                    category.id === 3 ? "w-full" : "w-[40%]"
                  } h-96 flex flex-col gap-4 rounded-md`}
                >
                  <img
                    src={category.img[0]}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <img
                    src={category.img[1]}
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
              )}
              <div id="items" className=" flex flex-col gap-1 w-full">
                <MenuItem
                  key={category.id}
                  currency={currency}
                  items={category.items}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MenuCategories;
