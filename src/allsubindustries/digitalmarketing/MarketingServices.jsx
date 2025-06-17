import React from 'react';

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "Improve your visibility on Google and attract organic traffic.",
  },
  {
    title: "Social Media Marketing",
    description: "Engage your audience on platforms like Instagram, Facebook, and LinkedIn.",
  },
  {
    title: "Pay-Per-Click Advertising",
    description: "Run profitable ads that convert with platforms like Google Ads and Meta.",
  },
  {
    title: "Email Marketing",
    description: "Send smart, automated campaigns that keep your audience engaged.",
  },
];

const MarketingServices = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {services.map((service, index) => (
          <div key={index} className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketingServices;
