import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

export default function MobileMenu({ setMenuOpen }) {
  const [open, setOpen] = useState({ services: false, industries: false });

  return (
    <div className="md:hidden bg-black text-white px-6 py-4 space-y-3">
      <a href="#" className="block py-2" onClick={() => setMenuOpen(false)}>Home</a>

      {/* Services Dropdown */}
      <div>
        <button
          className="flex items-center justify-between w-full py-2"
          onClick={() => setOpen({ ...open, services: !open.services })}
        >
          <span>Services</span>
          <FaChevronDown className={`transform transition ${open.services && "rotate-180"}`} />
        </button>
        {open.services && (
          <ul className="pl-4 space-y-1 text-sm">
            <li>Website Designing</li>
            <li>Graphic Designing</li>
            <li>Logo Designing</li>
            <li>Custom Website Design</li>
            <li>Web Development</li>
            <li>SEO / PPC</li>
            <li>Digital Marketing</li>
            <li>WordPress Development</li>
          </ul>
        )}
      </div>

      {/* Industries Dropdown */}
      <div>
        <button
          className="flex items-center justify-between w-full py-2"
          onClick={() => setOpen({ ...open, industries: !open.industries })}
        >
          <span>Industries</span>
          <FaChevronDown className={`transform transition ${open.industries && "rotate-180"}`} />
        </button>
        {open.industries && (
          <ul className="pl-4 space-y-1 text-sm">
            <li>Education</li>
            <li>Healthcare</li>
            <li>Retail</li>
            <li>Finance</li>
            <li>Real Estate</li>
            <li>Automobile</li>
          </ul>
        )}
      </div>

      <a href="#" className="block py-2" onClick={() => setMenuOpen(false)}>About Us</a>
      <a href="#" className="block py-2" onClick={() => setMenuOpen(false)}>Blog</a>
      <a href="#" className="block py-2" onClick={() => setMenuOpen(false)}>Contact Us</a>
    </div>
  );
}
