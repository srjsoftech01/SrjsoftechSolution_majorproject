import React from "react";

const OverviewSection = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="shadow-xl rounded-xl overflow-hidden">
          <img
            src="https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg"
            alt="Mobile app"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h4 className="text-pink-600 font-semibold uppercase mb-1">Overview</h4>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            App website near me
          </h2>
          <p className="text-gray-700 mb-4">
            Welcome to Srj softech solutions, a leading web design and mobile app development
            company in Delhi. We specialize in providing custom solutions to businesses
            of all sizes, ranging from small startups to large enterprises. Our team of
            expert designers and developers work closely with our clients to understand
            their unique requirements and provide tailored solutions to meet their
            specific needs.
          </p>
          <p className="text-gray-700 mb-4">
            Being a main versatile improvement organization, Ambeytech gives an adaptable
            and vigorous Android portable application advancement arrangement. We proffer
            complete start to finish versatile application improvement administrations to
            meet your portable application's requesting execution.
          </p>
          <p className="text-gray-700">
            Our experienced engineers perform impeccably to convince our clients to return.
            Based on the layout and appraisal stage, we hand over custom iOS portable
            application improvement arrangements with complete business rationale,
            specialized versatility, and proficient execution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
