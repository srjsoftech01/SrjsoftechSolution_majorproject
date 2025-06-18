import React from 'react';

const EventIntro = () => {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
      <div className="flex-1">
        <img
          src="/Industry_works_intro_images/tickets.jpg"
          alt="Ticket Booking System"
          className="w-full rounded-lg shadow"
        />
      </div>
      <div className="flex-1 text-gray-700 text-lg leading-relaxed">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Smart Ticket Booking Platforms</h2>
        <p className="text-gray-700 text-lg leading-relaxed text-justify">
          At <strong>SRJ Softech Solutions</strong>, we build dynamic and secure ticketing systems for concerts, festivals, sports events, conferences, and more. From real-time seat booking and QR-based e-tickets to integrated payment gateways — we deliver end-to-end platforms tailored for speed and scale.
        </p>
        <p className="mt-4">
          Our customizable dashboards help event organizers manage attendees, track sales, and automate reporting — all within a user-friendly environment.
        </p>
        <p className="mt-4">
          Whether you're launching a one-time event or a recurring series, we help you create seamless, mobile-optimized booking experiences that keep customers coming back.
        </p>
      </div>
    </section>
  );
};

export default EventIntro;
