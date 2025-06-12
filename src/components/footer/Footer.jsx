import React from 'react' 
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-[#FFE7E9] text-gray-700 px-5 py-10 md:px-12 lg:px-10'>
        <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 z-50">
         <div className=''>
            <img src=".././logo1.jpg"
             alt="Logo" className='w-32 mb-4  mt-2 rounded-2xl '/>
            <p className='text-sm'>
                We are best website & mobile app development company as per your
                  requirement with your budget.
            </p>
            <button className='mt-6 px-6 py-2 text-white rounded-full
                bg-gradient-to-r from-indigo-500 to-blue-400 shadow-lg text-sm font-semibold 
                hover:scale-105 transition-transform z-10'>
                Enquire Now →
            </button>
        </div>  
        <div className='px-5 pr-3'>
            <h3 className='text-2xl  text-gray-900 mb-4 z-10'>Contact</h3>
            <ul className='space-y-3 text-xl'>
                <li className='flex items-center gap-2'>
                 <FaEnvelope className='mt-1 text-indigo-500'/>   
                 <div>
                    <strong>Email</strong>
                    <p className='pr-5'>srjsoftechsolutions@gmail.com</p>
                 </div>
                </li>
                <li className='flex items-start gap-2'>
                    <FaPhone className="mt-2 text-indigo-500"/>
                    <div>
                        <strong>Phone</strong>
                        <p>(+91) 9266594199</p>
                        <p>(+91) 9266872499</p>
                         <p>(+91) 9266872499</p>
                    </div>
                </li> 
                <li className='flex items-gap gap-2'>
                     <FaMapMarkerAlt className="mt-1 text-indigo-500" />
                     <div>
                        <strong>Address</strong>
                        <p>
                            Infosys limited -noida campus urbtech trade center TOWER C 1101
                        </p>
                     </div>
                </li>
            </ul>
        </div>
       
       <div>
        <h3 className='text-2xl text-gray-900 mb-4'>Services</h3>
        <ul className='space-y-2 text-xl'>
            <li>Website Designing</li>
            <li>Web Development</li>
            <li>E-Commerce Development</li>
            <li>App Development</li>
            <li>WordPress Development</li>
            <li className='text-indigo-600 font-semibold'>View All (+)</li>
        </ul>
       </div>

       <div>
        <h3 className='text-2xl  text-gray-900 mb-4 z-15'>Company</h3>
        <ul className='space-y-2 text-xl'>
             <li>Contact Us</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Customer's FAQ</li>
            <li>Sitemap</li>
            
        </ul>
        <div className='mt-6 w-32  justify-center align-middle z-15'>
            <span className='text-center text-black'>Review us on</span>
            <img className='text-center w-25 h-10 rounded-2xl z-10' src="data:image/webp;base64,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" alt="" />
        </div>
       
       </div>
           
        </div>
    </footer>
  )
}

export default Footer;