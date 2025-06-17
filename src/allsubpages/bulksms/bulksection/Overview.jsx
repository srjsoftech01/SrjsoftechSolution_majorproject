import React from "react";

const Overview = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="shadow-xl rounded-xl overflow-hidden">
          <img
            src="https://img.freepik.com/free-vector/sms-communication-concept-illustration_114360-7457.jpg"
            alt="Bulk SMS"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h4 className="text-yellow-600 font-semibold uppercase mb-1">Overview</h4>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Bulk SMS Solutions Near You
          </h2>
          <p className="text-gray-700 mb-4">
            SRJ Softech Solutions offers fast and reliable Bulk SMS Services to enhance your customer communication. Whether you are promoting a product or sending important updates, our SMS gateway ensures delivery at scale.
          </p>
          <p className="text-gray-700 mb-4">
            We serve all industries with smart campaign strategies and instant delivery. From OTPs to offers, stay connected with your customers in real time.
          </p>
          <p className="text-gray-700">
            Choose from Promotional or Transactional SMS services with high deliverability and secure APIs. Our platform is scalable, affordable, and backed by 24/7 technical support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
