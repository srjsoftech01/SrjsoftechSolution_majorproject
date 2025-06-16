import React, { useEffect, useState } from "react";
import CarouselData from "./CarouselData";
import Footer from "../../components/footer/Footer";
import WhyChooseUs from "../aboutpages/WhyChooseUs";
import IndustriesItem from "../mainindustries/IndustriesItem";

const Industries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideLength = CarouselData.length;

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideLength);
    }, 2000); 
    return () => clearInterval(interval); 
  }, [slideLength]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slideLength) % slideLength);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slideLength);
  };

  return (
    <>
    <div className="w-full">
      <div id="custom-carousel" className="relative w-full">
     
        <div className="relative h-[600px] overflow-hidden rounded-lg">
          {CarouselData.map((item, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100 z-20" : "opacity-0 z-10"
              }`}
            >
              <img
                src={item.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />

             <div className="absolute inset-x-0 bottom-24 flex justify-center px-4">
                <div className="bg-white/30 backdrop-blur-md px-6 py-5 rounded-xl shadow-lg text-center w-full max-w-xl">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
                    {item.tagline}
                  </h2>
                  <a
                    href={item.link}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition"
                  >
                    {item.buttonText}
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>


        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          {CarouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>


        <button
          onClick={prevSlide}
          type="button"
          className="absolute top-1/2 left-4 z-30 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2"
        >
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 6 10">
            <path
              d="M5 1L1 5l4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

   
        <button
          onClick={nextSlide}
          type="button"
          className="absolute top-1/2 right-4 z-30 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2"
        >
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 6 10">
            <path
              d="M1 9l4-4-4-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
    <IndustriesItem/>
    <WhyChooseUs/>
    <Footer/>
    
    </>
  );
};

export default Industries;
