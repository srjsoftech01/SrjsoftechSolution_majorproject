import React from 'react';

const solutions = [
  {
    title: "Online Ticket Booking Portals",
    description: "Secure, responsive ticketing systems with dynamic seat allocation and filters.",
  },
  {
    title: "Event Management Dashboards",
    description: "Track ticket sales, attendee data, venue layouts, and promotions in one place.",
  },
  {
    title: "QR & E-Pass Integration",
    description: "Generate scannable digital passes for quick entry validation at venues.",
  },
  {
    title: "Custom Mobile Booking Apps",
    description: "Deliver seamless booking apps for Android & iOS with real-time notifications.",
  },
];

const EventSolutions = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {solutions.map((item, index) => (
          <div key={index} className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-purple-800 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventSolutions;
