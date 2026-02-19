import MenuItem from "./MenuItem";

const MenuCategories = () => {
  return (
    <div>
      <div id="categoryInfo" className="my-5 ">
        <h3 className="w-[25%] text-xl tracking-[4px] font-semibold py-1 border-b-2 border-dotted border-amber-500">
          SANDWICHES
        </h3>
        <p className="text-md italic text-gray-800">
          Includes your choice of garden salad, mixed fresh fruits or baked
          potato chips.
        </p>
      </div>
      <div id="items" className="flex gap-4">
        <div className="w-48 h-48 overflow-hidden rounded-md">
          <img
            src="https://images.pexels.com/photos/28681955/pexels-photo-28681955.jpeg"
            alt="sandwich"
            className="w-full h-full object-cover"
          />
        </div>
        <div id="items" className="w-[40%]">
          <MenuItem />
        </div>
      </div>
    </div>
  );
};

export default MenuCategories;
