import React from 'react'
import DomainHero from './DomainHero'
import DomainOverview from './DomainOverview'
import DomainStats from './DomainStatus'
import Footer from '../../components/footer/Footer'

const Domain = () => {
  return (
    <div>
      <DomainHero/>
      <DomainOverview/>
      <DomainStats/>
              <Footer/>

    </div>
  )
}

export default Domain