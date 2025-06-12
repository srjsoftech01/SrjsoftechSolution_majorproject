import { useState } from "react";
import Actions from "./Actions";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () =>{
   
    const [menuOpen , setMenuOpen] = useState(false);

    return(
        <nav className="bg-[#181734] h-20 text-white w-full fixed top-0 left-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between ">
                <Logo/>
                <div className="hidden md:flex items-center space-x-6">
                     <NavLinks/>
                </div>
               <div className="hidden md:block">
                <Actions/>
               </div>
                

                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <button onClick={()=> setMenuOpen(!menuOpen)} className="text-2xl">
                        {menuOpen ? <FaTimes/> : <FaBars/>}
                    </button>
                </div>
            </div>

            {/* mobile Menu */}
            {menuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}
        </nav>
    )
}

export default Navbar;