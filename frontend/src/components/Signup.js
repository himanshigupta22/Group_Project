import { Link, useNavigate } from "react-router";
import InputField from "./InputField";
import AuthButton from "./AuthButton";
import { useState } from "react";
import { handlefail, handleSuccess } from '../utils/Utils'

import { ToastContainer } from "react-toastify";


export default function Signup() {

  const [signUpInfo, setSingupInfo] = useState({
    name: '', email: '', password: '', repassword: ''
  })


  function handleChange(e) {
    const { name, value } = e.target;

    const copySignUp = { ...signUpInfo };
    copySignUp[name] = value;
    setSingupInfo(copySignUp)

  }
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password, repassword } = { ...signUpInfo };

    if (!name || !email || !password || !repassword) {
      return handlefail('All fields are required')
    }
    if (password != repassword) return handlefail("Password do not match")
    try {
      const url = "http://localhost:8080/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }, body: JSON.stringify({ 'name': `"${name}"`, 'email': email, 'password': password })
      })
      const result = await response.json();
      console.log(result);
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/login') // after this timeout redirect to logn
        }, 1000)
      }
      if (error) {
        const detail = error.details?.[0]?.message || error.message || "An error occurred";
        handlefail(detail);
      }
    } catch (err) {
      handlefail(err);
    }
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8 min-h-[520px]">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>

        <div className="flex mb-6">
          <Link to="/login" className="flex-1 text-center py-2 bg-gray-100 rounded-l-xl hover:bg-gray-200 transition">
            Login
          </Link>
          <button className="flex-1 py-2 rounded-r-xl text-white bg-blue-700 font-semibold">Signup</button>
        </div>
        {/*form
 */}
        <form onSubmit={handleSubmit}>

          {/* <input label="Name" name="name" type="text" placeholder="Enter your name"
            onChange={handleChange}value={signUpInfo.name}          />
          <input label="Email Address" name='email' type="email" placeholder="example@domain.com"
            onChange={handleChange}
            value={signUpInfo.email} />
          <input label="Password" type="password" name='password' placeholder="Create a password"
            onChange={handleChange}
            value={signUpInfo.password} />
          <input label="Password" type="password" name='repassword' placeholder="Enter Password again"
            onChange={handleChange}
            value={signUpInfo.repassword} /> */}

          <br /><br />
          <InputField label="Name" name="name" type="text" placeholder="Enter your Name" onChange={handleChange}
            value={signUpInfo.name} />
          <InputField label="Email Address" name="email" type="email" placeholder="example@domain.com" onChange={handleChange}
            value={signUpInfo.email} />
          <InputField label="Password" type="password" name="password" placeholder="Create a password" onChange={handleChange}
            value={signUpInfo.password} />
          <InputField label="Confirm Password" name="repassword" type="password" placeholder="Re-enter your password" onChange={handleChange}
            value={signUpInfo.repassword} />

          <button type="submit" className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-2 px-4 w-full rounded-lg hover:opacity-90 transition">
            Create Account</button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">Login</Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}
