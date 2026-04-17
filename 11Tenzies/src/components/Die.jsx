export const Die = ({ id, value, isHeld , hold}) => {
  return (
    <button
      className={`flex justify-center items-center w-10 h-10  ${isHeld? "bg-[#59E391]" : "bg-white"} rounded-md p-8 text-xl font-semibold shadow-[0_4px_0_0_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.2)] 
     hover:translate-y-[-2px] transition-all duration-300 ease-in-out cursor-pointer`}
     onClick={() => hold(id)}
    >
      {value}
    </button>
  );
};
