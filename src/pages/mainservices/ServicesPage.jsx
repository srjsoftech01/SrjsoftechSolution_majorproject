import React from "react";
import ServiceItem from "./ServiceItem";


const allServices = [
  {
    title: "Website Designing",
    description:
      "We create stunning, responsive websites that reflect your brand’s personality and engage your visitors effectively.",
    image: "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg?...",
    path:"/services/websitedesign",
  },
  {
    title: "Graphic Designing",
    description:
      "Our creative designs turn ideas into impactful visuals that speak directly to your target audience.",
    image: "https://img.freepik.com/premium-photo/home-creative-computer-white-background_1019612-33.jpg?...",
     path:"/services/graphicgesign",
  },
  {
    title: "Logo Designing",
    description:
      "Make a lasting impression with a unique and professional logo that defines your identity.",
    image: "https://img.freepik.com/free-vector/gradient-monogram-logo-design_23-2150549846.jpg?...",
      path:"/services/logodesign",
  },
  {
    title: "Custom Website Design",
    description:
      "We craft custom-built websites tailored to your brand goals and target market.",
    image: "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg?...",
      path:"/services/customwebsitedesign",
  },
  {
    title: "Web Development",
    description:
      "Robust, scalable websites built with the latest technologies to ensure speed, security, and functionality.",
    image: "https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?...",
      path:"/services/webdevelopment",
  },
  {
    title: "E-Commerce Development",
    description:
      "Launch high-converting online stores with custom features, payment gateways, and a smooth checkout experience.",
    image: "https://img.freepik.com/free-photo/digital-wardrobe-transparent-screen_53876-105380.jpg?...",
      path:"/services/Ecommercedevelopment",
  },
  {
    title: "App Development",
    description:
      "We develop seamless, user-friendly mobile apps that elevate customer engagement and usability.",
    image: "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?...",
      path:"/services/appdev",
  },
  {
    title: "WordPress Development",
    description:
      "From themes to plugins, we deliver flexible and dynamic WordPress solutions for every need.",
    image: "https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg?...",
      path:"/services/wordpress",
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven digital marketing strategies to grow your brand and generate quality leads.",
    image: "https://img.freepik.com/free-photo/corporate-management-strategy-solution-branding-concept_53876-167088.jpg?...",
      path:"/services/DigitalMarketing",
  },
  {
    title: "Search Engine Optimization",
    description:
      "Increase your visibility, improve rankings, and drive organic traffic with proven SEO techniques.",
    image: "https://img.freepik.com/free-photo/homepage-concept-with-search-bar_23-2150040204.jpg?...",
      path:"/services/seo",
  },
  {
    title: "PPC Advertising",
    description:
      "Maximize your ROI with highly-targeted Pay-Per-Click campaigns managed by certified experts.",
    image: "https://img.freepik.com/free-vector/marketer-delivering-ads-with-megaphone-devices-cross-device-marketing_335657-304.jpg?...",
      path:"/services/ppc",
  },
  {
    title: "Content Writing",
    description:
      "Engaging, SEO-optimized content that attracts readers and ranks higher on search engines.",
    image: "https://img.freepik.com/free-photo/media-journalism-global-daily-news-content-concept_53876-123733.jpg?...",
      path:"/services/contentwriting",
  },
  {
    title: "Web Hosting",
    description:
      "Fast, secure hosting with 99.9% uptime and dedicated support to keep your site running smoothly.",
    image: ".././webhosting.avif",
      path:"/services/webhosting",
  },
  {
    title: "Domain Registration",
    description:
      "Secure the perfect domain for your business with hassle-free domain registration services.",
    image: "https://img.freepik.com/free-psd/3d-rendering-interface-icon_23-2151553990.jpg?...",
      path:"/services/Domain",
  },
  {
    title: "Bulk SMS",
    description:
      "Reach thousands instantly with our reliable and cost-effective bulk SMS service.",
    image: "https://img.freepik.com/free-photo/phone-computer-graphic-showing-mobile-phone-lifestyle_1134-771.jpg?...",
      path:"/services/bulksms",
  },
  {
    title: "Whatsapp Advertising Software",
    description:
      "Automate your WhatsApp marketing with our smart software to boost conversions and outreach.",
    image: "https://img.freepik.com/free-psd/social-media-phone_23-2151938413.jpg?...",
      path:"/services/whatsapp",
  },
];

export default function ServicesPage() {
  return (
  

    <section className="bg-gray-200 w-full">
    
      <div className="w-full text-center py-16 bg-gradient-to-l from-[#2A7B9B] to-[#EDDD53]">
        <h2 className="text-4xl font-extrabold text-[#2D2C50] mt-10">
          Our Services
        </h2>
        <p className="text-red-600 text-xl mt-4 mb-6 max-w-2xl mx-auto px-4">
          Explore our comprehensive list of services crafted to meet the needs of every digital business.
        </p>
      </div>

  
      <div className="mx-auto px-4 max-w-7xl py-12 space-y-10">
        {allServices.map((service, index) => (
          <ServiceItem key={index} {...service} reverse={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}
