import React from 'react'
import { Link } from 'react-router-dom'

import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube
} from 'react-icons/fa';

import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {

    const services = [
        { label: "Website Designing", path: "/services/websitedesign" },
        { label: "Web Development", path: "/services/webdevelopment" },
        { label: "E-Commerce Development", path: "/services/Ecommercedevelopment" },
        { label: "App Development", path: "/services/appdev" },
        { label: "WordPress Development", path: "/services/wordpress" },
    ];

    const companyLinks = [
        { name: 'Contact Us', path: '/contact_us' },
        { name: 'About Us', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: "Customer's FAQ", path: '/faq' }
    ];

    return (
        <footer className="bg-white text-gray-700 px-6 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Logo & Description */}
                <div>
                    <img
                        src=".././logo1.jpg"
                        alt="Logo"
                        className="w-36 mb-4 rounded-lg"
                    />
                    <p className="text-sm leading-relaxed">
                        We are a premier website & mobile app development company offering tailored solutions to fit your needs and budget.
                    </p>
                    <Link
                        to="/contact_us"
                        className="inline-block mt-6 px-6 py-2 text-white bg-blue-600 rounded-full shadow hover:bg-blue-700 transition-colors duration-300 text-sm font-semibold"
                    >
                        Enquire Now →
                    </Link>

                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-2xl text-gray-900 font-semibold mb-4">Contact</h3>
                    <ul className="space-y-4 text-base">
                        <li className="flex items-start gap-3">
                            <FaEnvelope className="mt-1 text-blue-600" />
                            <div>
                                <strong>Email</strong>
                                <p>
                                    <a
                                        href="mailto:srjsoftechsolutions@gmail.com"
                                        className="text-blue-700 hover:underline"
                                    >
                                        srjsoftechsolutions@gmail.com
                                    </a>
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <FaPhone className="mt-1 text-blue-600" />
                            <div>
                                <strong>Phone</strong>
                                <p>
                                    <a href="tel:+919266594199" className="text-blue-700 hover:underline">
                                        (+91) 9266594199
                                    </a>
                                </p>
                                <p>
                                    <a href="tel:+919266872499" className="text-blue-700 hover:underline">
                                        (+91) 9266872499
                                    </a>
                                </p>
                                <p>
                                    <a href="tel:+919220578799" className="text-blue-700 hover:underline">
                                        (+91) 9220578799
                                    </a>
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <FaMapMarkerAlt className="mt-1 text-blue-600" />
                            <div>
                                <strong>Address</strong>
                                <p>
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Infosys+Ltd,+Noida+Campus,+Urbtech+Trade+Center,+Tower+C+–+1101"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-700 hover:underline"
                                    >
                                        Infosys Ltd, Noida Campus, Urbtech Trade Center, Tower C – 1101
                                    </a>
                                </p>
                            </div>
                        </li>

                    </ul>
                </div>


                {/* Services */}
                <div>
                    <h3 className="text-2xl text-gray-900 font-semibold mb-4">Services</h3>
                    <ul className="space-y-3 text-base">
                        {services.map((service) => (
                            <li key={service.label}>
                                <Link
                                    to={service.path}
                                    className="hover:text-blue-600 transition-colors cursor-pointer"
                                >
                                    {service.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link to="/services" className="text-blue-600 font-semibold hover:underline">
                                View All (+)
                            </Link>
                        </li>
                    </ul>
                </div>


                {/* Company & Social */}
                <div>
                    <h3 className="text-2xl text-gray-900 font-semibold mb-4">Company</h3>
                    <ul className="space-y-3 text-base">
                        {companyLinks.map(({ name, path }) => (
                            <li key={name}>
                                <Link to={path} className="hover:text-blue-600 transition-colors">
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6">
                        <p className="mb-2 text-gray-800 font-medium">Follow us on</p>
                        <div className="flex gap-4 text-blue-600">
                            <a href="https://www.facebook.com/profile.php?id=61577599466653" aria-label="Facebook" className="hover:text-blue-800"><FaFacebookF /></a>
                            <a href="https://x.com/srjsoftechsols" aria-label="X" className="hover:text-blue-800"><FaXTwitter /></a>
                            <a href="https://www.linkedin.com/company/srj-softech-soluitions/about/?viewAsMember=true" aria-label="LinkedIn" className="hover:text-blue-800"><FaLinkedinIn /></a>
                            <a href="https://www.instagram.com/srjsoftech_solutions/#" aria-label="Instagram" className="hover:text-blue-800"><AiFillInstagram /></a>
                            <a href="https://www.youtube.com/@srjsoftechsolutions" aria-label="Youtube" className="hover:text-blue-800"><FaYoutube /></a>

                        </div>
                        <div className="mt-4">
                            <span className="text-gray-800 font-medium">Review us on</span>
                            <a href="https://www.google.com/maps/place/Infosys+Limited+-+Noida+Campus/@28.5165585,77.3788548,17z/data=!4m8!3m7!1s0x390ce894a7cf3613:0x9202d78f45f7f25f!8m2!3d28.5165585!4d77.3788548!9m1!1b1!16s%2Fg%2F11cn0sks1z?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D" className="hover:text-blue-800">
                                <img
                                    className="w-26 h-10 object-contain rounded-md shadow mt-2"
                                    src="/Google-logo.png"
                                    alt="Review us"
                                />
                            </a>



                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-12 border-t pt-6 text-sm text-center text-gray-600">
                © {new Date().getFullYear()} SRJ Softech Solutions. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
