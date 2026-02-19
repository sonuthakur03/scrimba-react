import MenuItem from "./MenuItem";

const MenuCategories = ({ currency, categories }) => {
  return (
    <>
      {categories.map((category) => {
        return (
          <div
            key={category.id}
            className="border-b-2 border-dashed border-amber-950 pb-2 w-[60%]"
          >
            <div id="categoryInfo" className="my-5 ">
              <h3 className="w-[25%] text-xl tracking-[4px] font-semibold py-1 border-b-2 border-dotted border-amber-500">
                {category.title}
              </h3>
              <p className="text-md italic text-gray-800">
                {category.titleText}
              </p>
            </div>
            <div id="items" className="flex gap-4">
              <div className="w-[40%] h-64 overflow-hidden rounded-md">
                <img
                  src={category.img}
                  className="w-full h-full object-cover"
                />
              </div>
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
