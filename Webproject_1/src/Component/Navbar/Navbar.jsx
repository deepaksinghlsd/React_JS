import React from "react";
// import "./Navbar.css";
import img1 from "../../assets/Image/cybricallogo1.png"

const Navbar = (propes) => {
  return (
    <div className="bg-red-600  flex items-center justify-between container-navbar">
      <div className="px-60">

        <ul className="flex space-x-5 item-center gap-4 p-6 font-bold text-xl">
          <li>
            <label htmlFor="Name">Enter Your Name</label>
            <input type="text" id="Name" value={propes.userName} /></li>
          <li className="font-bold text-xl">{propes.Nam}</li>
          <li>Contact</li>
          <li>About</li>
          <li>
            <img src={img1} alt="" width={90}/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
