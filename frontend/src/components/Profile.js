<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import Header from './Header';
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaEdit } from "react-icons/fa";
import { handleError, handleResponse } from "../utils"; 
=======
import React, { useEffect, useState } from "react"; 
import Header from './Header';
>>>>>>> 8109266e54ee62c525bcd63720f27de6f49a6ace

const UserP = () => {
  const backlink = `http://localhost:8080/auth/user`;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem('id');
        const response = await fetch(backlink, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({ userId })
        });

        handleResponse(response);
        const data = await response.json();
        setUser(data.data); 

      } catch (err) {
        setError(err.message);
        handleError(`Failed to load profile: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600 text-center mt-4">
        Error loading profile: {error}
      </div>
    );
  }

<<<<<<< HEAD
  return (
    <div> 
       <Header/>
        
      <div className="max-w-2xl mx-auto mt-6 mb-10 p-6 bg-white rounded-2xl shadow-lg">
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <div className="bg-gray-200 border-2 border-dashed rounded-full w-32 h-32 flex items-center justify-center">
              <FaUser className="text-gray-400 text-5xl" />
            </div>
            <button className="absolute bottom-2 right-2 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition">
              <FaEdit size={14} />
            </button>
          </div>
          <h1 className="text-3xl font-bold mt-4 text-gray-800">{user?.name}</h1>
        </div>

        {user?.name && (
          <div className="space-y-6">
          <div className="flex items-center p-4 space-y-6 bg-blue-50 rounded-lg">
            <FaUser className="text-blue-600 mr-4 text-xl" />
            <div>
              <p className="text-sm text-gray-500">Name </p>
              <p className="text-lg font-medium">{user.name}</p>
            </div>
          </div> </div>
        )}
      
        <div className="space-y-6 mt-5">
          <div className="flex items-center p-4 bg-red-50 rounded-lg">
            <FaEnvelope className="text-blue-600 mr-4 text-xl" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-lg font-medium">{user?.email}</p>
            </div>
          </div>


          {user?.createdAt && (
            <div className="flex items-center p-4 bg-purple-50 rounded-lg">
              <FaCalendarAlt className="text-blue-600 mr-4 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Member Since</p>
                <p className="text-lg font-medium">
                  {new Date(user.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-semibold hover:from-blue-700 hover:to-blue-900 transition shadow-md">
            Edit Profile
          </button>
        </div>
      </div>
=======
   return (
   <> 
        <Header/>
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-3xl shadow-xl overflow-hidden border-t-8 border-blue-600 transform hover:scale-105 transition duration-300 ease-in-out">
      {user ? (
        <>
          <div className="text-center mb-6">
            <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto flex items-center justify-center mb-4 border-4 border-blue-300 shadow-inner text-blue-600 text-5xl font-extrabold select-none">
                {user.name ? user.name.charAt(0).toUpperCase() : '?'}
            </div>
            <h2 className="text-3xl font-extrabold text-blue-800 mb-2 leading-tight">
                Welcome, {user.name || "User"}!
            </h2>
            <p className="text-gray-600 text-lg">Your Profile Overview</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center bg-blue-50 p-4 rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <div>
                <p className="text-sm font-medium text-blue-700">Name</p>
                <p className="text-lg font-semibold text-gray-800">{user.name || "N/A"}</p>
              </div>
            </div>

            <div className="flex items-center bg-blue-50 p-4 rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m14 0V9a2 2 0 00-2-2H7a2 2 0 00-2 2v3" />
              </svg>
              <div>
                <p className="text-sm font-medium text-blue-700">Email</p>
                <p className="text-lg font-semibold text-gray-800">{user.email || "N/A"}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2025 User Profile. All rights reserved.</p>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-600">No user data available. Please log in.</p>
      )}
>>>>>>> 8109266e54ee62c525bcd63720f27de6f49a6ace
    </div>
    
   </>
  );
};

export default UserP;
