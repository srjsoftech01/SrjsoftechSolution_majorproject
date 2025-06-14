import React from 'react'
import AppHero from './AppHero'
import OverviewSection from './OverviewSection'
import StatsSection from './StatsSection'
import WhyChooseUs from '../../../aboutpages/WhyChooseUs'
import Footer from '../../../../components/footer/Footer'

const AppDev = () => {
  return (
    <div>
      <AppHero/>
      <OverviewSection/>
      <StatsSection/>
      <WhyChooseUs/>
      <Footer/>
    </div>
  )
}

export default AppDev
