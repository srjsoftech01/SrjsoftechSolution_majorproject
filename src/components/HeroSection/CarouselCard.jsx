import React from 'react';

const CarouselCard = ({ image, title }) => {
  return (
    <div className=" bg-gradient-to-r from-green-300 to-blue-500  text-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center min-h-[300px]">
      <img src={image} alt={title} className="w-full h-48 object-contain rounded-md" />
      <h3 className="mt-4 text-xl font-bold">{title}</h3>
    </div>
  );
};

export default CarouselCard;
