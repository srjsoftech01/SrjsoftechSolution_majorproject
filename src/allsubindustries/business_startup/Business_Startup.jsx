import React from 'react'
import StartupHero from './StartupHero'
import StartupFeatures from './StartupFeatures'
import StartupIntro from './StartupIntro'
import WhyChooseUs from '../../pages/aboutpages/WhyChooseUs'
import Footer from '../../components/footer/Footer'
import StartupStats from './StartupStats'

const Business_Startup = () => {
  return (
    <div>
        <StartupHero/>
        <StartupStats/>
         <StartupIntro/>
        <StartupFeatures/>
        <WhyChooseUs/>
        <Footer/>
       
    </div>
  )
}

export default Business_Startup