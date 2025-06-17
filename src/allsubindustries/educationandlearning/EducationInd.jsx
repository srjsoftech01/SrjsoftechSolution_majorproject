import React from 'react'
import EducationHero from './EducationHero'
import EducationIntro from './EducationIntro'
import EducationSolutions from './EducationSolutions'
import WhyChooseUs from '../../pages/aboutpages/WhyChooseUs'
import Footer from '../../components/footer/Footer'

const EducationInd = () => {
  return (
    <div>
        <EducationHero/>
        <EducationIntro/>
        <EducationSolutions/>
        <WhyChooseUs/>
        <Footer/>
    </div>
  )
}

export default EducationInd