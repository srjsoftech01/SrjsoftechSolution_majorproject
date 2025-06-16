import React from "react";

const HostingOverview = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="shadow-xl rounded-xl overflow-hidden">
          <img
            src="https://img.freepik.com/free-vector/cloud-hosting-concept-illustration_114360-697.jpg"
            alt="Web Hosting"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h4 className="text-purple-600 font-semibold uppercase mb-1">Overview</h4>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Reliable Hosting for Every Website
          </h2>
          <p className="text-gray-700 mb-4">
            At SRJ Softech Solutions, we provide high-speed, secure, and budget-friendly web hosting services tailored to meet the needs of individuals, startups, and enterprises.
          </p>
          <p className="text-gray-700 mb-4">
            Whether you're launching a business website or need robust cloud solutions, our hosting plans include powerful features like SSD storage, free SSL, and automatic backups.
          </p>
          <p className="text-gray-700">
            Enjoy 99.9% uptime, fast load times, and scalable infrastructure — all with expert technical support available 24/7.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HostingOverview;
