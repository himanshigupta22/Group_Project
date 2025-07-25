import React, { useEffect, useState } from "react";
import axiosClient from "../Utility/axiosClient";

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
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{user?.name}</h2>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{user?.email}</h2>
      

    </div>
  );
};

export default UserProfile;