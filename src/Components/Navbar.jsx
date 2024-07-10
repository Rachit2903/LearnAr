import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 fixed w-full z-10 top-0">
            <ul className="flex space-x-4">
                <NavLink to="/" className="text-white" >HOME</NavLink>
                <NavLink to="/about" className="text-white">ABOUT</NavLink>
                <NavLink to="/contact" className="text-white">CONTACT</NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;
