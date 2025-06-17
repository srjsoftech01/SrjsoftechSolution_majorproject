import React from 'react'
import StartupHero from './StartupHero'
import StartupFeatures from './StartupFeatures'
import StartupIntro from './StartupIntro'
import WhyChooseUs from '../../pages/aboutpages/WhyChooseUs'
import Footer from '../../components/footer/Footer'

const Business_Startup = () => {
  return (
    <div>
        <StartupHero/>
         <StartupIntro/>
        <StartupFeatures/>
        <WhyChooseUs/>
        <Footer/>
       
    </div>
  )
}

export default Business_Startup