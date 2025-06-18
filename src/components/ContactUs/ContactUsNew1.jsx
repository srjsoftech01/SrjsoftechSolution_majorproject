

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Footer from "../footer/Footer";





import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaFacebookF,
    FaGlobe,
    FaLinkedinIn,
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
                            <h2 className="text-xl font-bold text-emerald-600">
                                Have a Question? Just a message away!
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

                        <div className="w-full lg:w-1/2 bg-gradient-to-br from-white via-green-100 to-emerald-400 text-gray-800 p-8 justify-center">
                           <h2 className="text-2xl font-bold mt-2 mb-8 text-center text-emerald-600">Wanna connect with us!</h2>


                            <div className="space-y-6 text-base">
                                {/* Email */}
                                <div className="flex items-start gap-3">
                                    <FaEnvelope className="mt-1 text-emerald-600" />
                                    <div>
                                        <strong className="text-emerald-600">Email</strong>
                                        <p>
                                            <a
                                                href="mailto:srjsoftechsolutions@gmail.com"
                                                className="text-gray-800 hover:text-emerald-700"
                                            >
                                                srjsoftechsolutions@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-3">
                                    <FaPhone className="mt-1 text-emerald-600" />
                                    <div>
                                        <strong className="text-emerald-600">Phone</strong>
                                        <p>
                                            <a href="tel:+919266594199" className="text-gray-800 hover:text-emerald-700">
                                                +91 9266594199
                                            </a>
                                        </p>
                                        <p>
                                            <a href="tel:+919266872499" className="text-gray-800 hover:text-emerald-700">
                                                +91 9266872499
                                            </a>
                                        </p>
                                        <p>
                                            <a href="tel:+919220578799" className="text-gray-800 hover:text-emerald-700">
                                                +91 9220578799
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start gap-3">
                                    <FaMapMarkerAlt className="mt-1 text-emerald-600" />
                                    <div>
                                        <strong className="text-emerald-600">Address</strong>
                                        <p>
                                            <a
                                                href="https://www.google.com/maps/search/?api=1&query=Infosys+Ltd,+Noida+Campus,+Urbtech+Trade+Center,+Tower+C+–+1101"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-800  hover:text-emerald-700"
                                            >
                                                Infosys Ltd, Noida Campus, Urbtech Trade Center, Tower C – 1101
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* Website */}
                                <div className="flex items-start gap-3">
                                    <FaGlobe className="mt-1 text-emerald-600" />
                                    <div>
                                        <strong className="text-emerald-600">Website</strong>
                                        <p>
                                            <a
                                                href="https://www.srjsoftechsolutions.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-800  hover:text-emerald-700"
                                            >
                                                www.srjsoftechsolutions.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media Section */}
                            <div className="mt-8">
                                <p className="mb-2 text-gray-800 font-semibold">Follow us on</p>
                                <div className="flex gap-4 text-emerald-600">
                                    <a href="https://www.facebook.com/profile.php?id=61577599466653" aria-label="Facebook" className="hover:text-emerald-700"><FaFacebookF /></a>
                                    <a href="https://x.com/srjsoftechsols" aria-label="X" className="hover:text-emerald-700"><FaXTwitter /></a>
                                    <a href="https://www.linkedin.com/company/srj-softech-soluitions/about/?viewAsMember=true" aria-label="LinkedIn" className="hover:text-emerald-700"><FaLinkedinIn /></a>
                                    <a href="https://www.instagram.com/srjsoftech_solutions/#" aria-label="Instagram" className="hover:text-emerald-700"><AiFillInstagram /></a>
                                    <a href="https://www.youtube.com/@srjsoftechsolutions" aria-label="Youtube" className="hover:text-emerald-700"><FaYoutube /></a>
                                </div>

                                {/* Review Us Section */}
                                <div className="mt-6">
                                    <p className="text-gray-800 font-semibold">Review us on</p>
                                    <a
                                        href="https://www.google.com/maps/place/Infosys+Limited+-+Noida+Campus/@28.5165585,77.3788548,17z/data=!4m8!3m7!1s0x390ce894a7cf3613:0x9202d78f45f7f25f!8m2!3d28.5165585!4d77.3788548!9m1!1b1!16s%2Fg%2F11cn0sks1z?entry=ttu"
                                        className="hover:opacity-90 inline-block"
                                    >
                                        <img
                                            className="w-28 h-10 object-contain rounded-md shadow mt-2"
                                            src="/Google-logo.png"
                                            alt="Review us"
                                        />
                                    </a>
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
