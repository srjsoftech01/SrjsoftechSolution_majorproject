import React from 'react';

const SocialIntro = () => {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
      <div className="flex-1">
        <img
          src="/Industry_works_intro_images/social_media_networking.jpg"
          alt="Social Networking Platforms"
          className="w-full rounded-lg shadow"
        />
      </div>
      <div className="flex-1 text-gray-700 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Innovative Social Networking Solutions</h2>
        <p className="text-gray-700 text-lg leading-relaxed text-justify">
          At <strong>SRJ Softech Solutions</strong>, we design scalable and secure social networking platforms that promote connection, content sharing, and user engagement. Whether you're building a niche community, a dating app, or a global network, we deliver real-time features that keep users coming back.
        </p>
        <p className="mt-4">
          From chat systems and activity feeds to advanced moderation tools and profile management — our full-stack solutions are built for performance, privacy, and growth.
        </p>
        <p className="mt-4">
          Launch your vision with SRJ and stand out in the crowded social media landscape with a platform tailored to your audience and goals.
        </p>
      </div>
    </section>
  );
};

export default SocialIntro;
