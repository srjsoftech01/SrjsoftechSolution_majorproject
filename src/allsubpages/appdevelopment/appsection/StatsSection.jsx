import React from "react";

const stats = [
  {
    icon: "🤝",
    number: "850+",
    label: "Delighted Clients",
  },
  {
    icon: "🖥️",
    number: "6+ Years",
    label: "Industry Experience",
  },
  {
    icon: "👨‍💻",
    number: "1052+",
    label: "Projects Done",
  },
  {
    icon: "📞",
    number: "24/7",
    label: "Support Available",
  },
];

const StatsSection = () => {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-white to-blue-50 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center justify-center"
          >
            <div className="text-4xl mb-2">{item.icon}</div>
            <h3 className="text-xl font-bold text-slate-900">{item.number}</h3>
            <p className="text-gray-500 text-sm mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
