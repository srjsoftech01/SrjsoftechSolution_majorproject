import React from 'react'
import WebsiteDesignHero from './WebsiteDesignHero'
import WebsiteDesignOverview from './WebsiteDesignOverview'
import WebsiteStats from '../customwebsitedesign/WebsiteStats'
import WebsiteDesignStats from './WebsiteDesinStats'
import Footer from '../../components/footer/Footer'

const WebsiteDesign = () => {
  return (
    <div>
        <WebsiteDesignHero/>
        <WebsiteDesignOverview/>
        <WebsiteDesignStats/>
        <Footer/>
    </div>
  )
}

export default WebsiteDesign