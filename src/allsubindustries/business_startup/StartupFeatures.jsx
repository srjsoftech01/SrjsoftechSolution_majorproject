import React from 'react';

const features = [
  {
    title: "Brand Identity",
    description: "Logo, tagline, and visual design that speak your vision.",
  },
  {
    title: "Web & App Development",
    description: "Scalable and responsive platforms to kickstart your online presence.",
  },
  {
    title: "Startup Consultation",
    description: "Guidance from business model to product-market fit.",
  },
  {
    title: "Marketing Solutions",
    description: "Launch campaigns that generate buzz and build credibility.",
  },
];

const StartupFeatures = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StartupFeatures;
