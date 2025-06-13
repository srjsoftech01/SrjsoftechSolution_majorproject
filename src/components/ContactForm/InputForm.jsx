

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const InputForm = () => {
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

  return (
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
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />

          <input
            type="tel"
            name="contact"
            placeholder="Your Contact Number*"
            required
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />

          <select
            name="service"
            required
            className="w-full p-2 border rounded"
            onChange={handleChange}
          >
            <option value="" className="text-black bg-gray-200 text-xl">Select Service</option>
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
            className="w-full p-2 border rounded"
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

        {/* Image Section */}
        <div className="hidden lg:block lg:w-1/2">
          <img
            src=".././formimage5.jpg"
            alt="Contact"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default InputForm;
