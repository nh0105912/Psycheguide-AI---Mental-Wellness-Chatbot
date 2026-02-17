import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In:", { email, password });
  };

  return (
    <div className="lg:h-[88vh] flex items-center justify-center bg-gray-100">
      <div className="m-4 w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-lg lg:text-2xl font-bold text-center mb-2 text-blue-600">
          Welcome Back to PsycheGuide
        </h1>
        <p className="text-center lg:text-lg text-green-700 mb-6">
          Sign in to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Sign In
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Don&apos;t have an account?
          <Link to="/signup" className="text-blue-600 ml-1 hover:underline">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
