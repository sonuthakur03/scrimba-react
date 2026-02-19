const MenuItem = () => {
  let isSpecial = true;
  return (
    <div
      className={`flex flex-col justify-center ${isSpecial ? "border-2 border-dotted p-1 border-amber-950" : "border-none"}`}
    >
      <div className="flex justify-between w-full">
        <p className="delius-regular text-sm">Chicken Grilled Sandwich</p>
        <p className="delius-regular text-sm">NPR. 120</p>
      </div>
      <div className="italic text-gray-800 delius-regular text-[10px]">
        <p>Chicken Sandwich Grilled with Butter.</p>
      </div>
    </div>
  );
};

export default MenuItem;
