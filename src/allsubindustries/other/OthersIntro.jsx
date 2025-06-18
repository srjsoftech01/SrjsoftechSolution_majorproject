import React from 'react';

const OthersIntro = () => {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
      <div className="flex-1">
        <img
          src="/Industry_works_intro_images/customization.jpg"
          alt="Customized Web Applications"
          className="w-full rounded-lg shadow"
        />
      </div>
      <div className="flex-1 text-gray-700 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Custom Web Applications for Every Industry</h2>
        <p className="text-gray-700 text-lg leading-relaxed text-justify">
          At <strong>SRJ Softech Solutions</strong>, we craft highly tailored digital solutions that align with your unique operational challenges and business goals. Whether you're a nonprofit, manufacturing unit, government agency, influencer, or local service provider — we design and develop responsive web applications that perform.
        </p>
        <p className="mt-4">
          From workflow automation tools and internal dashboards to booking systems and member portals, our team builds scalable, secure, and user-friendly apps that make a real difference.
        </p>
        <p className="mt-4">
          We turn complex ideas into smooth digital journeys — helping you streamline processes, boost productivity, and engage users more effectively.
        </p>
      </div>
    </section>
  );
};

export default OthersIntro;
