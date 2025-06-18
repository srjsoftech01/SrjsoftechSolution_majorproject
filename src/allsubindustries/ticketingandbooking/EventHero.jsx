import React from 'react';
import { useNavigate } from 'react-router-dom'; // Step 1

const EventHero = () => {
  const navigate = useNavigate(); // Step 2

  const handleGetQuote = () => {
    navigate("/contact_us"); // Change this to your actual route
  };
  return (
    <section className="text-center py-16 bg-gradient-to-r from-yellow-100 via-white to-orange-100 mt-21">
      <h1 className="text-4xl md:text-5xl font-bold text-orange-800">
        Event & Ticket Booking Solutions
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
        Seamless Event Discovery, Booking, and Management Platforms
      </p>
      <button onClick={handleGetQuote} className="mt-6 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow">
        Get a Demo →
      </button>
    </section>
  );
};

export default EventHero;
