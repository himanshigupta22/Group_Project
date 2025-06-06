export default function AuthButton({ children, type = "button" }) {
  return (
    <button
      type={type}
      className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-2 px-4 w-full rounded-lg hover:opacity-90 transition"
    >
      {children}
    </button>
  );
}
