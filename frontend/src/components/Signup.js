import { Link } from "react-router";
import InputField from "./InputField";
import AuthButton from "./AuthButton";

export default function Signup() {
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

        <form>
          <InputField label="Email Address" type="email" placeholder="example@domain.com" />
          <InputField label="Password" type="password" placeholder="Create a password" />
          <InputField label="Confirm Password" type="password" placeholder="Re-enter your password" />

          <AuthButton type="submit">Create Account</AuthButton>
        </form>

        <p className="text-center text-sm mt-6 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}
