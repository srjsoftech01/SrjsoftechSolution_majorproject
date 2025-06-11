import React from 'react'
import HeroText from './HeroText'
import HeroCarousel from './HeroCarousel.jsx'

const HeroSection = () => {
  return (
    
            <section className="bg-[#230faa] w-full pt-40  pb-20">
                <div className="max-w-7xl mx-auto pl-20 px-4 flex flex-col lg:flex-row items-center gap-10">
                     <div className="flex-1">
                    <HeroText/>
                </div>
                <div className="flex-1 w-full ">
                    <HeroCarousel/>
                </div>
                </div>
               
                
            </section>
        )

  
}

export default HeroSection;