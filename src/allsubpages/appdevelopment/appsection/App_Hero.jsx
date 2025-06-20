import React from "react";

const App_Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-pink-100 via-white to-cyan-100 overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-md" />

      <div className="z-10 text-center px-4 md:px-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900">
          Need A Premium & Creative <br /> App Development?
        </h1>

        <p className="text-base md:text-lg text-gray-600 mt-4">
          From Startup to Enterprise be ready and don't worry about design and user experience.
        </p>

        <div className="mt-6 inline-block backdrop-blur-lg bg-white/30 rounded-full px-6 py-3 shadow-lg transition hover:scale-105">
          <a
            href="/contact_us"
            className="text-white font-medium bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-2 rounded-full shadow-md hover:opacity-90"
          >
            Get Quote →
          </a>
        </div>
      </div>
    </section>
  );
};

export default App_Hero;
