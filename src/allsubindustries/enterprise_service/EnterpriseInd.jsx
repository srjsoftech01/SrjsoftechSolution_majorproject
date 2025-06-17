import React from 'react'
import EnterpriseHero from './EnterpriseHero'
import EnterpriseIntro from './EnterpriseIntro'
import EnterpriseSolutions from './EnterpriseSolutions'
import WhyChooseUs from '../../pages/aboutpages/WhyChooseUs'
import Footer from '../../components/footer/Footer'

const EnterpriseInd = () => {
  return (
    <div>
      <EnterpriseHero/>
      <EnterpriseIntro/>
      <EnterpriseSolutions/>
      <WhyChooseUs/>
      <Footer/>
    </div>
  )
}

export default EnterpriseInd