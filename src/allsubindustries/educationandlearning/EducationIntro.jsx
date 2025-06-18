import React from 'react';

const EducationIntro = () => {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
      <div className="flex-1">
        <img
          src="/Industry_works_intro_images/education and learning.jpg"
          alt="Education and Learning"
          className="w-full rounded-lg shadow"
        />
      </div>
      <div className="flex-1 text-gray-700 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Smart Solutions for Education & Learning</h2>
        <p className="text-gray-700 text-lg leading-relaxed text-justify">
          At <strong>SRJ Softech Solutions</strong>, we build dynamic digital platforms that empower institutions and learners through technology. Whether you're a coaching center, school, university, or edtech startup — our solutions make learning more accessible, engaging, and effective.
        </p>
        <p className="mt-4">
          From student portals and LMS systems to virtual classrooms and test modules, we develop customized tools that enhance interaction, track progress, and support academic success — all while ensuring scalability and security.
        </p>
        <p className="mt-4">
          Partner with us to transform your educational vision into a powerful online experience that adapts to modern learning needs and drives long-term growth.
        </p>
      </div>
    </section>
  );
};

export default EducationIntro;
