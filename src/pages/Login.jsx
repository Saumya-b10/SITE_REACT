import React from "react";
import { NavLink } from "react-router-dom";
// Step 1: Import useAuth to access the context
import { useAuth } from "../context/AuthContext"; // <-- Adjust path if needed

const Login = () => {
  // Step 2: Get email, password, and their setters from the context
  const { email, setEmail, password, setPassword } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    // This will now work correctly
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-300  mx-auto md:p-6 p-4 text-left text-sm rounded-xl shadow-lg my-20">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-100">
        Welcome back
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          className="w-full bg-transparent border my-3 border-gray-300 dark:border-gray-600 outline-none rounded-full py-2.5 px-4 focus:ring-2 focus:ring-primary dark:focus:ring-primary"
          type="email"
          placeholder="Enter your email"
          value={email} // This now refers to the context state
          onChange={(e) => setEmail(e.target.value)} // This now updates the context state
          required
        />
        <input
          id="password"
          className="w-full bg-transparent border mt-1 border-gray-300 dark:border-gray-600 outline-none rounded-full py-2.5 px-4 focus:ring-2 focus:ring-primary dark:focus:ring-primary"
          type="password"
          placeholder="Enter your password"
          value={password} // This now refers to the context state
          onChange={(e) => setPassword(e.target.value)} // This now updates the context state
          required
        />
        <div className="text-right py-4">
          <a
            className="text-primary dark:text-primary underline hover:text-primary dark:hover:text-primary"
            href="#"
          >
            Forgot Password
          </a>
        </div>
        <button
          type="submit"
          className="w-full mb-3 bg-primary hover:bg-primary dark:bg-primary dark:hover:bg-primary py-2.5 rounded-full text-white transition"
        >
          Log in
        </button>
      </form>
      <p className="text-center mt-4">
        Don’t have an account?{" "}
        <NavLink
          to="/signup"
          className="text-primary dark:text-primary underline hover:text-primary dark:hover:text-primary"
        >
          Signup
        </NavLink>
      </p>
      <button
        type="button"
        className="w-full flex items-center gap-2 justify-center mt-5 bg-black hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 py-2.5 rounded-full text-white transition"
      >
        <img
          className="h-4 w-4"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/appleLogo.png"
          alt="appleLogo"
        />
        Log in with Apple
      </button>
      <button
        type="button"
        className="w-full flex items-center gap-2 justify-center my-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 py-2.5 rounded-full text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
      >
        <img
          className="h-4 w-4"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png"
          alt="googleFavicon"
        />
        Log in with Google
      </button>
    </div>
  );
};

export default Login;
