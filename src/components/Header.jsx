import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../src/index.css';
import logo from '../assets/logo2.jpeg';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-blue-950 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" title="University" className="flex items-center">
              <img src={logo} alt="University Logo" className="w-14 h-14 rounded-full" />
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-white md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              to="/"
              className="text-sm font-medium text-white transition duration-200 hover:text-opacity-70 focus:text-opacity-70"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-white transition duration-200 hover:text-opacity-70 focus:text-opacity-70"
            >
              About
            </Link>
            <Link
              to="/courses"
              className="text-sm font-medium text-white transition duration-200 hover:text-opacity-70 focus:text-opacity-70"
            >
              Courses
            </Link>
            <Link
              to="/blogs"
              className="text-sm font-medium text-white transition duration-200 hover:text-opacity-70 focus:text-opacity-70"
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-white transition duration-200 hover:text-opacity-70 focus:text-opacity-70"
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <nav className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-blue-950 bg-opacity-95">
              <button
                type="button"
                className="absolute top-4 right-4 p-2 text-white rounded-md focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="flex flex-col items-center space-y-6">
                <Link
                  to="/"
                  className="py-2 text-lg font-medium text-white transition duration-200 hover:text-opacity-70 focus:text-opacity-70"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="py-2 text-lg font-medium text-white transition duration-200 hover:text-opacity-70 focus:text-opacity-70"
                  onClick={toggleMobileMenu}
                >
                  About
                </Link>
                <Link
                  to="/courses"
                  className="py-2 text-lg font-medium text-white transition duration-200 hover:text-opacity-70 focus:text-opacity-70"
                  onClick={toggleMobileMenu}
                >
                  Courses
                </Link>
                <Link
                  to="/blogs"
                  className="py-2 text-lg font-medium text-white transition duration-200 hover:text-opacity-70 focus:text-opacity-70"
                  onClick={toggleMobileMenu}
                >
                  Blogs
                </Link>
                <Link
                  to="/contact"
                  className="py-2 text-lg font-medium text-white transition duration-200 hover:text-opacity-70 focus:text-opacity-70"
                  onClick={toggleMobileMenu}
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
