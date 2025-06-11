import React, { useState } from 'react'
import Dropdown from './Dropdown'

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
        <a href="#" className='hover:underline text-white'>HOME</a>

        {/* services Dropdown */}
        <Dropdown
         title="SERVICES"
         isOpen={open.services} // Boolean to control dropdown visibility
         setOpen={handleServicesOpen}
         items={servicesItems}
         width="w-[600px]"

        />

        <a href="#" className='hover:underline'>ABOUT US</a>

        <Dropdown 
           title="INDUSTRIES"
           isOpen={open.industries}
           setOpen= {handleIndustriesOpen}
           items={industriesItems}
           width="w-[400px]"
        />

        <a href="#" className='hover:underline'>BLOG</a>
        <a href="#" className='hover:underline'>CONTACT US</a>
        
    </div>
  )
}

export default NavLinks