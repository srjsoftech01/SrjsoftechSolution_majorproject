import React from "react";

const DomainOverview = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="shadow-xl rounded-xl overflow-hidden">
          <img
            src="https://img.freepik.com/free-vector/hosting-concept-illustration_114360-1097.jpg"
            alt="Domain Registration"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h4 className="text-indigo-600 font-semibold uppercase mb-1">Overview</h4>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Domain Registration Made Easy
          </h2>
          <p className="text-gray-700 mb-4">
            SRJ Softech Solutions helps you find and register the perfect domain name for your business, blog, or brand. We offer domain extensions including .com, .in, .net, and more.
          </p>
          <p className="text-gray-700 mb-4">
            We provide hassle-free domain management, renewal alerts, and domain forwarding to ensure your brand is always online and protected.
          </p>
          <p className="text-gray-700">
            Our platform is beginner-friendly, yet powerful enough for professionals. Get your domain and start building your digital presence today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DomainOverview;
