import React from "react";
import { motion } from "framer-motion";

const HeroText = () => {
  return (
    <div className="text-center py-24 px-6 bg-gradient-to-br from-black via-[#0e0e25] to-[#111] text-white relative overflow-hidden">
      
      {/* Background Gradient Blurs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-600 rounded-full blur-[120px] opacity-30 z-0"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-700 rounded-full blur-[120px] opacity-30 z-0"></div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight space-y-2">
          <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text drop-shadow">
            WEB.
          </span>
          <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow">
            MOBILE.
          </span>
          <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text drop-shadow">
            GRAPHIC.
          </span>
          <span className="block bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-transparent bg-clip-text drop-shadow">
            MARKETING.
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-gray-300 font-medium max-w-2xl mx-auto">
          Custom web and app solutions to drive business innovation and digital growth.
        </p>

        <button className="mt-8 px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold rounded-full transition duration-300 shadow-lg hover:scale-105">
          Enquire Now &rarr;
        </button>
      </motion.div>
    </div>
  );
};

export default HeroText;
