import React from 'react';

const solutions = [
  {
    title: "Appointment Booking Platforms",
    description: "Allow patients to book, reschedule, or cancel appointments with ease online.",
  },
  {
    title: "Telemedicine Integration",
    description: "Secure video consultations, chat, and prescription modules for remote care.",
  },
  {
    title: "Electronic Health Records (EHR)",
    description: "Manage patient records, reports, and history with compliant, cloud-based systems.",
  },
  {
    title: "Doctor & Patient Dashboards",
    description: "Intuitive dashboards for both doctors and patients for streamlined interactions.",
  },
];

const HealthSolutions = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {solutions.map((item, index) => (
          <div key={index} className="bg-sky-50 p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HealthSolutions;
