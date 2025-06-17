import React from 'react';

const features = [
  {
    title: "Custom Web Applications",
    description: "Bespoke platforms to suit your unique workflows and audience.",
  },
  {
    title: "Business Automation Tools",
    description: "Streamline processes like HR, billing, inventory, and CRM.",
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform apps tailored for your use case.",
  },
  {
    title: "Digital Presence",
    description: "Websites, landing pages, and branding to tell your story online.",
  },
];

const OthersSolutions = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OthersSolutions;
