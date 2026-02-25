import React from "react";
import { supportCard } from "../../data";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Support = () => {
  return (
    <div className="bg-gradient-to-t from-cyan-400 to-blue-800 lg:h-screen w-full py-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="pt-20 text-center"
      >
        <h1 className="capitalize text-4xl text-white font-semibold mb-4">
          Support That Understands You
        </h1>
        <p className="px-2 text-lg text-gray-200 lg:w-1/2 lg:mx-auto mb-10">
          PsycheGuide combines AI technology with insights from lived experience
          to provide meaningful mental wellness support.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-8 flex flex-col lg:flex-row justify-center items-start gap-6 w-full"
      >
        {supportCard.map((val, indx) => {
          const Icon = val.icon;
          return (
            <motion.div
              key={indx}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="border border-gray-300 bg-white p-8 rounded-lg shadow-lg"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.15 }}
                className="bg-cyan-100 p-3 inline-block rounded-lg mb-2"
              >
                <Icon className="text-2xl text-cyan-400" />
              </motion.div>

              <h3 className="text-xl font-bold capitalize mb-2">{val.title}</h3>
              <p className="text-sm">{val.para}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Support;
