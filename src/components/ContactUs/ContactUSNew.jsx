

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import InputForm from "../ContactForm/InputForm";
import Footer from "../footer/Footer";

const ContactUsNew = () => {
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
        <div className="mt-24">
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
                            <option style={{color: ""}} value="">Select Service</option>
                            {/* ...options... */}
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
                    <div className="w-full lg:w-1/2 bg-blue-500 text-white p-8 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold mb-30 text-center">Contact us</h2>

                        <div className="space-y-4 text-base">
                            <div className="flex items-start gap-2">
                                <span>📍</span>
                                <a href="https://www.facebook.com/SRJGRP/" aria-label="Facebook" ><p>Urbtech trade center, Infosys limited, Sector 132, Noida, Uttar Pradesh 201304</p></a>
                                
                            </div>
                            <div className="flex items-center gap-2">
                                <span>📞</span>
                                
                                 <a href="https://www.facebook.com/SRJGRP/" aria-label="Facebook" ><p>+123 2355 98</p></a>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>✉️</span>
                                 <a href="https://www.facebook.com/SRJGRP/" aria-label="Facebook" ><p>info@yoursite.com</p></a>
                                
                            </div>
                            <div className="flex items-center gap-2">
                                <span>🌐</span>
                                 <a href="https://www.facebook.com/SRJGRP/" aria-label="Facebook" ><p>yoursite.com</p></a>
                                
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

export default ContactUsNew;
