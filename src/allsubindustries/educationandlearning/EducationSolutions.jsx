import React from 'react';

const solutions = [
  {
    title: "Online Course Platforms",
    description: "Create LMS-based portals for video courses, quizzes, and progress tracking.",
  },
  {
    title: "Live Class & Webinar Integration",
    description: "Enable Zoom, Google Meet, or custom video modules for live learning.",
  },
  {
    title: "Student Management Systems",
    description: "Track enrollments, attendance, payments, certificates, and feedback.",
  },
  {
    title: "Mobile Learning Apps",
    description: "Deliver responsive and intuitive apps for Android and iOS learners.",
  },
];

const EducationSolutions = () => {
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

export default EducationSolutions;
