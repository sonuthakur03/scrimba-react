import { FaGithub, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#161619] flex justify-center items-center gap-5 p-2 rounded-bl-md rounded-br-md">
      <FaGithub size={20} className="text-[#918e9b]" />
      <FaTwitter size={20} className="text-[#918e9b]" />
      <FaInstagram size={20} className="text-[#918e9b]" />
      <FaFacebook size={20} className="text-[#918e9b]" />
    </footer>
  );
};

export default Footer;
