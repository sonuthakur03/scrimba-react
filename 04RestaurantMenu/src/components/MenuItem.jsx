const MenuItem = ({ currency, items }) => {
  const item = items[0];
  return (
    <div
      className={`flex flex-col justify-center ${item.isSpecial ? "border-2 border-dotted p-1 border-amber-950" : "border-none"}`}
    >
      <div className="flex justify-between w-full">
        <p className="delius-regular text-sm">{item.name}</p>
        <p className="delius-regular text-sm">
          {currency} {item.price}
        </p>
      </div>
      <div className="italic text-gray-800 delius-regular text-[10px]">
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
