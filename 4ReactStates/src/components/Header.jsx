import { TbChefHat } from "react-icons/tb";

const Header = () => {
  return (
    <header className="flex justify-center items-center w-[50%] h-24 gap-6 my-0 mx-auto bg-[#fafaf8] border-b-2 border-black mt-10">
      <TbChefHat className="text-black text-5xl" />
      <p className="text-3xl font-bold tracking-wider">Chef Claude</p>
    </header>
  );
};

export default Header;
