import { NavLink } from "react-router-dom";
import Navbtn from "../Buttons/Navbtn";

const NavUL = ({ setOpen }) => {
  const linkClass =
    "cursor-pointer text-sm lg:text-lg border-b-2 border-transparent " +
    "hover:text-cyan-900 md:hover:border-cyan-800 transition duration-300 capitalize mr-6";

  return (
    <div className="flex flex-col md:flex-row md:items-center md:gap-x-10 ">
      <ul className="flex flex-col md:flex-row md:gap-x-4">
        <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
          Home
        </NavLink>

        <NavLink
          to="/dashboard"
          className={linkClass}
          onClick={() => setOpen(false)}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/resources"
          className={linkClass}
          onClick={() => setOpen(false)}
        >
          Resources
        </NavLink>

        <NavLink
          to="/chat"
          className={linkClass}
          onClick={() => setOpen(false)}
        >
          Chat
        </NavLink>
      </ul>

      <div className="mt-4 md:mt-0 md:ml-4">
        <Navbtn setOpen={setOpen} />
      </div>
    </div>
  );
};

export default NavUL;
