import React from "react";

const ContentOverview = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="shadow-xl rounded-xl overflow-hidden">
          <img
            src="https://img.freepik.com/free-vector/copywriting-concept-illustration_114360-7685.jpg"
            alt="Content writing"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h4 className="text-indigo-600 font-semibold uppercase mb-1">Overview</h4>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            SEO-Driven & Engaging Content Writing
          </h2>
          <p className="text-gray-700 mb-4">
            At SRJ Softech Solutions, we create tailored content that speaks your brand's voice. Whether it’s blog posts, web pages, social media content, or SEO articles – our writers make your brand stand out.
          </p>
          <p className="text-gray-700 mb-4">
            We follow a thorough research process and SEO best practices to ensure your content not only attracts but converts. Every word is curated to match your business goals.
          </p>
          <p className="text-gray-700">
            Trust us to provide plagiarism-free, engaging, and targeted content that delivers value to your audience and helps rank your website higher on search engines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentOverview;
