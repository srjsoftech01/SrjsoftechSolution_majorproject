

import React from "react";
import servicesData from "./ServicesData";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f3460] px-4 py-16">
      <div className="max-w-7xl mx-auto text-center">
       <h2 className="text-3xl md:text-4xl text-[#0F0F4D]  font-extrabold  mb-4 drop-shadow-lg
        lg:text-5xl  leading-tight mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
         Elevate Your Business with Our Expert Services
       </h2>
       <p className="text-base md:text-xl max-w-4xl mx-auto leading-relaxed bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
         We deliver transformative digital solutions tailored to help your business thrive in a competitive digital space.
       </p>
       


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
