import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MobileMenu({ setMenuOpen }) {
  const [open, setOpen] = useState({ services: false, industries: false });

  return (
    <div className="lg:hidden bg-[#181734] text-white px-6 py-4 space-y-3">
      <Link to="/" className="block py-2 hover:text-yellow-300" onClick={() => setMenuOpen(false)}>
        Home
      </Link>

      {/* Services Dropdown */}
      <div>
        <button
          className="flex items-center justify-between w-full py-2"
          onClick={() => setOpen({ ...open, services: !open.services })}
        >
          <span className="text-yellow-400 font-semibold cursor-pointer hover:underline">
            Services
          </span>
          <FaChevronDown
            className={`transform transition-transform duration-300 ${open.services && "rotate-180"}`}
          />
        </button>
        {open.services && (
          <ul className="pl-4 space-y-1 text-sm transition-all duration-300 ease-in-out">
            <li><Link to="/services/websitedesign" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Website Designing</Link></li>
            <li><Link to="/services/graphicgesigz" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Graphic Designing</Link></li>
            <li><Link to="/services/logodesign" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Logo Designing</Link></li>
            <li><Link to="/services/customwebsitedesign" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Custom Website Design</Link></li>
            <li><Link to="/services/webdevelopment" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Web Development</Link></li>
            <li><Link to="/services/seo" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">SEO</Link></li>
            <li><Link to="/services/DigitalMarketing" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Digital Marketing</Link></li>
            <li><Link to="/services/wordpress" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">WordPress Development</Link></li>
            <li><Link to="/services/Ecommercedevelopment" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">E-Commerce Development</Link></li>
            <li><Link to="/services/appdev" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">App Development</Link></li>
            <li><Link to="/services/ppc" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">PPC Advertising</Link></li>
            <li><Link to="/services/contentwriting" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Content Writing</Link></li>
            <li><Link to="/services/webhosting" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Web Hosting</Link></li>
            <li><Link to="/services/Domain" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Domain Registration</Link></li>
            <li><Link to="/services/bulksms" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Bulk SMS</Link></li>
            <li><Link to="/services/whatsapp" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Whatsapp Advertising Software</Link></li>
          </ul>
        )}
      </div>

      {/* Industries Dropdown */}
      <div>
        <button
          className="flex items-center justify-between w-full py-2"
          onClick={() => setOpen({ ...open, industries: !open.industries })}
        >
          <span className="text-yellow-400 font-semibold cursor-pointer hover:underline">
            Industries
          </span>
          <FaChevronDown
            className={`transform transition-transform duration-300 ${open.industries && "rotate-180"}`}
          />
        </button>
        {open.industries && (
          <ul className="pl-4 space-y-1 text-sm transition-all duration-300 ease-in-out">
            <li><Link to="/industries/education" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Education and Learning</Link></li>
            <li><Link to="/industries/healthcare" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Healthcare and Fitness</Link></li>
            <li><Link to="/industries/retail" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">E-Commerce and Retail</Link></li>
            <li><Link to="#" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Business Startup</Link></li>
            <li><Link to="#" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Enterprise Service</Link></li>
            <li><Link to="#" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Digital Marketing</Link></li>
            <li><Link to="#" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Social Marketing</Link></li>
            <li><Link to="#" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Event and Ticket</Link></li>
            <li><Link to="#" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Food and Beverage</Link></li>
            <li><Link to="#" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Ticket and Booking</Link></li>
            <li><Link to="#" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Media and Entertainment</Link></li>
            <li><Link to="#" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Other</Link></li>
          </ul>
        )}
      </div>

      <Link to="/about" className="block py-2 hover:text-yellow-300" onClick={() => setMenuOpen(false)}>
        About Us
      </Link>
      <Link to="/blog" className="block py-2 hover:text-yellow-300" onClick={() => setMenuOpen(false)}>
        Blog
      </Link>
      <Link to="/contact_us" className="block py-2 hover:text-yellow-300" onClick={() => setMenuOpen(false)}>
        Contact Us
      </Link>
    </div>
  );
}
