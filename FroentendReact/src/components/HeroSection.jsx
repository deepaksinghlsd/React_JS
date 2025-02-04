import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
  
} from "@fortawesome/free-solid-svg-icons";
const HeroSection = () => {
  return (
    <div className="bg-pink-200 p-[8%] ">
      <div className="flex justify-center items-center">
        <div className="text-4xl font-bold">How can we help?</div>
      </div>

      <div className="flex justify-center items-center mt-3">
        <div className="bg-white w-2xl p-1.5 rounded flex justify-between items-center">
         <input type="text" className="outline-none rounded-sm" placeholder="Search..." />
          <FontAwesomeIcon icon={faArrowRight} className="text-gray-500 mr-2" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
