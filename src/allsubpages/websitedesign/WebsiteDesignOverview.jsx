import React from "react";

const WebsiteDesignOverview = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="shadow-xl rounded-xl overflow-hidden">
          <img
            src="https://img.freepik.com/free-vector/web-design-background_1300-87.jpg"
            alt="Website Design"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h4 className="text-blue-600 font-semibold uppercase mb-1">Overview</h4>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Crafting Engaging Website Experiences
          </h2>
          <p className="text-gray-700 mb-4">
            At SRJ Softech Solutions, we specialize in building responsive, elegant, and SEO-friendly websites tailored for your business goals. Whether you need a business portfolio, e-commerce platform, or landing page — we design with purpose.
          </p>
          <p className="text-gray-700 mb-4">
            We combine sleek UI/UX design with robust front-end development using the latest tech stacks. Our mission is to ensure every visitor becomes a customer.
          </p>
          <p className="text-gray-700">
            Get scalable, secure, and modern websites that adapt seamlessly across all screen sizes and devices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebsiteDesignOverview;
