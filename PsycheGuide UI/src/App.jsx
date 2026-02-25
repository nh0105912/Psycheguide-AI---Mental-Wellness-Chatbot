import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import ScrollToTop from "./components/layout/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Resources from "./pages/Resources";
import Chat from "./pages/Chat";
import SigIn from "./pages/SigIn";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/signin" element={<SigIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

     
    </>
  );
}

export default App;
