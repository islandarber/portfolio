import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar w-full bg-gray-800 bg-opacity-95 flex justify-end items-end font-montserrat shadow-lg p-2"  style={{zIndex: 1 }}>
      <ul className="flex space-x-8 text-white mr-8">
        {["Projects", "Skills", "Contact", "Bio"].map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.toLowerCase()}`}
              className="nav-link hover:text-customGreen transition-all duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};


export default Navbar;
