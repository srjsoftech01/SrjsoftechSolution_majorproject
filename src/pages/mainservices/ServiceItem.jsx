import React from "react";

export default function ServiceItem({ title, description, image, reverse }) {
  return (
    <div
      className={`flex flex-col-reverse lg:flex-row items-center gap-5 py-12 px-4 md:px-10 rounded-xl transition-all duration-500 ${
        reverse
          ? "lg:flex-row-reverse bg-gradient-to-l from-yellow-400 to-white"
          : "bg-gradient-to-r from-gray-400 to-white"
      }`}
    >
      {/* Text Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h3 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-4">
          {title}
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-80 h-60 object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}
