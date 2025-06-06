import { Link } from "react-router";
import InputField from "./InputField";
import AuthButton from "./AuthButton";

export default function Login() {
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

        <form>
          <InputField label="Email Address" type="email" placeholder="example@domain.com" />
          <InputField label="Password" type="password" placeholder="Your password" />

          <div className="text-right text-sm text-blue-600 cursor-pointer mb-4 hover:underline">
            Forgot password?
          </div>

          <AuthButton type="submit">Login</AuthButton>
        </form>

        <p className="text-center text-sm mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-medium hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
