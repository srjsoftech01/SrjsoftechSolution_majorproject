import React from 'react'

const HeroText = () => {
  return (
    <div>
    <h1 className='text-4xl sm:text-5xl font-extrabold leading-tight text-white'>
        <span className='block'>WEB.</span>
        <span className='block'>MOBILE.</span>
        <span className='block'>GRAPHIC.</span>
        <span className='block'>MARKETING.</span>
    </h1>
     <p className="mt-6 text-lg text-yellow-400 font-medium">
        Website and App development solution for transforming and innovating businesses.
      </p>
      <button className="mt-6 px-6 py-3 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full text-white font-bold">
        Enquire Now &rarr;
      </button>

    </div>  
    // <div className='max-w-md'>
    //     <h1 className='text-5xl font-bold leading-tight mb-4'>
    //         WEB.<br/>MOBILE.<br/>GRAPHIC.<br/>MARKETING.
    //     </h1>
    //     <p className='text-yellow-400 mb-6 text-lg'>
    //         Website and App development solution for transforming and innovating businesses.
    //     </p>
    //     <div className="flex flex-col sm:flex-row gap-4 ">
    //         <button className='bg-gradient-to-r from-pin-500 to-red-400 text-white font-semibold px-6 py-3 rounded-full cursor-pointer'>
    //             Enquire Now &gt;
    //         </button>

    //         <a href="" className='bg-green-600 text-white font-medium px-6 py-3 rounded-full'>
    //             Chat with us </a>
    //     </div>
    // </div>
  )
}

export default HeroText;