

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import InputForm from "../ContactForm/InputForm";
import Footer from "../footer/Footer";


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

const ContactUsNew1 = () => {
    const [form, setForm] = useState({
        name: "",
        contact: "",
        email: "",
        service: "",
        message: "",
        agreed: false,
    });

    const [captcha, setCapture] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!captcha) {
            alert("Please verify reCAPTCHA");
            return;
        }
        console.log("Form Data:", form);
    };

    // Style using a JavaScript object
    const styles = {
        container: {
            backgroundColor: '#2196F3',
            color: '#ffffff',
            borderRadius: '8px',
            padding: '20px',
            width: '300px',
            margin: 'auto',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        },
        title: {
            margin: '0 0 20px',
            fontSize: '24px',
        },
        item: {
            margin: '10px 0',
            fontSize: '16px',
        },
        icon: {
            marginRight: '8px',
        }
    };

    return (
        <>
            <div className="mt-20">
                <div className="min-h-screen bg-blue-100 flex items-center justify-center p-6">
                    <div className="bg-white rounded-lg shadow-lg flex flex-col lg:flex-row w-full max-w-5xl overflow-hidden">

                        {/* Form Section */}
                        <form
                            onSubmit={handleSubmit}
                            className="w-full lg:w-1/2 p-6 space-y-4"
                        >
                            <h2 className="text-xl font-bold text-gray-700">
                                Have a Question? Send Us a Message
                            </h2>

                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name*"
                                required
                                className="w-full p-2 border border-gray-400 rounded"
                                onChange={handleChange}
                            />

                            <input
                                type="tel"
                                name="contact"
                                placeholder="Your Contact Number*"
                                required
                                className="w-full p-2 border border-gray-400 rounded"

                                onChange={handleChange}
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className="w-full p-2 border border-gray-400 rounded"

                                onChange={handleChange}
                            />

                            <select
                                name="service"
                                required
                                className="w-full p-2 border border-gray-400 rounded"

                                onChange={handleChange}
                            >
                                <option style={{ color: "" }} value="">Select Service</option>
                                <option value="website-designing">Website Designing</option>
                                <option value="web-development">Web Development</option>
                                <option value="ecommerce-development">E-Commerce Development</option>
                                <option value="digital-marketing">Digital Marketing</option>
                                <option value="app-development">App Development</option>
                                <option value="graphic-designing">Graphic Designing</option>
                                <option value="logo-designing">Logo Designing</option>
                                <option value="custom-website-design">Custom Website Design</option>
                                <option value="wordpress-development">WordPress Development</option>
                                <option value="seo">Search Engine Optimization</option>
                                <option value="ppc">PPC Advertising</option>
                                <option value="content-writing">Content Writing</option>
                                <option value="web-hosting">Web Hosting</option>
                                <option value="domain-registration">Domain Registration</option>
                                <option value="bulk-sms">Bulk SMS</option>
                                <option value="other">Other</option>
                            </select>

                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="4"
                                required
                                className="w-full p-2 border border-gray-400 rounded"

                                onChange={handleChange}
                            ></textarea>

                            <label className="flex items-center text-sm">
                                <input
                                    type="checkbox"
                                    name="agreed"
                                    className="mr-2"
                                    required
                                    onChange={handleChange}
                                />
                                I agree to the{" "}
                                <a href="#" className="text-blue-600 underline ml-1">
                                    Terms & Conditions
                                </a>
                            </label>

                            <ReCAPTCHA
                                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                                onChange={(value) => setCapture(value)}
                            />

                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                            >
                                Submit
                            </button>
                        </form>

                        {/* Right Contact Info Section */}
<div className="w-full lg:w-1/2 bg-blue-500 text-white p-8 justify-center">
    <h2 className="text-2xl font-bold mt-10 mb-8 text-center">Contact</h2>

    <div className="space-y-6 text-base">
        <div className="flex items-start gap-3">
            <FaEnvelope className="mt-1 text-white" />
            <div>
                <strong>Email</strong>
                <p>
                    <a
                        href="mailto:srjsoftechsolutions@gmail.com"
                        className="text-white underline hover:text-gray-200"
                    >
                        srjsoftechsolutions@gmail.com
                    </a>
                </p>
            </div>
        </div>

        <div className="flex items-start gap-3">
            <FaPhone className="mt-1 text-white" />
            <div>
                <strong>Phone</strong>
                <p>
                    <a href="tel:+919266594199" className="text-white underline hover:text-gray-200">
                        (+91) 9266594199
                    </a>
                </p>
                <p>
                    <a href="tel:+919266872499" className="text-white underline hover:text-gray-200">
                        (+91) 9266872499
                    </a>
                </p>
                <p>
                    <a href="tel:+919220578799" className="text-white underline hover:text-gray-200">
                        (+91) 9220578799
                    </a>
                </p>
            </div>
        </div>

        <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="mt-1 text-white" />
            <div>
                <strong>Address</strong>
                <p>
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Infosys+Ltd,+Noida+Campus,+Urbtech+Trade+Center,+Tower+C+–+1101"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white underline hover:text-gray-200"
                    >
                        Infosys Ltd, Noida Campus, Urbtech Trade Center, Tower C – 1101
                    </a>
                </p>
            </div>
        </div>
    </div>
</div>


                    </div>
                </div>
            </div>

            <Footer />
        </>
    );

};

export default ContactUsNew1;
