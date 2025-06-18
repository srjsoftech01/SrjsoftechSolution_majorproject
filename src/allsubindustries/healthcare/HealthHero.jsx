import React from 'react';
import { useNavigate } from 'react-router-dom'; // Step 1


const HealthHero = () => {
  const navigate = useNavigate(); // Step 2

  const handleGetQuote = () => {
    navigate("/contact_us"); // Change this to your actual route
  };
  return (
    <section className="text-center py-16 bg-gradient-to-r from-sky-100 via-blue-50 to-emerald-100 mt-21">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
        Healthcare Solutions
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
        Smart Digital Systems for Hospitals, Clinics, and Wellness Platforms
      </p>
      <button onClick={handleGetQuote} className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-full shadow-lg transition-all">
        Build a Health App →
      </button>
    </section>
  );
};

export default HealthHero;
