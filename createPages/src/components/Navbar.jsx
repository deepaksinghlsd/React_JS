import { Link } from "react-router-dom"
import {useState} from "react";
const Navbar = ()=>{
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <div className="flex justify-between items-center px-6 py-4 bg-red-300">
          {/* Left Side - Logo or Home */}
          <Link to="/Home">
              <div className="bg-amber-800 px-4 py-2 rounded-full hover:text-white cursor-pointer">
                  Home
              </div>
          </Link>

          {/* Hamburger Menu for Small Screens */}
          <button
              className="text-amber-800 text-2xl mx-0  md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
              ☰
          </button>

          {/* Center Links - Hidden on small screens, visible on medium and larger */}
          <div
              className={`flex-col md:flex-row md:space-x-8 md:flex ${
                  isMenuOpen ? "flex" : "hidden"
              } absolute md:static top-16 left-0 md:top-auto md:left-auto bg-red-300 w-full md:w-auto px-6 md:px-0 py-4 md:py-0`}
          >
              <a
                  href="https://github.com/deepaksinghlsd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-800 px-4 py-2 rounded-full hover:bg-amber-950 hover:text-white cursor-pointer my-2 md:my-0"
              >
                  GitHub
              </a>
              <a
                  href="https://www.linkedin.com/in/deepak-kumar-singh-486994215/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-800 px-4 py-2 rounded-full hover:bg-amber-950 hover:text-white cursor-pointer my-2 md:my-0"
              >
                  LinkedIn
              </a>
              <a
                  href="https://www.facebook.com/profile.php?id=100027380963528"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-800 px-4 py-2 rounded-full hover:bg-amber-950 hover:text-white cursor-pointer my-2 md:my-0"
              >
                  Facebook
              </a>
          </div>

          {/* Right Side - Call-to-Action */}
          <Link to='/contact'>
          <div className="hidden md:block bg-amber-800 px-4 py-2 rounded-full hover:bg-amber-950 hover:text-white cursor-pointer">
              Contact
          </div>
          </Link>
      </div>
  );
};
export default Navbar