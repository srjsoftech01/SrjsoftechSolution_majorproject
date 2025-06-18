import React from 'react'
import LogoDesignHero from './LogoDesignHero'
import LogoDesignOverview from './LogoDesignOverview'
import LogoDesignStats from './LogoDesignStats'
import Footer from '../../components/footer/Footer'


const LogoDesign = () => {
  return (
    <div>
      <LogoDesignHero/>
      <LogoDesignOverview/>
      <LogoDesignStats/>
              <Footer/>

    </div>
  )
}

export default LogoDesign