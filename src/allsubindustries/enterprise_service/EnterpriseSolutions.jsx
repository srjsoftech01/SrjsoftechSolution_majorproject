import React from 'react';

const solutions = [
  {
    title: "Enterprise Web Portals",
    description: "Develop secure, scalable portals to manage workflows, clients, and employees.",
  },
  {
    title: "CRM & ERP Integration",
    description: "Implement customer and resource management systems tailored to your processes.",
  },
  {
    title: "Cloud Transformation",
    description: "Migrate legacy systems to cloud-based environments with high availability.",
  },
  {
    title: "Custom Enterprise Applications",
    description: "Build apps to digitize unique processes, ensuring speed and productivity.",
  },
];

const EnterpriseSolutions = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {solutions.map((item, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EnterpriseSolutions;
