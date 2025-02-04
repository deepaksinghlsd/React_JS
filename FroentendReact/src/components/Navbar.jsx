import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
const Navbar = () =>{
    
    return(
        <div className="flex justify-between font-bold items-center bg-black border-t text-white mt-[-5px] p-2">
            <div className="flex pl-2 gap-2">
                <div className="gap-1">
                
                <FontAwesomeIcon icon={faSquareArrowUpRight}/>
                   <span> Abstract</span>
                </div>
                <FontAwesomeIcon className="bg-white" icon="fa-solid fa-arrow-up-right-from-square" />
                <div>
                    <span className="font-extrabold">|</span>
                   <span> Help Center</span>
                </div>
            </div>
            <div className="flex gap-2 items-center pr-2">
                <div className="bg-gray-700 border rounded p-1">Submit a request</div>
                <div className="bg-blue-500 rounded from-neutral-50 p-1">Sign in</div>
            </div>
        </div>
    )
}
export default Navbar;