
import React from "react";
import servicesData from "./ServicesData";
import ServiceCard from "./ServiceCard";


const Services = () => {
  return (
    <section className="w-full bg-gray-100 px-4 py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          What Are Our Offered Services Beneficial For Your Business?
        </h2>
        <p className="text-gray-600 text-lg md:text-xl py-4 max-w-4xl mx-auto">
          We offer a bundle of digital designing solutions that will help your business grow fast. Our goal is to understand your needs and meet your expectations for a strong online presence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
