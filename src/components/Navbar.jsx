import React from "react";
import { Link } from "react-scroll";

const Navbar = ({ activeSection }) => {
  return (
    <nav
      className="navbar w-full bg-gray-800 bg-opacity-95 flex justify-center items-center gap-2 font-source shadow-lg p-4 z-50 transition-all duration-300"
      aria-label="Main Navigation"
    >
      <ul className="flex space-x-8 text-white">
        {["home", "about", "projects", "contact"].map((item) => (
          <li key={item}>
            <Link
              to={item}
              smooth={true}
              duration={500}
              offset={-80} // Adjust the offset as needed based on navbar height
              className={`nav-link transition-all duration-300 text-xl ${
                activeSection === item
                  ? "text-customGreen font-bold"
                  : ""
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
