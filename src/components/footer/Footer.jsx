import React from 'react'
import { Link } from 'react-router-dom'

import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram
} from 'react-icons/fa';

const Footer = () => {
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
  to="/contact"
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
                                <p>srjsoftechsolutions@gmail.com</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <FaPhone className="mt-1 text-blue-600" />
                            <div>
                                <strong>Phone</strong>
                                <p>(+91) 9266594199</p>
                                <p>(+91) 9266872499</p>
                                <p>(+91) 9220578799</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <FaMapMarkerAlt className="mt-1 text-blue-600" />
                            <div>
                                <strong>Address</strong>
                                <p>Infosys Ltd, Noida Campus, Urbtech Trade Center, Tower C – 1101</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-2xl text-gray-900 font-semibold mb-4">Services</h3>
                    <ul className="space-y-3 text-base">
                        {['Website Designing', 'Web Development', 'E-Commerce Development', 'App Development', 'WordPress Development'].map(service => (
                            <li key={service} className="hover:text-blue-600 transition-colors cursor-pointer">
                                {service}
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
                        {['Contact Us', 'About Us', 'Blog', "Customer's FAQ", 'Sitemap'].map(page => (
                            <li key={page} className="hover:text-blue-600 transition-colors cursor-pointer">
                                {page}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6">
                        <p className="mb-2 text-gray-800 font-medium">Follow us</p>
                        <div className="flex gap-4 text-blue-600">
                            <a href="https://www.facebook.com/SRJGRP/" aria-label="Facebook" className="hover:text-blue-800"><FaFacebookF /></a>
                            <a href="#" aria-label="Twitter" className="hover:text-blue-800"><FaTwitter /></a>
                            <a href="#" aria-label="LinkedIn" className="hover:text-blue-800"><FaLinkedinIn /></a>
                            <a href="#" aria-label="Instagram" className="hover:text-blue-800"><FaInstagram /></a>
                        </div>
                        <div className="mt-4">
                            <span className="text-gray-800 font-medium">Review us on</span>
                            <img
                                className="w-36 h-10 object-contain rounded-md shadow mt-2"
                                src="data:image/webp;base64,UklGRoIJAABXRUJQVlA4IHYJAABwPQCdASpc...rest..."
                                alt="Review us"
                            />
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
