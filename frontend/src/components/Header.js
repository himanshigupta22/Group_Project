import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { handleSuccess, handleError } from "../utils";
import { ToastContainer } from "react-toastify";

import Profile from "./Profile";
import { FaUserCircle } from "react-icons/fa";   //profile

// import { useNavigate } from "react-router-dom";


const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = (e) => {
    if (loggedInUser) {
      handleSuccess("User Loggedout");
      localStorage.removeItem("loggedInUser");
      localStorage.removeItem("token");
      setTimeout(() => {
        navigate("/");
      }, 100);
    }
    else {
      handleError("Please login Before loggin out")
    }

  };

  // const ProfileMenu = () => {
  //   const userLoggedIn=localStorage.getItem("loggedInUser");
  //   if (loggedInUser) {

  //     <Profile user={{userLoggedIn}}/>
  //   }
  //   else {
  //     handleError("Please login Before loggin out")
  //   }
  // }

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

          {/* Profile / auth menu */}
          <div className="relative">
            {/* Button / icon */}
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="flex items-center gap-1 text-white text-lg font-semibold focus:outline-none"
            >
              <FaUserCircle className="text-4xl" />
              {loggedInUser && (
                <span className="hidden sm:inline">{loggedInUser}</span>
              )}
            </button>

            {/* Dropdown */}
            {showMenu && (
              <div className="absolute right-0 mt-2 w-36 rounded-md bg-white shadow-lg z-50">
                {!loggedInUser ? (
                  <>
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-gray-700 hover:bg-pink-200"
                      onClick={() => setShowMenu(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowMenu(false)}
                    >
                      Signup
                    </Link>
                  </>
                ) : (<>

                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowMenu(true)}
                  >
                    Profile
                  </Link>

                  <Link
                    to="/studyMaterial"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowMenu(false)}
                  >
                    All Notes
                  </Link>


                  <button
                    onClick={() => {
                      handleLogout();
                      setShowMenu(false);
                    }}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
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
      <ToastContainer />
    </header >
  );
};

module.exports=Header;
// export default Header;
