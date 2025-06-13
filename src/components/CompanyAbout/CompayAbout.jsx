import { motion } from "framer-motion";

const CompanyAbout = () => {
  return (
    <div className="bg-black text-white py-20 px-6 md:px-16 lg:px-24">
      <div className="grid md:grid-cols-2 items-center gap-12">
        
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-pink-500 text-lg font-semibold mb-2 tracking-wide">
            WE ARE
          </h3>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Best Website Designing Company
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
           At Srj Softech Solution, we turn ideas into powerful software using modern tech — driving performance, innovation, and global business growth</p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src=".././mainsection.jpeg"
            alt="About Srj Softech"
            className="rounded-2xl shadow-2xl w-full max-w-md hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyAbout;
