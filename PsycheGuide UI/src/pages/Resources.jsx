import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resourcesData } from "../data";
import emotion from "../assets/emotion.jpg";

const Resourses = () => {
  const categories = [
    "All",
    "Coping Strategies",
    "Mindfulness",
    "Sleep",
    "Anxiety",
    "Depression",
    "Self-Care",
  ];

  const [filter, setFilter] = useState("All");
  const [selectedCard, setSelectedCard] = useState(null);

  const filteredCards =
    filter === "All"
      ? resourcesData
      : resourcesData.filter((card) => card.category === filter);

  return (
    <div className="px-6 pt-16 relative">
      {/* ---------- HEADER ---------- */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-4 border border-gray-400 rounded-lg bg-white mb-6"
      >
        <h1 className="font-bold text-4xl text-cyan-800 mb-4">
          Resource Library
        </h1>
        <p className="w-full lg:w-1/2 text-xl text-gray-800">
          Explore our collection of articles and guides on mental wellness,
          coping strategies, and self-care practices.
        </p>

        <img
          src={emotion}
          alt="Emotion"
          className="w-full h-40 lg:h-60 object-cover rounded-md mt-3"
        />
      </motion.div>

      {/* ---------- CATEGORY FILTER ---------- */}
      <div className="flex flex-wrap gap-3 my-6">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setFilter(cat);
              setSelectedCard(null);
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition 
              ${
                filter === cat
                  ? "bg-cyan-500 text-white"
                  : "border border-gray-200 text-gray-800 hover:bg-gray-100"
              }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* ---------- CARDS ---------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
        <AnimatePresence>
          {filteredCards.map((card) => (
            <motion.div
              key={card.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedCard(card)}
              className="border border-gray-200 rounded-lg p-5 bg-white hover:shadow-xl cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {card.title}
              </h3>

              <img
                src={card.img}
                alt={card.title}
                className="w-full h-40 object-cover rounded-md mt-2"
              />

              <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                {card.description}
              </p>

              <div className="mt-4 flex justify-between items-center text-sm">
                <span className="text-cyan-600">{card.readTime}</span>
                <span className="font-medium bg-cyan-400 px-4 py-1 rounded-2xl text-gray-900">
                  {card.category}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ---------- MODAL ---------- */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white w-full max-w-3xl p-6 rounded-lg shadow-xl relative max-h-[90vh] overflow-auto"
              initial={{ scale: 0.85, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 40 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl"
              >
                ✕
              </button>

              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium">
                {selectedCard.category}
              </span>

              <span className="ml-3 text-gray-500 text-sm">
                {selectedCard.readTime}
              </span>

              <h2 className="text-2xl font-bold mt-4 text-gray-900">
                {selectedCard.title}
              </h2>

              <p className="mt-3 whitespace-pre-line text-gray-700 leading-relaxed">
                {selectedCard.fullText}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Resourses;
