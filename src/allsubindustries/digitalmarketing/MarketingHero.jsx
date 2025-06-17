import React from 'react';

const MarketingHero = () => {
  return (
    <section className="text-center py-16 bg-gradient-to-r from-pink-100 to-teal-100">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
        Digital Marketing Services
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        Drive Results with Data-Driven Strategies and Creative Marketing Campaigns
      </p>
      <button className="mt-6 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white text-lg font-medium rounded-full shadow-lg transition-all">
        Get Quote →
      </button>
    </section>
  );
};

export default MarketingHero;
