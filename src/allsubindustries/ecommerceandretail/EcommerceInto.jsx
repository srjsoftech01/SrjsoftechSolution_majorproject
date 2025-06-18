import React from 'react';

const EcommerceIntro = () => {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
      <div className="flex-1">
        <img
          src="/Industry_works_intro_images/online_shopping.jpg"
          alt="E-commerce Solutions"
          className="w-full rounded-lg shadow"
        />
      </div>
      <div className="flex-1 text-gray-700 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">End-to-End E-commerce Solutions</h2>
        <p className="text-gray-700 text-lg leading-relaxed text-justify">
          At <strong>SRJ Softech Solutions</strong>, we design and develop powerful e-commerce platforms that help businesses sell smarter. From user-friendly storefronts and real-time inventory systems to seamless payment gateways — we deliver high-performance solutions built for growth.
        </p>
        <p className="mt-4">
          Whether you're launching your first online store or scaling an existing one, our expert team ensures an engaging, secure, and mobile-optimized experience that drives conversions and boosts customer loyalty.
        </p>
        <p className="mt-4">
          Let us transform your e-commerce vision into a fully functional, revenue-generating reality with custom solutions tailored to your brand and market.
        </p>
      </div>
    </section>
  );
};

export default EcommerceIntro;
