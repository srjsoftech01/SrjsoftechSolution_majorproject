import React from "react";

const WebsiteOverview = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="shadow-xl rounded-xl overflow-hidden">
          <img
            src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg"
            alt="Custom Website Design"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h4 className="text-blue-600 font-semibold uppercase mb-1">Overview</h4>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Tailored Websites Built to Impress
          </h2>
          <p className="text-gray-700 mb-4">
            SRJ Softech Solutions specializes in creating modern, responsive websites that align perfectly with your business goals. From portfolio sites to complex service pages, we handle it all.
          </p>
          <p className="text-gray-700 mb-4">
            Our team focuses on clean UI/UX design, fast loading, SEO optimization, and mobile-first responsiveness to make sure your customers have a seamless experience.
          </p>
          <p className="text-gray-700">
            Whether you're launching a startup, redesigning your brand, or need an e-commerce platform — we've got the tools and talent to bring your vision online.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebsiteOverview;
