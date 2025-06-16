import React from 'react'
import DomainHero from './DomainHero'
import DomainOverview from './DomainOverview'
import DomainStats from './DomainStatus'

const Domain = () => {
  return (
    <div>
      <DomainHero/>
      <DomainOverview/>
      <DomainStats/>
    </div>
  )
}

export default Domain