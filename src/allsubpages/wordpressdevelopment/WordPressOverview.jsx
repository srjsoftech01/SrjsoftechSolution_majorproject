import React from "react";

const WordPressOverview = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="shadow-xl rounded-xl overflow-hidden">
          <img
            src="https://img.freepik.com/free-photo/flat-lay-wordpress-development-elements_23-2150320455.jpg"
            alt="WordPress Development"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h4 className="text-indigo-600 font-semibold uppercase mb-1">Overview</h4>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Reliable WordPress Experts for All Business Types
          </h2>
          <p className="text-gray-700 mb-4">
            Whether you're starting a blog, a business site, or an e-commerce store, our WordPress developers ensure you get a visually appealing and high-performance website.
          </p>
          <p className="text-gray-700 mb-4">
            We offer custom theme development, plugin integration, WooCommerce setup, and SEO-optimized architecture — giving you full control over your site.
          </p>
          <p className="text-gray-700">
            From hosting and backups to scalability and security, we take care of every technical detail, so you can focus on your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WordPressOverview;
