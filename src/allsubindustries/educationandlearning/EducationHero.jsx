import React from 'react';
import { useNavigate } from 'react-router-dom'; // Step 1


const EducationHero = () => {
  const navigate = useNavigate(); // Step 2

  const handleGetQuote = () => {
    navigate("/contact_us"); // Change this to your actual route
  };
  return (
    <section className="text-center py-16 bg-gradient-to-r from-yellow-50 to-sky-100 mt-21">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
        Education & Learning Solutions
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
        Empowering Modern Education with Smart Tech for Institutes, Tutors & Learners
      </p>
      <button onClick={handleGetQuote} className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-full shadow-lg transition-all">
        Build Your Learning Platform →
      </button>
    </section>
  );
};

export default EducationHero;
