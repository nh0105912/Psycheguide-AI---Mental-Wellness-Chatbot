import { useState } from "react";
import logo from "../../assets/logo1.png";
import { RxCross2 } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";
import NavUL from "../links/NavUL";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setopen] = useState(false);

  return (
    <div className="sticky top-0 md:px-20 flex justify-between items-center w-full bg-cyan-500 p-2 text-white shadow-md z-50">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-12 h-12" />
        <NavLink to="/" className="ml-2 font-bold lg:text-2xl">
          <span className="text-cyan-900 ">Psyche</span>Guide <span className="text-cyan-900">Ai</span>
        </NavLink>
      </div>

      <div
        className={`md:flex md:items-center md:gap-x-6 flex-col md:flex-row
        ${open ? "absolute top-16 left-0 w-full bg-cyan-400 p-4" : "hidden md:flex"}`}
      >
        <NavUL
          home="Home"
          dashboard="Dashboard"
          resources="Resources"
          chat="Chat"
          setOpen={setopen}
        />
      </div>

      <div className="md:hidden">
        <button onClick={() => setopen(!open)}>
          {open ? <RxCross2 size={24} /> : <IoMdMenu size={24} />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
