const MenuItem = ({ currency, items }) => {
  return (
    <>
      {items.map((item) => {
        return (
          <div
            className={`flex flex-col justify-center ${item.isSpecial ? "border-2 border-dotted p-1 border-amber-950" : "border-none"}`}
            key={item.id}
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
      })}
    </>
  );
};

export default MenuItem;
