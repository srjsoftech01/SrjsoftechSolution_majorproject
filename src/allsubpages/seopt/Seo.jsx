import React from 'react'
import SeoHero from './SeoHero'
import SEOOverview from './SEOOverview'
import SEOStats from './SEOStats'
import Footer from '../../components/footer/Footer'

const Seo = () => {
  return (
    <div>
      <SeoHero/>
      <SEOOverview/>
      <SEOStats/>
      <Footer/>
    </div>
  )
}

export default Seo