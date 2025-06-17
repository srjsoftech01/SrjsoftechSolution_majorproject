import React from 'react';

const solutions = [
  {
    title: "Custom E-commerce Development",
    description: "We build personalized storefronts tailored to your brand identity and goals.",
  },
  {
    title: "Payment Gateway Integration",
    description: "Integrate secure payment solutions like Razorpay, Stripe, and PayPal.",
  },
  {
    title: "Product & Inventory Management",
    description: "Easily manage stock, pricing, and product variations in real-time.",
  },
  {
    title: "Mobile Commerce Solutions",
    description: "Get a fully responsive and mobile-first store for seamless customer access.",
  },
];

const EcommerceSolutions = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {solutions.map((item, index) => (
          <div key={index} className="bg-rose-50 p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EcommerceSolutions;
