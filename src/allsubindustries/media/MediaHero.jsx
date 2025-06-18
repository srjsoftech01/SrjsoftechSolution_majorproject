import React from 'react';
import { useNavigate } from 'react-router-dom'; // Step 1


const MediaHero = () => {
  const navigate = useNavigate(); // Step 2

  const handleGetQuote = () => {
    navigate("/contact_us"); // Change this to your actual route
  };
  return (
    <section className="text-center py-16 bg-gradient-to-r from-purple-100 via-pink-50 to-indigo-100 mt-21">
      <h1 className="text-4xl md:text-5xl font-bold text-purple-900">
        Media & Entertainment Solutions
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
        Engage Audiences with Scalable Video, Music & Content Platforms
      </p>
      <button onClick={handleGetQuote} className="mt-6 px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white text-lg font-medium rounded-full shadow-lg transition-all">
        Launch Your Platform →
      </button>
    </section>
  );
};

export default MediaHero;
