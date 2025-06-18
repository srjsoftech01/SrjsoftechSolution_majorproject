import React from 'react';

const EnterpriseIntro = () => {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
      <div className="flex-1">
        <img
          src="/Industry_works_intro_images/ERP.jpg"
          alt="ERP Solutions"
          className="w-full rounded-lg shadow"
        />
      </div>
      <div className="flex-1 text-gray-700 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Custom ERP Development Solutions</h2>
        <p className="text-gray-700 text-lg leading-relaxed text-justify">
          At <strong>SRJ Softech Solutions</strong>, we build powerful ERP systems that centralize business processes, enhance productivity, and enable real-time data access. From HR and finance to inventory and supply chain — our ERP solutions are tailored to your unique enterprise needs.
        </p>
        <p className="mt-4">
          Whether you're a growing company or a large organization, we help you streamline operations, eliminate redundancies, and gain complete control through integrated dashboards and modular ERP components.
        </p>
        <p className="mt-4">
          Empower your teams with secure, scalable, and cloud-enabled ERP solutions that support decision-making and drive sustainable growth.
        </p>
      </div>
    </section>
  );
};

export default EnterpriseIntro;
