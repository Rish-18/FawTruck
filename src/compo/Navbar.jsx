import { useState } from "react";
import img1 from "../assets/img1.png"; // Corrected typo in path
import logo2 from "../assets/logo2.png"; // Corrected typo in path

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-[60px] bg-[#00308F] shadow-md z-20 rounded-bl-lg rounded-br-lg">
      <div className="container mx-auto max-w-screen-xl px-4 lg:px-8 py-2 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src={img1}
            alt="Logo 1"
            className="h-12"
          />
          <img
            src={logo2}
            alt="Logo 2"
            className="h-6 w-auto sm:h-4 md:h-5"
          />

        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
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
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>



        {/* Navbar Links */}
        <ul
          className={`md:flex md:space-x-10 md:items-center absolute md:static top-14 left-0 w-full md:w-auto bg-[#00308F] md:bg-transparent transition-all duration-300 ${isMenuOpen ? "block" : "hidden"
            }`}
        >
          <li className="flex justify-center items-center border-b border-gray-700 md:border-none">
            <a
              href="#home"
              className="block px-4 py-2 text-white hover:bg-white hover:text-black transition"
            >
              Home
            </a>
          </li>
          <li className="flex justify-center items-center border-b border-gray-700 md:border-none">
            <a
              href="#models"
              className="block px-4 py-2 text-white hover:bg-white hover:text-black transition"
            >
              Models
            </a>
          </li>
          <li className="flex justify-center items-center border-b border-gray-700 md:border-none">
            <a
              href="#about"
              className="block px-4 py-2 text-white hover:bg-white hover:text-black transition"
            >
              About
            </a>
          </li>
          <li className="flex justify-center items-center border-b border-gray-700 md:border-none">
            <a
              href="#contact"
              className="block px-4 py-2 text-white hover:bg-white hover:text-black transition"
            >
              Contact
            </a>
          </li>
          <li className="flex justify-center items-center border-b border-gray-700 md:border-none">
            <a
              href="#call"
              className="block px-4 py-2 text-white hover:bg-white hover:text-black transition"
            >
              {/* add hidden class if dont want in ham menu  */}
              <button className="md:block px-3 py-1 bg-white text-blue-700 rounded-lg hover:bg-blue-100 transition text-sm md:text-base">
                Request Call
              </button>
            </a>
          </li>
        </ul>


      </div>
    </nav>
  );
}

