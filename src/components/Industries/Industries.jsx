import React from "react";
import IndustryCard from "./IndustryCard";

const industries = [
  {
    icon: "https://www.ambeytech.com/uploads/071120241731003186_website-developer-for-business-startup-company-in-delhi.webp",
    title: "Business Startup",
    bgColor: "bg-cyan-200",
    path: "/industries/business_startup",

  },
  {
    icon: "https://www.ambeytech.com/uploads/071120241731003478_website-developer-for-enterprise-service-company-in-delhi.png",
    title: "Enterprise Service",
    bgColor: "bg-yellow-200",
    path: "/industries/enterpriseind",

  },
  {
    icon: "https://www.ambeytech.com/uploads/071120241731003833_website-developer-for-education-learning-in-delhi.png",
    title: "Education & Learning",
    bgColor: "bg-teal-200",
    path: "/industries/educationind",

  },
  {
    icon: "https://www.ambeytech.com/uploads/071120241731003933_website-developer-for-ecommerce-retail-in-delhi.png",
    title: "Ecommerce & Retail",
    bgColor: "bg-orange-300",
    path: "/industries/ecommerceandretail",

  },
  {
    icon: "https://www.ambeytech.com/uploads/071120241731004010_website-developer-for-digital-marketing-in-delhi.png",
    title: "Digital Marketing",
    bgColor: "bg-lime-200",
    path: "/industries/digitalmark",

  },
  {
    icon: "https://www.ambeytech.com/uploads/071120241731004091_website-developer-for-social-networking-in-delhi.png",
    title: "Social Networking",
    bgColor: "bg-pink-200",
    path: "/industries/socialnetworking",

  },
  {
    icon: "https://www.ambeytech.com/uploads/071120241731004172_website-developer-for-healthcare-fitness-in-delhi.png",
    title: "Healthcare & Fitness",
    bgColor: "bg-purple-200",
    path: "/industries/healthcare",

  },
  {
    icon: "https://www.ambeytech.com/uploads/081120241731004254_website-developer-for-event-ticket-in-delhi.png",
    title: "Event & Ticket",
    bgColor: "bg-green-300",
    path: "/industries/eventandticketind",

  },
  {
    icon: "https://www.ambeytech.com/uploads/081120241731004318_website-developer-for-food-beverage-in-delhi.png",
    title: "Food & Beverage",
    bgColor: "bg-cyan-300",
    path: "/industries/foodandwebind",

  },
  {
    icon: "https://www.ambeytech.com/uploads/081120241731004941_website-developer-for-ticketing-booking-in-delhi.png",
    title: "Ticketing & Booking",
    bgColor: "bg-blue-400",
    path: "/industries/ticketandbooking",

  },
  {
    icon: "https://www.ambeytech.com/uploads/081120241731004454_website-developer-for-media-entertainment-in-delhi.png",
    title: "Media & Enterainment",
    bgColor: "	bg-yellow-100",
    path: "/industries/media",

  },
  {
    icon: "https://www.ambeytech.com/uploads/081120241731005020_website-developer-for-other-industry-in-delhi.png",
    title: "Other",
    bgColor: "bg-teal-300",
    path: "/industries/otherind",

  }

];

const Industries = () => {
  return (
    <section className="w-full px-7 py-10 bg-white ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8">
        {/* Left Content */}
        <div className="lg:w-1/3  md:pt-40">
          <p className="text-red-500 font-semibold uppercase tracking-wide mb-2">
            Industries We Work For
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-blue-950 mb-4 
          text-base  bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
            Helping Businesses in All Domains
          </h2>
          <p className="text-blue-600 text-lg ">
            Successfully delivered digital products to all fields.
          </p>
        </div>

        {/* Right Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 flex-1">
          {industries.map((item, index) => (
            <IndustryCard
              key={index}
              icon={item.icon}
              title={item.title}
              bgColor={item.bgColor}
              path={item.path}
            />

          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
