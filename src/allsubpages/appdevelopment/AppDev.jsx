import React from 'react'
import Footer from '../../components/footer/Footer';
import WhyChooseUs from '../../pages/aboutpages/WhyChooseUs';
// import AppHero from "./AppHero"
import OverviewSection from './appsection/OverviewSection';
import StatsSection from './appsection/StatsSection';
import App_Hero from './appsection/App_Hero';



const AppDev = () => {
  return (
    <div>
      <App_Hero/>
      <OverviewSection/>
      <StatsSection/>
      <WhyChooseUs/>
      <Footer/>
    </div>
  )
}

export default AppDev;
