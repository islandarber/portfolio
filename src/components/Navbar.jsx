import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/src/assets/logo1.png'; // Your logo path here

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-2 flex justify-between items-center font-montserrat shadow-lg">
      <NavLink to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="h-20 w-auto mr-2" />
      </NavLink>
      <ul className="flex space-x-8 text-white">
        {['Projects', 'Skills', 'Contact', 'Bio'].map((item, index) => (
          <li key={index}>
            <NavLink
              to={`/${item.toLowerCase()}`}
              className="hover:text-blue-400 transition-all duration-300"
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
