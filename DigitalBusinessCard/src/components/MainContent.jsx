import Button from "./Button";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const MainContent = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <h2 className="text-white font-bold text-xl mt-3 font-poppins leading-6">
        Preetika Nakarmee
      </h2>
      <p className="text-[#f3bf99] font-normal text-xs">Frontend-Developer</p>
      <p className="text-[#f5f5f5] font-normal text-[8px] leading-2 mb-2">
        preetika.nakarmi
      </p>
      <div className="flex justify-center items-center gap-3 mx-3">
        <Button
          label="Email"
          bgColor="white"
          textColor="#374151"
          Icon={MdEmail}
        />
        <Button
          label="LinkedIn"
          bgColor="#5093e2"
          textColor="white"
          Icon={FaLinkedin}
        />
      </div>
      <div id="about-section" className="self-start m-5">
        <div className="flex flex-col justify-center items-start mb-1">
          <p className="text-[16px] text-white font-bold leading-6">About</p>
          <p className="text-[10px] text-[#DCDCDC]  leading-1">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
        <div className="flex flex-col justify-center items-start ">
          <p className="text-[16px] text-white font-bold leading-6">
            Interests
          </p>
          <p className="text-[10px] text-[#DCDCDC] leading-1">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
