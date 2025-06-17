import React from 'react'
import MediaHero from './MediaHero'
import MediaIntro from './MediaIntro'
import MediaSolutions from './MediaSolutions'
import WhyChooseUs from '../../pages/aboutpages/WhyChooseUs'
import Footer from '../../components/footer/Footer'

const MediaInd = () => {
  return (
    <div>
        <MediaHero/>
        <MediaIntro/>
        <MediaSolutions/>
        <WhyChooseUs/>
        <Footer/>
    </div>
  )
}

export default MediaInd