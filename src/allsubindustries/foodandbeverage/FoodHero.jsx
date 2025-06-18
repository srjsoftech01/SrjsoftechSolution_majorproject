import React from 'react';
import { useNavigate } from 'react-router-dom'; // Step 1


const FoodHero = () => {
  const navigate = useNavigate(); // Step 2

  const handleGetQuote = () => {
    navigate("/contact_us"); // Change this to your actual route
  };
  return (
    <section className="text-center py-16 bg-gradient-to-r from-green-100 via-lime-50 to-yellow-100 mt-21">
      <h1 className="text-4xl md:text-5xl font-bold text-green-900">
        Food & Beverage Solutions
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
        Smart Ordering & Delivery Systems for Restaurants, Cafes, and Cloud Kitchens
      </p>
      <button onClick={handleGetQuote} className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-medium rounded-full shadow-lg transition-all">
        Build Your Food App →
      </button>
    </section>
  );
};

export default FoodHero;
