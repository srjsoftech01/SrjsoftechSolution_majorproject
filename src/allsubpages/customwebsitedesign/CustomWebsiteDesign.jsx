import React from 'react'
import WebsiteDesignHero from './WebsiteDesignHero'
import WebsiteOverview from './WebsiteOverview'
import WebsiteStats from './WebsiteStats'
import Footer from '../../components/footer/Footer'


const CustomWebsiteDesign = () => {
  return (
    <div>
      <WebsiteDesignHero/>
      <WebsiteOverview/>
      <WebsiteStats/>
              <Footer/>

    </div>
  )
}

export default CustomWebsiteDesign