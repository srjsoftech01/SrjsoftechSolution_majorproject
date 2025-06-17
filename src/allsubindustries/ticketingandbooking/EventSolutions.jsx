import React from 'react';

const features = [
  {
    title: "Event Listings & Discovery",
    description: "Easy-to-browse event categories, filters, and recommendations.",
  },
  {
    title: "Online Booking System",
    description: "Fast, responsive booking process with real-time availability.",
  },
  {
    title: "Secure Payment Gateway",
    description: "Integrated with Stripe, Razorpay, and other major providers.",
  },
  {
    title: "Admin Panel & Analytics",
    description: "Track sales, check-ins, cancellations, and more in real-time.",
  },
];

const EventSolutions = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-orange-50 p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-orange-700 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventSolutions;
