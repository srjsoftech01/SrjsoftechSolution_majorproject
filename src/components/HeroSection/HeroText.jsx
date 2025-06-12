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
    
  )
}

export default HeroText;