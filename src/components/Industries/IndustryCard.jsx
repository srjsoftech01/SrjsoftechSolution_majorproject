import React from "react";

const IndustryCard = ({ icon, title, bgColor }) => {
  return (
    <div className={`rounded-[30px] p-6 shadow-md text-center ${bgColor} hover:scale-105 transition-transform`}>
      <img src={icon} alt={title} className="w-15 h-12 mx-auto mb-4" />
      <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
    </div>
  );
};

export default IndustryCard;
