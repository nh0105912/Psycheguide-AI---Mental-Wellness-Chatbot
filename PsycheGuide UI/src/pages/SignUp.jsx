import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // Save user info and token
        localStorage.setItem("activeUserId", data.user.id);
        localStorage.setItem("token", data.token);

        alert("Account created successfully!");
        window.location.href = "/chat"; // redirect to chat page
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="relative lg:h-screen flex items-center justify-center bg-gradient-to-t from-cyan-500 to-blue-500">
      <div className="m-4 w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <img src={logo} alt="logo" className="w-28 m-auto" />
        <h1 className="text-lg lg:text-2xl font-bold text-center mb-1 text-blue-600">
          Create Your PsycheGuide Account
        </h1>
        <p className="text-center text-sm lg:text-base text-green-700 mb-6">
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

          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
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