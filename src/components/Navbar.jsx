import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar w-full bg-gray-800 bg-opacity-95 flex justify-end items-end font-montserrat shadow-lg p-2" style={{ zIndex: 1 }}>
      <ul className="flex space-x-8 text-white mr-8">
        {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
          <li key={index}>
            <Link
              to={item.toLowerCase()}
              smooth={true}
              duration={500} // Smooth scrolling duration
              className="nav-link hover:text-customGreen transition-all duration-300"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
