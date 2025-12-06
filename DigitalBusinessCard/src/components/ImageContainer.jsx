import image from "../assets/preeti.jpg";

const ImageContainer = () => {
  return (
    <div className="w-[250px] h-[250px] overflow-hidden rounded-tl-md rounded-tr-md">
      <img
        src={image}
        alt="women pfp"
        className="w-[350px] h-[350px] object-cover object-center scale-150  "
      />
    </div>
  );
};

export default ImageContainer;
