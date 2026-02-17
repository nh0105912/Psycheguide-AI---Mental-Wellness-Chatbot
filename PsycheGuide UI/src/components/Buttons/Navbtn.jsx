import { useNavigate } from "react-router-dom";

const Navbtn = ({ setOpen }) => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-cyan-800 hover:text-white transition duration-300 font-semibold"
        onClick={() => {
          setOpen(false);
          navigate("/signin");
        }}
      >
        Login
      </button>

      <button
        className="ml-2 bg-white text-blue-500 px-4 py-2 rounded hover:bg-cyan-800 hover:text-white transition duration-300 font-semibold"
        onClick={() => {
          setOpen(false);
          navigate("/signup");
        }}
      >
        Sign Up
      </button>
    </div>
  );
};

export default Navbtn;
