import React from "react";

const LogoDesignOverview = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="shadow-xl rounded-xl overflow-hidden">
          <img
            src="https://img.freepik.com/free-vector/logo-design-concept_23-2148616611.jpg"
            alt="Logo Design"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h4 className="text-yellow-600 font-semibold uppercase mb-1">Overview</h4>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Crafting Logos that Define Your Brand
          </h2>
          <p className="text-gray-700 mb-4">
            SRJ Softech Solutions specializes in designing logos that speak your brand's story. We create custom logos for startups, businesses, and enterprises across various industries.
          </p>
          <p className="text-gray-700 mb-4">
            Whether you need a minimal icon, illustrative branding, or corporate identity, our designers work closely with you to deliver a timeless logo that resonates with your target audience.
          </p>
          <p className="text-gray-700">
            Start your branding journey with us and make a lasting first impression through design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LogoDesignOverview;
