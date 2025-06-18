import React from "react";
import { useNavigate } from "react-router-dom";

const IndustryCard = ({ icon, title, bgColor, path }) => {
  const navigate = useNavigate();

  const handleMoreClick = () => {
    if (path) {
      navigate(path);
    } else {
      console.warn("Path is not defined for this service.");
    }
  };

  return (
    <div
      className={`rounded-[30px] p-6 shadow-md text-center ${bgColor} hover:scale-105 transition-transform`}
    >
      <img src={icon} alt={title} className="w-15 h-12 mx-auto mb-4" />
      <h3 className="font-semibold text-lg text-gray-800 mb-2">{title}</h3>
      <button
        onClick={handleMoreClick}
        className={`px-4 py-1 rounded-full border transition-all duration-300 ${
          path
            ? "bg-white text-gray-800 border-gray-400 hover:bg-gray-800 hover:text-white"
            : "bg-gray-300 text-gray-600 cursor-not-allowed"
        }`}
        disabled={!path}
      >
        {path ? "More" : "Coming Soon"}
      </button>
    </div>
  );
};

export default IndustryCard;
