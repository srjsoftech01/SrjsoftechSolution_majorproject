import React from "react";

const EcommerceOverview = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="shadow-xl rounded-xl overflow-hidden">
          <img
            src="https://img.freepik.com/free-vector/ecommerce-concept-illustration_114360-1211.jpg"
            alt="E-commerce Development"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h4 className="text-green-600 font-semibold uppercase mb-1">Overview</h4>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Build & Grow Your Online Store
          </h2>
          <p className="text-gray-700 mb-4">
            At SRJ Softech Solutions, we design high-performing e-commerce websites that offer seamless customer experiences. Whether you’re selling 10 products or 10,000, we build scalable and user-friendly platforms.
          </p>
          <p className="text-gray-700 mb-4">
            From secure payment gateways and inventory management to order tracking and shipping integration — we’ve got your store covered.
          </p>
          <p className="text-gray-700">
            We offer WooCommerce, Shopify, and fully custom-built solutions to suit your unique requirements and budget.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcommerceOverview;
