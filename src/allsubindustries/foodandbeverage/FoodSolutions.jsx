import React from 'react';

const solutions = [
  {
    title: "Online Food Ordering",
    description: "Custom-built portals and apps with menu browsing, filters, and cart features.",
  },
  {
    title: "Cloud Kitchen Management",
    description: "Centralized dashboards for multi-brand kitchens with live order updates.",
  },
  {
    title: "Delivery Partner Tracking",
    description: "Real-time order tracking for customers and delivery personnel.",
  },
  {
    title: "POS & Inventory Integration",
    description: "Smart POS systems connected with inventory and order flow.",
  },
];

const FoodSolutions = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {solutions.map((item, index) => (
          <div key={index} className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-green-800 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodSolutions;
