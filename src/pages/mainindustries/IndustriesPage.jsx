import React from "react";
import { useNavigate } from "react-router-dom";

export default function IndustriesPage({ title,description, image,path,reverse }) {
   
   const navigate = useNavigate();

   const handleMoreClick = () =>{
    if(path){
      navigate(path);
    }
   }

  return (
    <div
      className={`flex flex-col-reverse lg:flex-row items-center gap-5 py-12 px-4 md:px-10 rounded-xl transition-all duration-500 ${
        reverse
          ? "lg:flex-row-reverse bg-gradient-to-l from-blue-400 to-white"
          : "bg-gradient-to-r from-green-400 to-white"
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

        <button onClick={handleMoreClick} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 mt-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
         <span className="relative px-5 py-2.5 transition-all ease-in duration-75 font-bold bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            More ⏩
         </span>
        </button>
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
