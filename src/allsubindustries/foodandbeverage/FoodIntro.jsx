import React from 'react';

const FoodIntro = () => {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
      <div className="flex-1">
        <img
          src="/Industry_works_intro_images/Food and Beverage.jpg"
          alt="Food and Beverage Solutions"
          className="w-full rounded-lg shadow"
        />
      </div>
      <div className="flex-1 text-gray-700 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Digital Solutions for Food & Beverage Brands</h2>
        <p className="text-gray-700 text-lg leading-relaxed text-justify">
          At <strong>SRJ Softech Solutions</strong>, we craft innovative digital platforms that help restaurants, cafes, cloud kitchens, and delivery brands thrive in a fast-paced market. From contactless ordering and table reservations to kitchen dashboards and delivery tracking — our solutions ensure efficiency, speed, and customer satisfaction.
        </p>
        <p className="mt-4">
          We specialize in mobile-first, SEO-optimized designs that not only reflect your brand's flavor but also convert visitors into loyal customers — whether you're a single outlet or a franchise chain.
        </p>
        <p className="mt-4">
          Partner with us to digitize your operations, streamline orders, and enhance customer experience with scalable, intuitive food-tech platforms.
        </p>
      </div>
    </section>
  );
};

export default FoodIntro;
