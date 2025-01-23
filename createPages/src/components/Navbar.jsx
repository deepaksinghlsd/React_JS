const Navbar = ()=>{
    return(
        <div className="flex justify-between items-center px-10 py-4 bg-red-300">
        {/* Left Side - Logo or Home */}
        <div className="bg-amber-800 px-4 py-2 rounded-full    hover:text-white cursor-pointer">
          Home
        </div>
      
        {/* Center - Links */}
        <div className="flex space-x-8">
          <div className="bg-amber-800 px-4 py-2 rounded-full hover:bg-amber-950 hover:text-white cursor-pointer">
            Instagram
          </div>
          <div className="bg-amber-800 px-4 py-2 rounded-full hover:bg-amber-950 hover:text-white cursor-pointer">
            GitHub
          </div>
          <div className="bg-amber-800 px-4 py-2 rounded-full hover:bg-amber-950 hover:text-white cursor-pointer">
            LinkedIn
          </div>
        </div>
      
        {/* Right Side - Call-to-Action or More Links */}
        <div className="bg-amber-800 px-4 py-2 rounded-full hover:bg-amber-950 hover:text-white cursor-pointer">
          Contact
        </div>
      </div>
      
    )
}
export default Navbar