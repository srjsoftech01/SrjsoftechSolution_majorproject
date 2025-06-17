import React from 'react';

const features = [
  {
    title: "Profile & Feed Systems",
    description: "Custom user profiles, news feeds, and content walls.",
  },
  {
    title: "Real-Time Chat",
    description: "One-on-one and group messaging with media sharing.",
  },
  {
    title: "Community Features",
    description: "Likes, comments, groups, hashtags, and forums.",
  },
  {
    title: "Admin & Moderation Tools",
    description: "Content control, user reports, and insights dashboard.",
  },
];

const SocialSolutions = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialSolutions;
