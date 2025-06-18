import React from 'react';

const HealthIntro = () => {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
      <div className="flex-1">
        <img
          src="/Industry_works_intro_images/Health.jpg"
          alt="Healthcare Solutions"
          className="w-full rounded-lg shadow"
        />
      </div>
      <div className="flex-1 text-gray-700 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Digital Transformation for Healthcare Providers</h2>
        <p className="text-gray-700 text-lg leading-relaxed text-justify">
          <strong>SRJ Softech Solutions</strong> empowers clinics, hospitals, diagnostic labs, and wellness brands with secure, patient-centric digital platforms. From online appointment booking and teleconsultation systems to EHR integrations and HIPAA-compliant data handling — we deliver robust, scalable healthcare solutions.
        </p>
        <p className="mt-4">
          Our platforms are designed to improve patient experience, streamline staff workflows, and enable real-time access to critical medical information — whether you're a solo practitioner or a multispecialty facility.
        </p>
        <p className="mt-4">
          Let us help you build next-gen healthcare websites and apps that meet the demands of modern patients while ensuring privacy, performance, and reliability.
        </p>
      </div>
    </section>
  );
};

export default HealthIntro;
