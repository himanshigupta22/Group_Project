
import React, { useEffect } from "react";
import Header from './Header'

export default function Profile({ user }) {

    // useEffect(()=>{
    //     const fetchData = async () => {
    //     }
    // },[])
    console.log(user)


    return (
        <>
            <Header />
            <div className="p-4 bg-white shadow rounded max-w-md mx-auto mb-6">
                <h2 className="text-xl font-bold mb-4">👤 User Information</h2>
                <div className="space-y-2">
                    <p><strong>Name:</strong> { }</p>
                    <p><strong>Email:</strong> { }</p>
                    <p><strong>Username:</strong> { }</p>
                    {/* Add more fields as needed */}
                </div>
            </div>
        </>
    );
}

// export default Profile;
