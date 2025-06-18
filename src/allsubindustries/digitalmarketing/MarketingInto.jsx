import React from 'react';

const MarketingIntro = () => {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
      <div className="flex-1">
        <img
          src="/Industry_works_intro_images/Digital Marketing.jpg"
          alt="Digital Marketing Image"
          className="w-full rounded-lg shadow"
        />
      </div>
      <div className="flex-1 text-gray-700 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Grow Your Business with Digital Marketing</h2>
        <p className="text-gray-700 text-lg leading-relaxed text-justify">
          At <strong>SRJ Softech Solutions</strong>, we specialize in driving real results through data-driven digital marketing strategies. Whether you're looking to boost your online presence, generate quality leads, or increase conversions — our team is here to make it happen.
        </p>
        <p className="mt-4">
          From SEO optimization and targeted advertising to content marketing and social media management, we create campaigns that resonate with your audience and align with your business goals.
        </p>
        <p className="mt-4">
          Partner with us to elevate your brand, outpace competitors, and achieve sustainable growth through innovative and measurable digital marketing solutions.
        </p>
      </div>
    </section>
  );
};

export default MarketingIntro;
