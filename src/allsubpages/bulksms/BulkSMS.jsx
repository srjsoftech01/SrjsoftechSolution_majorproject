import React from 'react'
import BulkHero from './bulksection/BulkHero'
import Overview from './bulksection/Overview'
import StatusSection from './bulksection/StatusSection'

const BulkSMS = () => {
  return (
    <div>
      <BulkHero/>
      <Overview/>
      <StatusSection/>
    </div>
  )
}

export default BulkSMS