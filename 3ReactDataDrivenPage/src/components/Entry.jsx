/**
 * Challenge: Build out the Entry component and render 1 instance of it
 * to the App
 *
 * For now, just hard-code in the data, which you can find in
 * japan.md so you don't have to type it all out manually :)
 *
 * Notes:
 * – Only render 1 instance of this Entry component for now
 * – I've pulled in marker.png for the little map marker icon
 *   that goes next to the location name
 * – The main purpose of this challenge is to show you where our limitations
 *   currently are, so don't worry about the fact that you're hard-coding all
 *   this data into the component.
 */
import { FaMapMarkerAlt } from "react-icons/fa";

const Entry = ({ img, title, country, googleMapsLink, dates, text }) => {
  // console.log(entry.img.src);
  // const { img, title, country, googleMapsLink, dates, text } = entry;
  return (
    <div
      className="flex w-117.5 h-52 justify-center items-center gap-6 border-b-2"
      style={{ fontFamily: "Inter , sans-serif" }}
    >
      <div id="image" className="w-30.25 h-42 rounded-sm shrink-0">
        <img src={img.src} alt={img.alt} className="h-42 w-full rounded-sm " />
      </div>
      <div id="info" className="flex flex-col justify-center">
        <div id="info-header" className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-[#f55a5a] h-3.5 w-2.5" />
          <p className="text-[#2B283A] font-light tracking-[4px] text-[10px] ">
            {country}
          </p>
          <a
            href={googleMapsLink}
            className="text-[#918E9B] underline text-[10px]"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="text-[#2B283A] font-extrabold text-3xl mb-3">{title}</h2>
        <p className="text-[12px] font-extrabold my-1.5">{dates}</p>
        <p className="text-[10px]">{text}</p>
      </div>
    </div>
  );
};

export default Entry;
