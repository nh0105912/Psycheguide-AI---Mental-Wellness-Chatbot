import logo from "../../assets/logo1.png";

import { IoLogoFacebook } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-col lg:flex-row justify-between gap-10">
      
        <div className="flex flex-col gap-4">
          <div className="flex items-center lg:items-end gap-2">
            <img src={logo} alt="PsycheGuide Logo" className="w-12 lg:w-20 " />
            <span className="font-bold text-sm lg:text-xl text-white">PsycheGuide</span>
          </div>
          <p className="text-gray-400 max-w-sm">
            PsycheGuide helps you improve mental wellness through guided
            exercises, insights, and personal growth tools.
          </p>

          <div className="flex gap-4 mt-4">
            <NavLink href="/" className="hover:text-white transition">
              <IoLogoFacebook size={24} />
            </NavLink>
            <a href="/" className="hover:text-black transition">
              <FaXTwitter size={24} />
            </a>
            <a href="/" className="hover:text-blue-600 transition">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-white  font-semibold mb-2">Quick Links</h2>
          <NavLink
            to="/"
            className="hover:text-blue-300 hover:font-semibold transition"
          >
            Home
          </NavLink>
          <NavLink
            to="/chat"
            className="hover:text-blue-300 hover:font-semibold transition"
          >
            Chat
          </NavLink>
          <NavLink
            to="/resources"
            className="hover:text-blue-300 hover:font-semibold transition"
          >
            Resources
          </NavLink>
          <NavLink
            to="/dashboard"
            className="hover:text-blue-300 hover:font-semibold transition"
          >
            Dashboard
          </NavLink>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-white font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-400">Email: info@psycheguide.com</p>
          <p className="text-gray-400">Phone: +92 300 1234567</p>
          <p className="text-gray-400">Address: Mardan, Pakistan</p>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-300 font-semibold text-sm">
        &copy; {new Date().getFullYear()} PsycheGuide. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
