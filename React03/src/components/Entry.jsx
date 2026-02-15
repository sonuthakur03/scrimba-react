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

const Entry = () => {
  return (
    <div
      className="flex w-117.5 h-52 justify-center items-center gap-6"
      style={{ fontFamily: "Inter , sans-serif" }}
    >
      <div id="image" className="w-30.25 h-42 rounded-sm shrink-0">
        <img
          src="https://imgs.search.brave.com/3_ZiPQqSO-7UyE23KaxEG-edQZJX-DN4QQiqwHnsW70/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/My8yMC8xNS80MC9u/YXR1cmUtNzA4MTEz/OF82NDAuanBn"
          alt="mt fuji"
          className="h-42 w-full rounded-sm "
        />
      </div>
      <div id="info" className="flex flex-col justify-center">
        <div id="info-header" className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-[#f55a5a] h-3.5 w-2.5" />
          <p className="text-[#2B283A] font-light tracking-[4px] text-[10px] ">
            JAPAN
          </p>
          <a
            href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu
"
            className="text-[#918E9B] underline text-[10px]"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="text-[#2B283A] font-extrabold text-3xl mb-3">
          Mount Fuji
        </h2>
        <p className="text-[12px] font-extrabold my-1.5">
          12 Jan, 2023 - 24 Jan, 2023
        </p>
        <p className="text-[10px]">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
};

export default Entry;
