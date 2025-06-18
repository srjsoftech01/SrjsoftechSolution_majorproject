import React from 'react'
import BulkHero from './bulksection/BulkHero'
import Overview from './bulksection/Overview'
import StatusSection from './bulksection/StatusSection'
import Footer from '../../components/footer/Footer'


const BulkSMS = () => {
  return (
    <div>
      <BulkHero />
      <Overview />
      <StatusSection />
      <Footer />

    </div>
  )
}

export default BulkSMS