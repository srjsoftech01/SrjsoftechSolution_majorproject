import React from "react";

const SEOOverview = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="shadow-xl rounded-xl overflow-hidden">
          <img
            src="https://img.freepik.com/free-vector/search-engine-optimization-illustration_23-2147492031.jpg"
            alt="SEO Services"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h4 className="text-green-600 font-semibold uppercase mb-1">Overview</h4>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            SEO Solutions to Grow Your Business
          </h2>
          <p className="text-gray-700 mb-4">
            SRJ Softech Solutions delivers results-driven SEO services for businesses of all sizes.
            We improve your search engine rankings using modern, ethical strategies that work.
          </p>
          <p className="text-gray-700 mb-4">
            Our SEO experts perform keyword research, on-page optimization, technical SEO audits,
            content planning, and authority building to ensure your website stays competitive.
          </p>
          <p className="text-gray-700">
            Let us increase your visibility, website traffic, and qualified leads through sustainable
            and scalable SEO campaigns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SEOOverview;
