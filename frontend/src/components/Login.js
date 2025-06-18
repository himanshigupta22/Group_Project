import { Link } from "react-router";
import InputField from "./InputField";
import AuthButton from "./AuthButton";
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { ToastContainer } from 'react-toastify';
import { handlefail, handleSuccess } from '../utils/Utils'




export default function Login() {


  const [loginInfo, setLoginInfo] = useState({
    email: '', password: '', repassword: ''
  })


  function handleChange(e) {
    const { name, value } = e.target;

    const copyLogin = { ...loginInfo };
    copyLogin[name] = value;
    setLoginInfo(copyLogin)

  }
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = { ...loginInfo };
    console.log(loginInfo)

    if (!email || !password) {
      return handlefail('All fields are required')
    }
    try {
      const url = "http://localhost:8080/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }, body: JSON.stringify({ 'email': email, 'password': password })
      })
      const result = await response.json();
      console.log(result);
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/') // after this timeout redirect to logn
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

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>

        <div className="flex mb-6">
          <button className="flex-1 py-2 rounded-l-xl text-white bg-blue-700 font-semibold">Login</button>
          <Link to="/signup" className="flex-1 text-center py-2 bg-gray-100 rounded-r-xl hover:bg-gray-200 transition">
            Signup
          </Link>
        </div>

        <form method="POST" onSubmit={handleSubmit}>
          {/* 
          <input type="email" required name="email" placeholder="Enter Your Email" />
          <br />
          <br />
          <input type="text" required name="password" placeholder="Enter Password" />
          <br />
          <br /> */}

          <InputField label="Email Address" name="email" type="email" placeholder="example@domain.com" onChange={handleChange} value={loginInfo.email} />
          <InputField label="Password" name="password" type="password" placeholder="Your password" onChange={handleChange} value={loginInfo.password} />

          <div className="text-right text-sm text-blue-600 cursor-pointer mb-4 hover:underline">
            Forgot password?
          </div>

          {/* <button type="submit" >LogIN</button> */}
          <AuthButton type="submit">Login</AuthButton>
        </form>

        <p className="text-center text-sm mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-medium hover:underline">Sign up</Link>
        </p>
      </div><ToastContainer />
    </div>
  );
}
