import React from "react";

const MarketingOverview = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="shadow-xl rounded-xl overflow-hidden">
          <img
            src="https://img.freepik.com/free-photo/marketing-strategy-planning-strategy-concept_53876-42950.jpg"
            alt="Digital Marketing"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h4 className="text-green-600 font-semibold uppercase mb-1">Overview</h4>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Strategic Digital Marketing for Every Business
          </h2>
          <p className="text-gray-700 mb-4">
            At SRJ Softech Solutions, we create goal-driven digital marketing strategies to build your online presence, generate leads, and maximize ROI. We cover everything from Google Ads to Social Media Marketing.
          </p>
          <p className="text-gray-700 mb-4">
            Our expert marketers combine content, design, data analytics, and automation to ensure your brand stands out on every digital platform.
          </p>
          <p className="text-gray-700">
            Whether you're a startup or a growing business, our tailor-made marketing campaigns are designed to increase visibility, drive traffic, and convert visitors into loyal customers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketingOverview;
