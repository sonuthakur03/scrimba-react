import { TbChefHat } from "react-icons/tb";

const Header = () => {
  return (
    <header
      className="flex justify-center items-center w-full h-24 gap-6 "
      style={{
        boxShadow:
          "0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
      }}
    >
      <TbChefHat className="text-black text-5xl" />
      <p className="text-3xl font-bold tracking-wider">Chef Claude</p>
    </header>
  );
};

export default Header;
