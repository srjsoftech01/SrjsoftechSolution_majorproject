import React from 'react'
import HealthHero from './HealthHero';
import HealthIntro from './HealthIntro';
import HealthSolutions from './HealthSolutions';
import WhyChooseUs from '../../pages/aboutpages/WhyChooseUs';
import Footer from '../../components/footer/Footer';

const HealthCare = () => {
  return (
    <div>
        <HealthHero/>
        <HealthIntro/>
        <HealthSolutions/>
        <WhyChooseUs/>
        <Footer/>
    </div>
  )
}

export default HealthCare;