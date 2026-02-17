import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Sign Up:", formData);
  };

  return (
    <div className="relative lg:h-[88vh] flex items-center justify-center bg-gray-100">
      <div className="m-4 w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className=" text-lg lg:text-2xl font-bold text-center mb-1 text-green-600">
          Create Your PsycheGuide Account
        </h1>
        <p className="text-center text-sm lg:text-base text-blue-600 mb-6">
          Join us and start your mental health journey
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
            Create Account
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?
          <Link to="/signin" className="text-blue-600 ml-1 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
