import React from "react";
import { motion}  from "framer-motion";
import Herobtn from "../Buttons/Herobtn";
import bgImage from "./../../assets/hero.jpg";

const Hero = () => {
  return (
    <div
      className="px-4 lg:px-20 flex justify-between w-full items-center min-h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <motion.div
        className="w-full lg:w-2/3"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl lg:text-6xl text-white font-bold my-10 mx-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Your Journey to <span className="text-cyan-400">Mental Wellness</span>{" "}
          Starts Here
        </motion.h1>

        <motion.p
          className="lg:text-2xl text-gray-200 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          PsycheGuide AI offers compassionate, AI-powered conversations that
          understand your struggles and guide you toward better mental
          health—anytime, anywhere.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1  }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Herobtn getStarted="Get Started" explore="Explore Resources" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
