import React, { useState } from 'react'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'

const servicesItems = [
    {
        title: "Front End",
        list: [
            "Website Designing",
            "Graphic Designing",
            "Logo Designing",
            "Custom Website Design",
        ],
    },
     {
    title: "Web & Marketing",
    list: [
      "Web Development",
      "SEO / PPC",
      "Digital Marketing",
      "WordPress Development",
    ],
  },
]

const industriesItems = [
    {
        title:"",
        list: ["Education","HealthCare", "Retail"],
    },
    {
        title:"",
        list: ["Finance", "Real Estate", "Automobile"],
    }
]

const NavLinks = () => {

  const [open, setOpen] = useState({
    services:false,
    industries:false,
  });

  function handleServicesOpen(value){
       setOpen((prev)  => ({...prev, services:value}));
  }

  function handleIndustriesOpen(value){
    setOpen((prev) => ({...prev, industries:value}))
  }

  return (
    <div className='hidden md:flex items-center space-x-6'>
        <Link to="/"  className='hover:underline text-white'>HOME</Link>

      
        <Link to="/services" className="hover:underline text-white">SERVICES</Link>

    
        <Link to="/about" className='hover:underline text-white'>ABOUT US</Link>

        {/* <Dropdown 
           title="INDUSTRIES"
           isOpen={open.industries}
           setOpen= {handleIndustriesOpen}
           items={industriesItems}
           width="w-[400px]"
        /> */}
        <Link to="/industries" className='hover:underline text-white'>INDUSTRIES</Link>

        <a href="#" className='hover:underline'>BLOG</a>
        <a href="/contact_us" className='hover:underline'>CONTACT US</a>
        
    </div>
  )
}

export default NavLinks