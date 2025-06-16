import React from 'react'
import WhatsAppAdHero from './WhatsAppAdHero'
import WhatsAppAdOverview from './WhatsAppAdOverview'
import WhatsAppAdStats from './WhatsAppAdStats'
import Footer from '../../components/footer/Footer'

const Whatsapp = () => {
  return (
    <div>
      <WhatsAppAdHero/>
      <WhatsAppAdOverview/>
      <WhatsAppAdStats/>
      <Footer/>
    </div>
  )
}

export default Whatsapp