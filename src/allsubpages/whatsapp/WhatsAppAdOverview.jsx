import React from "react";

const WhatsAppAdOverview = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="shadow-xl rounded-xl overflow-hidden">
          <img
            src="https://img.freepik.com/free-vector/messaging-app-concept-illustration_114360-7882.jpg"
            alt="WhatsApp Ads"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h4 className="text-green-600 font-semibold uppercase mb-1">Overview</h4>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Supercharge Customer Engagement
          </h2>
          <p className="text-gray-700 mb-4">
            Our WhatsApp Advertisement Software helps you reach thousands of customers with just one click. Automate messages, personalize campaigns, and track responses from one dashboard.
          </p>
          <p className="text-gray-700 mb-4">
            Whether you run a small business or a large enterprise, our tool gives you the power to build trust and boost conversions directly through WhatsApp — the world’s most used messaging app.
          </p>
          <p className="text-gray-700">
            Schedule campaigns, manage contacts, send images, PDFs, links, and stay compliant — all from your PC.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppAdOverview;
