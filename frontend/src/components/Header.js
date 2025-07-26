import React, { useState, useEffect } from "react";
// FIX: Imports must come from 'react-router-dom' for web apps
import { Link, useNavigate } from "react-router";
import { handleSuccess, handleError } from "../utils";
import { ToastContainer } from "react-toastify";
import { FaUserCircle } from "react-icons/fa";

// FIX: Removed unused import for 'UserP'

const Header = () => {
  // BEST PRACTICE: Using `null` is often clearer for "no user" state than an empty string
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  const handleLogout = () => {
    // The check `if (loggedInUser)` is redundant here because this button
    // is only shown to logged-in users, but it doesn't hurt to keep.

    handleSuccess("You have been successfully logged out.");

    // FIX: Explicitly set state to null for clarity
    setLoggedInUser(null);

    // Clear all authentication-related items from storage
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("token");
    localStorage.removeItem("id");

    // FIX: Navigate immediately. Do not make the user wait for a toast.
    navigate("/");
  };

  const closeMenu = () => setShowMenu(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-950 to-blue-700 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-white text-3xl md:text-4xl font-bold">
          Not<span className="text-yellow-400 text-4xl">e</span>Stack
        </Link>

        {/* Navigation */}
        <nav className="flex space-x-6 items-center">
          <Link to="/" className="text-white text-lg font-semibold hover:text-yellow-400 transition">
            Home
          </Link>
          <Link to="/about" className="text-white text-lg font-semibold hover:text-yellow-400 transition">
            About
          </Link>

          {/* Profile / auth menu */}
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="flex items-center gap-2 text-white text-lg font-semibold focus:outline-none"
              aria-haspopup="true"
              aria-expanded={showMenu}
            >
              <FaUserCircle className="text-3xl" />
              {loggedInUser && (
                <span className="hidden sm:inline">{loggedInUser}</span>
              )}
            </button>

            {/* Dropdown */}
            {showMenu && (
              <div className="absolute right-0 mt-2 w-40 rounded-md bg-white shadow-lg z-50 py-1">
                {!loggedInUser ? (
                  <>
                    <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={closeMenu}>
                      Login
                    </Link>
                    <Link to="/signup" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={closeMenu}>
                      Signup
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={closeMenu}>
                      Profile
                    </Link>
                    <Link to="/studyMaterial" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={closeMenu}>
                      All Notes
                    </Link>
                    <div className="border-t my-1 border-gray-200"></div> {/* Separator */}
                    <button
                      onClick={() => {
                        handleLogout();
                        closeMenu();
                      }}
                      className="w-full text-left px-4 py-2 text-red-600 font-medium hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </nav>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </header>
  );
};

// FIX: Use ES Module export syntax
export default Header;