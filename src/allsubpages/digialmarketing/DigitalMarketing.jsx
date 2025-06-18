import React from 'react'
import DigitalMarketingHero from './DigitalMarketingHero'
import MarketingOverview from './MarketingOverview'
import MarketingStats from './MarketingStats'
import Footer from '../../components/footer/Footer'


const DigitalMarketing = () => {
  return (
    <div>
      <DigitalMarketingHero/>
      <MarketingOverview/>
      <MarketingStats/>
              <Footer/>

    </div>
  )
}

export default DigitalMarketing