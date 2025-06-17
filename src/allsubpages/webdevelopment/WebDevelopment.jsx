import React from 'react'
import WebDevHero from './WebDevHero'
import WebDevOverview from './WebDevOverview'
import WebDevStats from './WebDevStats'
import Footer from '../../components/footer/Footer'

const WebDevelopment = () => {
  return (
    <>
      <WebDevHero/>
      <WebDevOverview/>
      <WebDevStats/>
      <Footer/>
    </>
  )
}

export default WebDevelopment