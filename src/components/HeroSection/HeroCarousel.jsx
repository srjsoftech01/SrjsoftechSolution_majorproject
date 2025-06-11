import React, { useEffect, useRef, useState } from 'react'
import CarouselCard from './CarouselCard'

const cards = [
    {
       image:"https://www.ambeytech.com/uploads/091120241731145290_web-development-icon.webp",
       title:"App Development 1", 
    },
      {
       image:"https://www.ambeytech.com/uploads/091120241731145661_e-commerce-web-development-icon.webp",
       title:"WordPress Development", 
    },
      {
       image:"https://www.ambeytech.com/uploads/091120241731145759_app-development-icon.webp",
       title:"Website Designing", 
    },
  {
    image: "https://www.ambeytech.com/uploads/091120241731145290_web-development-icon.webp",
    title: "E-Commerce Development",
  },
  {
    image: "https://www.ambeytech.com/uploads/091120241731145661_e-commerce-web-development-icon.webp",
    title: "Graphic Design",
  },
]

const HeroCarousel = () => {
 
    // const [index, setIndex] = useState(0);
    const containerRef = useRef(null);
    const [paused, setPaused] = useState(false);

    
    useEffect(()=>{
        const scrollContainer = containerRef.current;
        let scrollAmount = 0;

        const interval = setInterval(() => {

            if(!paused && scrollContainer) {
                //to move forward of width by 1 card
                scrollAmount +=  scrollContainer.offsetWidth /3;

                if(scrollAmount >= scrollContainer.scrollWidth - scrollContainer){
                    scrollAmount = 0;
                }

                scrollContainer.scrollTo({
                    left:scrollAmount,
                    behavior:'smooth',
                })

                
               
            }
        }, 1000);

        return () => clearInterval(interval); 
    })
   
   
  return (

     <div 
     ref={containerRef}
     onMouseEnter = {() => setPaused(false)}
     onMouseLeave = {() => setPaused(true)}
     className='flex overflow-x-scroll scroll-smooth space-x-4 p-2 no-scrollbar'
     >
        {cards.map((card,i) => (
            <div key={i}
                className="flex-shrink-0 w-[90%] sm:w-[80%] md:w-[45%] lg:w-[30%] transition-transform duration-500"
                >
             <CarouselCard image={card.image} title={card.title}/>
              </div>   
        ))}
     </div>
  )
}

export default HeroCarousel;