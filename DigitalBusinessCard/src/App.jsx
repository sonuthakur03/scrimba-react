import Footer from "./components/Footer";
import ImageContainer from "./components/ImageContainer";
import MainContent from "./components/MainContent";

export default function App() {
  return (
    <>
      <div className="h-screen w-full bg-[#1d1d1d] flex flex-col justify-center items-center">
        <div className="w-[250px] h-auto bg-[#23252C] border border-gray-300 rounded-md ">
          <ImageContainer />
          <MainContent />
          <Footer />
        </div>
      </div>
    </>
  );
}
