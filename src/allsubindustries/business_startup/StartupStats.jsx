import React from 'react';

const stats = [
  { number: "850+", label: "Delighted Clients", icon: "🤝" },
  { number: "6+ Years", label: "Industry Experience", icon: "🖥️" },
  { number: "1052+", label: "Projects Done", icon: "🕐" },
  { number: "24/7", label: "Support Available", icon: "📞" },
];

const StartupStats = () => {
  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition-all">
            <div className="text-3xl mb-2">{stat.icon}</div>
            <h3 className="text-2xl font-bold text-blue-900">{stat.number}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StartupStats;
