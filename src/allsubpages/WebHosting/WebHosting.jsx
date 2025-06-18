import React from 'react'
import HostingHero from './HostingHero'
import HostingOverview from './HostingOverview'
import HostingStats from './HostingStats'
import Footer from '../../components/footer/Footer'

const WebHosting = () => {
  return (
    <>
        <HostingHero/>
        <HostingOverview/>
        <HostingStats/>
                <Footer/>

    </>
  )
}

export default WebHosting;