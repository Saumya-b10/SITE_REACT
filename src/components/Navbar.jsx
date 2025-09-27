import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ setMenuOpen, menuOpen }) => {
  return (
    <div>
      <header>
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
          <NavLink to="/" className="flex items-center space-x-2">
            <img src="/monologo.jpeg" alt="Monasteries" className="h-10 w-10" />
            <h1 className="text-xl font-bold">Monastery360</h1>
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-medium">
            <li>
              <NavLink to="/" className="hover:text-blue-600">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/monasteries" className="hover:text-blue-600">
                Monasteries
              </NavLink>
            </li>
            <li>
              <NavLink to="/community" className="hover:text-blue-600">
                Community
              </NavLink>
            </li>
            <li>
              <NavLink to="/ar" className="hover:text-blue-600">
                AR
              </NavLink>
            </li>
            <li>
              <NavLink to="/360tour" className="hover:text-blue-600">
                360Tour
              </NavLink>
            </li>
            <li>
              <NavLink to="/booking" className="hover:text-blue-600">
                Booking
              </NavLink>
            </li>
          </ul>

          {/* Hamburger Button */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col space-y-4 p-4 bg-white shadow-lg">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/monasteries">Monasteries</a>
            </li>
            <li>
              <a href="/community">Community</a>
            </li>
            <li>
              <a href="/ar">AR</a>
            </li>
            <li>
              <a href="/360tour">360Tour</a>
            </li>
            <li>
              <a href="/booking">Booking</a>
            </li>
          </ul>
        )}
      </header>
    </div>
  );
};

export default Navbar;
