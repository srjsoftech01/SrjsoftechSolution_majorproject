import React from 'react';

const StartupIntro = () => {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
      <div className="flex-1">
        <img
          src="/your-local-path/startup-illustration.png"
          alt="Startup Illustration"
          className="w-full rounded-lg shadow"
        />
      </div>
      <div className="flex-1 text-gray-700 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Business Startup Website Near Me</h2>
        <p>
          At <strong>SRJ Softech Solution</strong>, we assist you with making
          <strong> startup websites</strong> for different business models. We follow a modern approach
          that helps you reach your target audience.
        </p>
        <p className="mt-4">
          Our professional team builds websites with core business principles, delivering unique and high-converting designs. Whether you're an individual or startup-backed firm, we’re here to bring your vision to life.
        </p>
        <p className="mt-4">
          From MVP development to campaign execution, we help you accelerate growth, attract investors, and reach your goals faster.
        </p>
      </div>
    </section>
  );
};

export default StartupIntro;
