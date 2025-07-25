import React, { useEffect, useState } from "react"; 
import Header from './Header';

const UserProfile = () => {

   const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


 console.log(user)
  useEffect(() => {

    console.log("Calling backend...for data");

    const fetchData = async () => {
      try {
 
        const userId = localStorage.getItem('id');
        const response = await fetch(`http://localhost:8080/auth/user`, {
          method: 'POST', // or 'GET' depending on your API
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}` // if using JWT
          },
          body: JSON.stringify({ userId }) // if using POST
        });
        const data = await response.json();
        
        setUser(data.data);
       
        
      } catch (err) {
        console.log("Fetch error:", err);
      }

    };

    fetchData();
  }, []);



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
    </div>
    
   </>
  );
};

export default UserProfile;