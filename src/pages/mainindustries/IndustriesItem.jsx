import IndustriesPage from "./IndustriesPage";


const ItemData = [
  {
    title: "Business Startup",
    description: "Empowering startups with digital solutions to launch, scale, and succeed in competitive markets.",
    image: ".././statupbusiness.avif",
    path: "/industries/business_startup",
  },
  {
    title: "Enterprise Service",
    description: "Robust enterprise software development to streamline operations and improve productivity.",
    image: ".././enterprise.avif",
    path: "/industries/enterpriseind",
  },
  {
    title: "Education & Learning",
    description: "Interactive e-learning platforms and LMS solutions to enhance knowledge delivery and accessibility.",
    image: ".././education.avif",
    path: "/industries/educationind",
  },
  {
    title: "Ecommerce & Retail",
    description: "End-to-end ecommerce platforms to boost sales, manage inventory, and create seamless shopping experiences.",
    image: ".././ecommerceandretail.avif",
    path: "/industries/ecommerceandretail",
  },
  {
    title: "Digital Marketing",
    description: "Result-driven digital strategies for branding, lead generation, and online visibility.",
    image: ".././digitalmarket.jpeg",
    path: "/industries/digitalmark",
  },
  {
    title: "Social Networking",
    description: "Custom-built social platforms for community engagement, real-time communication, and user growth.",
    image: "socialnetworking.avif",
    path: "/industries/socialnetworking",
  },
  {
    title: "Healthcare & Fitness",
    description: "Smart healthcare apps, fitness trackers, and telemedicine platforms to support well-being.",
    image: ".././healthcare.avif",
    path: "/industries/healthcare",
  },
  {
    title: "Event & Ticket",
    description: "Digital ticketing and event management systems with secure payment and easy access control.",
    image: ".././ticket.avif",
    path: "/industries/eventandticketind",
  },
  {
    title: "Food & Beverage",
    description: "Online food delivery, restaurant management, and menu-ordering apps for F&B businesses.",
    image: ".././foodweverage.avif",
    path: "/industries/foodandwebind",
  },
  {
    title: "Ticketing & Booking",
    description: "Real-time booking engines for travel, cinema, and services with user-friendly interfaces.",
    image: ".././theticket.png",
    path: "/industries/ticketandbooking",
  },
  {
    title: "Media & Entertainment",
    description: "On-demand streaming, content platforms, and media apps for a captivating digital experience.",
    image: ".././mediaandindustries.avif",
    path: "/industries/media",
  },
  {
    title: "Other",
    description: "Custom software solutions tailored to unique industry requirements outside standard categories.",
    image: ".././other.avif",
    path: "/industries/otherind",
  }
];


export default function IndustriesItem() {
  return (
  

    <section className="bg-gray-200 w-full">
    
   
  
      <div className="mx-auto px-4 max-w-7xl py-12 space-y-10">
        {ItemData.map((item, index) => (
          <IndustriesPage key={index} {...item} reverse={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}
