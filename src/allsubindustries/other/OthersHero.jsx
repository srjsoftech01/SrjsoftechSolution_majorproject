import React from 'react';
import { useNavigate } from 'react-router-dom'; // Step 1

const OthersHero = () => {
  const navigate = useNavigate(); // Step 2

  const handleGetQuote = () => {
    navigate("/contact_us"); // Change this to your actual route
  };
  return (
    <section className="text-center py-16 bg-gradient-to-r from-gray-100 via-white to-gray-200 mt-21">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Custom Digital Solutions
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
        Tailored IT Services for Unique Industry Needs
      </p>
      <button onClick={handleGetQuote} className="mt-6 px-6 py-3 bg-gray-800 hover:bg-black text-white rounded-full shadow">
        Discuss Your Project →
      </button>
    </section>
  );
};

export default OthersHero;
