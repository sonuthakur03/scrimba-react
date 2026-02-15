import { FaGlobeAsia } from "react-icons/fa";
const Header = () => {
  return (
    <div
      className="bg-[#f55a5a] w-137.5 h-13.75 mx-auto flex justify-center items-center text-white text-sm"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <FaGlobeAsia className="text-2xl mr-2" />
      <p>my travel journal</p>
    </div>
  );
};

export default Header;
