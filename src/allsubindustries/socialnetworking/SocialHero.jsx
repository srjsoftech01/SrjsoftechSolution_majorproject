import React from 'react';
import { useNavigate } from 'react-router-dom'; // Step 1

const SocialHero = () => {
  const navigate = useNavigate(); // Step 2

  const handleGetQuote = () => {
    navigate("/contact_us"); // Change this to your actual route
  };
  return (
    <section className="text-center py-16 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 mt-21">
      <h1 className="text-4xl md:text-5xl font-bold text-indigo-900">
        Social Networking Solutions
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
        Build Engaging and Scalable Communities on Web & Mobile
      </p>
      <button onClick={handleGetQuote} className="mt-6 px-6 py-3 bg-indigo-700 hover:bg-indigo-800 text-white rounded-full shadow">
        Launch Your Platform →
      </button>
    </section>
  );
};

export default SocialHero;
