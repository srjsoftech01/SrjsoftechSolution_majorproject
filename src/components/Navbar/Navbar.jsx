import { useState } from "react";
import Actions from "./Actions";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#181734] text-white w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Logo />

        <div className="hidden lg:flex items-center space-x-6">
          <NavLinks />
        </div>

        <div className="hidden lg:block">
          <Actions />
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#181734] border-t border-gray-700 z-40 shadow-md">
          <MobileMenu setMenuOpen={setMenuOpen} />
          <div className="px-6 py-4 border-t border-gray-600">
            <Actions />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
