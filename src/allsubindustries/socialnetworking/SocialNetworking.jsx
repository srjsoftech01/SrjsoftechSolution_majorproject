import React from 'react'
import SocialHero from './SocialHero'
import SocialIntro from './SocialIntro'
import SocialSolutions from './SocialSolutions'
import WhyChooseUs from '../../pages/aboutpages/WhyChooseUs'
import Footer from '../../components/footer/Footer'

const SocialNetworking = () => {
  return (
    <div>
        <SocialHero/>
        <SocialIntro/>
        <SocialSolutions/>
        <WhyChooseUs/>
        <Footer/>
    </div>
  )
}

export default SocialNetworking