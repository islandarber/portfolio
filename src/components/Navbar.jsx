import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar sticky top-0 w-full bg-gray-800 bg-opacity-95 shadow-lg p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">My Portfolio</div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent flex flex-col md:flex-row md:space-x-8 items-center md:items-center transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          {["home", "about", "projects", "contact"].map((item) => (
            <li key={item} className="cursor-pointer list-none py-3 md:py-0 px-4">
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-80} // Adjust based on navbar height
                className={`nav-link block text-xl text-white transition-all duration-300 cursor-pointer ${
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