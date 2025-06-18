import React from 'react';

const EventIntro = () => {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
      <div className="flex-1">
        <img
          src="/Industry_works_intro_images/event_organise.jpg"
          alt="Event Organizing Solutions"
          className="w-full rounded-lg shadow"
        />
      </div>
      <div className="flex-1 text-gray-700 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Smart Solutions for Event Organizers</h2>
        <p className="text-gray-700 text-lg leading-relaxed text-justify">
          At <strong>SRJ Softech Solutions</strong>, we empower event organizers, venues, and agencies with cutting-edge digital tools to plan, promote, and manage events seamlessly. From real-time ticket booking and QR-based check-ins to attendee analytics — we deliver custom solutions that simplify every stage of event execution.
        </p>
        <p className="mt-4">
          Whether you're hosting a concert, conference, wedding, or virtual meetup, our platforms are designed to scale and adapt to your needs — ensuring an efficient and memorable experience for both organizers and attendees.
        </p>
        <p className="mt-4">
          Collaborate with us to build user-friendly event websites, registration systems, and promotional campaigns that elevate your brand and drive maximum participation.
        </p>
      </div>
    </section>
  );
};

export default EventIntro;
