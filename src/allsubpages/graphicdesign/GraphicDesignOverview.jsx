import React from "react";

const GraphicDesignOverview = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="shadow-xl rounded-xl overflow-hidden">
          <img
            src="https://img.freepik.com/free-vector/flat-design-graphic-designer-concept_23-2148810628.jpg"
            alt="Graphic Design"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h4 className="text-orange-600 font-semibold uppercase mb-1">Overview</h4>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Make Your Brand Visually Stand Out
          </h2>
          <p className="text-gray-700 mb-4">
            SRJ Softech Solutions offers professional graphic design services tailored to your business goals. Our creative team designs logos, flyers, social media graphics, business cards, brochures, and much more.
          </p>
          <p className="text-gray-700 mb-4">
            Every element we design focuses on visual appeal, messaging clarity, and brand alignment. Whether it’s for digital or print media, we ensure stunning designs that captivate your audience.
          </p>
          <p className="text-gray-700">
            Let us bring your ideas to life through design that communicates and converts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignOverview;
