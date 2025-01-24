const Navbar = ()=>{
    return(
      <div className="flex justify-between items-center px-10 py-4 bg-red-300">
  {/* Left Side - Logo or Home */}
  <div className="bg-amber-800 px-4 py-2 rounded-full hover:text-white cursor-pointer">
    Home
  </div>

  {/* Center - Links */}
  <div className="flex space-x-8">
    
    <a
      href="https://https://github.com/deepaksinghlsd.comhttps://github.com/deepaksinghlsd" // Replace with your GitHub profile link
      target="_blank"
      rel="noopener noreferrer"
      className="bg-amber-800 px-4 py-2 rounded-full hover:bg-amber-950 hover:text-white cursor-pointer"
    >
      GitHub
    </a>
    <a
      href="https://https://www.linkedin.com/in/deepak-kumar-singh-486994215/.com" // Replace with your LinkedIn profile link
      target="_blank"
      rel="noopener noreferrer"
      className="bg-amber-800 px-4 py-2 rounded-full hover:bg-amber-950 hover:text-white cursor-pointer"
    >
      LinkedIn
    </a>
    <a
      href="https://www.facebook.com/profile.php?id=100027380963528"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-amber-800 px-4 py-2 rounded-full hover:bg-amber-950 hover:text-white cursor-pointer"
    >
      Facebook
    </a>
  </div>

  {/* Right Side - Call-to-Action or More Links */}
  <div className="bg-amber-800 px-4 py-2 rounded-full hover:bg-amber-950 hover:text-white cursor-pointer">
    Contact
  </div>
</div>

      
    )
}
export default Navbar