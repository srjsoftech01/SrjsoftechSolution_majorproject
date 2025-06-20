import React from 'react';
import { useNavigate } from 'react-router-dom'; // Step 1

const EventHero = () => {
  const navigate = useNavigate(); // Step 2

  const handleGetQuote = () => {
    navigate("/contact_us"); // Change this to your actual route
  };
  return (
    <section className="text-center py-16 bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-100 mt-21">
      <h1 className="text-4xl md:text-5xl font-bold text-purple-900">
        Event & Ticket Booking Solutions
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
        Create Smart Booking Platforms for Concerts, Conferences, Classes, and More
      </p>
      <button onClick={handleGetQuote} className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium rounded-full shadow-lg transition-all">
        Launch Your Event App →
      </button>
    </section>
  );
};

export default EventHero;
