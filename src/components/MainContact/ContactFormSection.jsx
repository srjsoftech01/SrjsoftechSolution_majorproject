// src/components/ContactFormSection.jsx
import React from 'react';
import ContactForm from './ContactForm';
import ContactIllustration from './ContactIllustration';

const ContactFormSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#E7FCFF] to-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F0F4D] mb-6">
            Have Question? Write a Message
          </h2>
          <ContactForm />
        </div>
        <ContactIllustration />
      </div>
    </section>
  );
};

export default ContactFormSection;

