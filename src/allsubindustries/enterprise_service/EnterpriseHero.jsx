import React from 'react';
import { useNavigate } from 'react-router-dom'; // Step 1


const EnterpriseHero = () => {
  const navigate = useNavigate(); // Step 2

  const handleGetQuote = () => {
    navigate("/contact_us"); // Change this to your actual route
  };
  return (
    <section className="text-center py-16 bg-gradient-to-r from-gray-100 via-blue-50 to-gray-200 mt-21">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Enterprise Services
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
        Scalable Digital Transformation Solutions Tailored for Modern Enterprises
      </p>
      <button onClick={handleGetQuote} className="mt-6 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white text-lg font-medium rounded-full shadow-lg transition-all">
        Start Your Enterprise Journey →
      </button>
    </section>
  );
};

export default EnterpriseHero;
