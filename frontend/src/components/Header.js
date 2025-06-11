import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-950 to-blue-700 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-white text-3xl md:text-4xl font-bold">
          My Not<span className="text-yellow-400 text-5xl">e</span>Book
        </Link>

        {/* Navigation */}
        <nav className="flex space-x-6">
          <Link
            to="/"
            className="text-white text-lg font-semibold hover:text-yellow-400 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white text-lg font-semibold hover:text-yellow-400 transition"
          >
            About
          </Link>
          <Link
            to="/login"
            className="text-white text-lg font-semibold hover:text-yellow-400 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-white text-lg font-semibold hover:text-yellow-400 transition"
          >
            Signup
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
