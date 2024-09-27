import imgLogo from "../assets/images/logo.svg";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full py-4 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Navbar logo */}
        <a
          href="#"
          className="text-xl font-bold text-indigo-600 flex items-center"
        >
          <img src={imgLogo} alt="Logo" className="w-8 h-8 mr-2" />
          Hábitos
        </a>

        {/* Hamburger Icon for mobile */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Menu for larger screens */}
        <div className="hidden md:flex space-x-6 font-bold">
          <a
            href="#"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            Contacts
          </a>
        </div>
      </div>

      {/* Menu for mobile devices */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 py-2 space-y-2 font-bold">
            <a
              href="#"
              className="block text-gray-600 hover:text-indigo-600 transition"
            >
              About Us
            </a>
            <a
              href="#"
              className="block text-gray-600 hover:text-indigo-600 transition"
            >
              Contacts
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
