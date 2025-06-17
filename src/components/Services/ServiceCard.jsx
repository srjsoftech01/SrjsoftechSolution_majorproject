
import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ image, title, description, path }) => {
  const navigate = useNavigate();

  const handleMoreClick = () => {
    if (path) {
      navigate(path);
    } else {
      console.warn("Path is not defined for this service.");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center text-center hover:shadow-2xl transition">
      {image && <img src={image} alt={title} className="w-24 h-24 mb-4" />}
      <h3 className="text-xl font-bold mb-2 text-[#0f3460]">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">
        {description ? description.slice(0, 120) + "..." : ""}
      </p>

      <button
        onClick={handleMoreClick}
        className={`px-4 py-2 rounded ${
          path
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-300 text-gray-600 cursor-not-allowed"
        }`}
        disabled={!path}
      >
        {path ? "More" : "Coming Soon"}
      </button>
    </div>
  );
};

export default ServiceCard;