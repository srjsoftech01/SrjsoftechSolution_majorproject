import React from "react";
import HeroText from "./HeroText";
import HeroCarousel from "./HeroCarousel";

const HeroSection = () => {
  return (
    <section className="w-full pt-40 pb-20 bg-gradient-to-br from-black via-[#0e0e25] to-[#111] text-white relative overflow-hidden">
      
      {/* Background Gradient Blurs */}
      <div className="absolute -top-28 -left-24 w-80 h-80 bg-pink-600 rounded-full blur-[120px] opacity-30 z-0"></div>
      <div className="absolute -bottom-28 -right-24 w-80 h-80 bg-purple-700 rounded-full blur-[120px] opacity-30 z-0"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        <div className="flex-1">
          <HeroText />
        </div>
        <div className="flex-1 w-full">
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
