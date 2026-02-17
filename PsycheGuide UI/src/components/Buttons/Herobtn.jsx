import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuBookOpen } from "react-icons/lu";

const Herobtn = ({getStarted ,explore}) => {
  return (
    <div>
         <div className="flex gap-4 mb-8">
                <NavLink
                  to="/signin"
                  className="shadow-lg
                                 transform transition-transform duration-300 hover:scale-105 bg-cyan-500 hover:bg-cyan-800 py-2 px-2 lg:px-6 rounded-md text-md font-semibold text-white"
                >
                   {getStarted} {" "}
                  <IoIosArrowRoundForward className="inline-block text-2xl" />{" "}
                </NavLink>
                <NavLink
                  to="/resources"
                  className="border-2 text-white border-gray-400 border-solid py-2 px-6 rounded-md text-md font-semibold shadow-lg
                                 transform transition-transform duration-300 hover:scale-105"
                >
                  {" "}
                  <LuBookOpen className="inline-block" /> {explore}
                </NavLink>
              </div>
    </div>
  )
}

export default Herobtn