import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Sections = () => {
  return (
    <div className="mt-20 pl-10 flex justify-evenly">
        <div>
        <div className="flex">
        <div>
          <FontAwesomeIcon icon={faCodeBranch} className="text-3xl text-amber-900" />
        </div>
        <div className="ml-8">
          <span className="font-bold text-xl">Branches</span>
          <p>Lorem ipsum dolor sit amet.</p>
          <span className="text-purple-400">Leran More</span>
        </div>
      </div>
      <div className="flex mt-5">
        <div>
          <FontAwesomeIcon icon={faCodeBranch} className="text-3xl text-amber-900" />
        </div>
        <div className="ml-8 mt-5">
          <span className="font-bold text-xl">Branches</span>
          <p>Lorem ipsum dolor sit amet.</p>
          <span className="text-purple-400">Leran More</span>
        </div>
      </div>
      <div className="flex mt-5">
        <div>
          <FontAwesomeIcon icon={faCodeBranch} className="text-3xl text-amber-900" />
        </div>
        <div className="ml-8">
          <span className="font-bold text-xl">Branches</span>
          <p>Lorem ipsum dolor sit amet.</p>
          <span className="text-purple-400">Leran More</span>
        </div>
      </div>
        </div>
        {/* Leftside  */}

        <div>
        <div className="flex">
        <div>
          <FontAwesomeIcon icon={faCodeBranch} className="text-3xl text-amber-900" />
        </div>
        <div className="ml-8">
          <span className="font-bold text-xl">Branches</span>
          <p>Lorem ipsum dolor sit amet.</p>
          <span className="text-purple-400">Leran More</span>
        </div>
      </div>
      <div className="flex mt-5">
        <div>
          <FontAwesomeIcon icon={faCodeBranch} className="text-3xl text-amber-900" />
        </div>
        <div className="ml-8 mt-5">
          <span className="font-bold text-xl">Branches</span>
          <p>Lorem ipsum dolor sit amet.</p>
          <span className="text-purple-400">Leran More</span>
        </div>
      </div>
      <div className="flex mt-5">
        <div>
          <FontAwesomeIcon icon={faCodeBranch} className="text-3xl text-amber-900" />
        </div>
        <div className="ml-8">
          <span className="font-bold text-xl">Branches</span>
          <p>Lorem ipsum dolor sit amet.</p>
          <span className="text-purple-400">Leran More</span>
        </div>
      </div>
        </div>
    </div>
  );
};

export default Sections;
