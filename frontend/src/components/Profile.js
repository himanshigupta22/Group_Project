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
    </div>
    
   </>
  );
};

export default UserP;
