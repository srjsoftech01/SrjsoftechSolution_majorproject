import React from "react";

const WordPressHero = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-100 via-white to-indigo-100 overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-md" />

      <div className="z-10 text-center px-4 md:px-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900">
          Fast, Flexible & Scalable <br /> WordPress Development
        </h1>

        <p className="text-base md:text-lg text-gray-600 mt-4">
          Custom WordPress websites tailored for your business, optimized for SEO and speed.
        </p>

        <div className="mt-6 inline-block backdrop-blur-lg bg-white/30 rounded-full px-6 py-3 shadow-lg transition hover:scale-105">
          <a
            href="/contact"
            className="text-white font-medium bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-2 rounded-full shadow-md hover:opacity-90"
          >
            Get a WordPress Site →
          </a>
        </div>
      </div>
    </section>
  );
};

export default WordPressHero;
