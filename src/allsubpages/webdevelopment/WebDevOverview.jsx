import React from "react";

const WebDevOverview = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="shadow-xl rounded-xl overflow-hidden">
          <img
            src="https://img.freepik.com/free-vector/website-setup-concept-illustration_114360-4846.jpg"
            alt="Web development"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h4 className="text-indigo-600 font-semibold uppercase mb-1">Overview</h4>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Build a Website that Converts
          </h2>
          <p className="text-gray-700 mb-4">
            SRJ Softech Solutions specializes in creating stunning, responsive, and
            lightning-fast websites that drive business results. Whether you need
            a personal blog or a complex enterprise site, we have you covered.
          </p>
          <p className="text-gray-700 mb-4">
            We use the latest web technologies including React.js, Tailwind CSS,
            and modern backend stacks to ensure your site is scalable, secure,
            and SEO-optimized from the start.
          </p>
          <p className="text-gray-700">
            Your digital presence begins with a strong, well-crafted website —
            let us help you make a great first impression online.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebDevOverview;
