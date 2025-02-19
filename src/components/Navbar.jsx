import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar sticky top-0 w-full bg-gray-800 bg-opacity-95 shadow-lg p-3 md:p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg md:text-2xl font-bold">My Portfolio</div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <span className={`block h-0.5 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block h-0.5 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-0.5 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-14 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent flex flex-col md:flex-row md:space-x-6 items-center md:items-center transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          {["home", "about", "projects", "contact"].map((item) => (
            <li key={item} className="cursor-pointer list-none py-2 md:py-0 px-3">
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-80} // Adjust based on navbar height
                className={`nav-link block text-lg md:text-xl text-white transition-all duration-300 cursor-pointer ${
                  activeSection === item ? "text-customGreen font-bold" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
