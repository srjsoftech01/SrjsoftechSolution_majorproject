import React from 'react';
import { useNavigate } from 'react-router-dom'; // Step 1


const EcommerceHero = () => {
  const navigate = useNavigate(); // Step 2

  const handleGetQuote = () => {
    navigate("/contact_us"); // Change this to your actual route
  };
  return (
    <section className="text-center py-16 bg-gradient-to-r from-indigo-100 to-rose-100 mt-21">
      <h1 className="text-4xl md:text-5xl font-bold text-indigo-900">
        E-commerce & Retail Solutions
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        Powering Your Retail Journey with Smart Digital Storefronts & Scalable Solutions
      </p>
      <button onClick={handleGetQuote} className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium rounded-full shadow-lg transition-all">
        Start Your Online Store →
      </button>
    </section>
  );
};

export default EcommerceHero;
