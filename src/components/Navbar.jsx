import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Navbar = ({ setMenuOpen, menuOpen }) => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");

  const handleThemeToggle = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPerferDark = window.matchMedia(
      "(prefers-color-scheme:dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPerferDark) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <header>
        <nav className="flex items-center justify-between px-8 py-4 bg-white dark:bg-gray-900 shadow-md transition-colors">
          <NavLink to="/" className="flex items-center space-x-2">
            <img src="/monologo.jpeg" alt="Monasteries" className="h-10 w-10" />
            <h1 className="text-xl font-bold text-[#5D4037] dark:text-[#D7CCC8]">
              Monastery360
            </h1>
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex justify-between items-center space-x-6 gap-10">
            <div className="flex space-x-6">
              <li>
                {/* MODIFIED: Added font-bold and text color */}
                <NavLink
                  to="/"
                  className="font-bold text-[#5D4037] dark:text-[#D7CCC8]"
                >
                  Home
                </NavLink>
              </li>
              <li>
                {/* MODIFIED: Added font-bold and text color */}
                <NavLink
                  to="/monasteries"
                  className="font-bold text-[#5D4037] dark:text-[#D7CCC8]"
                >
                  Monasteries
                </NavLink>
              </li>
              <li>
                {/* MODIFIED: Added font-bold and text color */}
                <NavLink
                  to="/community"
                  className="font-bold text-[#5D4037] dark:text-[#D7CCC8]"
                >
                  Community
                </NavLink>
              </li>
              <li>
                {/* MODIFIED: Added font-bold and text color */}
                <NavLink
                  to="/ar"
                  className="font-bold text-[#5D4037] dark:text-[#D7CCC8]"
                >
                  AR
                </NavLink>
              </li>
              <li>
                {/* MODIFIED: Added font-bold and text color */}
                <NavLink
                  to="/360tour"
                  className="font-bold text-[#5D4037] dark:text-[#D7CCC8]"
                >
                  360Tour
                </NavLink>
              </li>
              <li>
                {/* MODIFIED: Added font-bold and text color */}
                <NavLink
                  to="/booking"
                  className="font-bold text-[#5D4037] dark:text-[#D7CCC8]"
                >
                  Booking
                </NavLink>
              </li>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={handleThemeToggle}
                className="flex cursor-pointer items-center gap-2 bg-[#E8EDF5] dark:bg-gray-800  px-2 py-1 rounded-lg transition-colors"
              >
                {theme === "dark" ? (
                  <MdDarkMode className="h-5 w-5 text-[#2563eb]" />
                ) : (
                  <MdLightMode className="h-5 w-5 text-[#0D80F2]" />
                )}
              </button>
              <button
                onClick={() => navigate("/login")}
                className="cursor-pointer bg-primary font-bold rounded-md  text-white px-3 py-2 dark:text-[#D7CCC8]"
              >
                Login
              </button>
            </div>
          </ul>

          {/* Hamburger Button */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-0.5 bg-black dark:bg-white"></span>
            <span className="w-6 h-0.5 bg-black dark:bg-white"></span>
            <span className="w-6 h-0.5 bg-black dark:bg-white"></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col space-y-4 p-4 bg-white dark:bg-gray-900 shadow-lg transition-colors">
            <div className="space-y-4">
              <li>
                 {/* MODIFIED: Added font-bold and text color */}
                <NavLink
                  to="/"
                  className="font-bold text-[#5D4037] dark:text-[#D7CCC8]"
                >
                  Home
                </NavLink>
              </li>
              <li>
                 {/* MODIFIED: Added font-bold and text color */}
                <NavLink
                  to="/monasteries"
                  className="font-bold text-[#5D4037] dark:text-[#D7CCC8]"
                >
                  Monasteries
                </NavLink>
              </li>
              <li>
                 {/* MODIFIED: Added font-bold and text color */}
                <NavLink
                  to="/community"
                  className="font-bold text-[#5D4037] dark:text-[#D7CCC8]"
                >
                  Community
                </NavLink>
              </li>
              <li>
                 {/* MODIFIED: Added font-bold and text color */}
                <NavLink
                  to="/ar"
                  className="font-bold text-[#5D4037] dark:text-[#D7CCC8]"
                >
                  AR
                </NavLink>
              </li>
              <li>
                 {/* MODIFIED: Added font-bold and text color */}
                <NavLink
                  to="/360tour"
                  className="font-bold text-[#5D4037] dark:text-[#D7CCC8]"
                >
                  360Tour
                </NavLink>
              </li>
              <li>
                 {/* MODIFIED: Added font-bold and text color */}
                <NavLink
                  to="/booking"
                  className="font-bold text-[#5D4037] dark:text-[#D7CCC8]"
                >
                  Booking
                </NavLink>
              </li>
            </div>
            <div onClick={() => navigate("/login")}>
              <button
                onClick={handleThemeToggle}
                className="flex cursor-pointer items-center gap-2 bg-[#E8EDF5] dark:bg-gray-800 p-2 rounded-lg transition-colors"
              >
                {theme === "dark" ? (
                  <MdDarkMode className="h-5 w-5 text-[#2563eb]" />
                ) : (
                  <MdLightMode className="h-5 w-5 text-[#0D80F2]" />
                )}
              </button>
              <button className="font-bold text-[#5D4037] dark:text-[#D7CCC8]">
                Login
              </button>
            </div>
          </ul>
        )}
      </header>
    </div>
  );
};

export default Navbar;
