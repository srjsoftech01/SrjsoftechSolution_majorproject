import React from 'react';

const StartupHero = () => {
  return (
    <section className="text-center py-20 bg-gradient-to-r from-pink-100 via-white to-teal-100">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
        Business Startup Solutions
      </h1>
      <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        We have been effectively supporting many little and large business houses to extend their span and increment their traffic and focus on their crowd.
      </p>
      <div className="mt-8">
        <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-lg hover:scale-105 transition-all">
          Get Quote →
        </button>
      </div>
    </section>
  );
};

export default StartupHero;
