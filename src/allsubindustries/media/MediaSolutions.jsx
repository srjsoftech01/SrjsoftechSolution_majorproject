import React from 'react';

const features = [
  {
    title: "OTT & Streaming Platforms",
    description: "Launch Netflix-style apps for movies, TV shows, or niche video content.",
  },
  {
    title: "Live Broadcast Integration",
    description: "Real-time live video streaming with chat, replay, and analytics modules.",
  },
  {
    title: "Audio & Podcast Hosting",
    description: "Distribute, manage and monetize podcasts or music albums securely.",
  },
  {
    title: "Interactive Media Tools",
    description: "Enable audience engagement with polls, comments, and real-time reactions.",
  },
];

const MediaSolutions = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {features.map((item, index) => (
          <div key={index} className="bg-purple-50 p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-purple-800 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediaSolutions;
