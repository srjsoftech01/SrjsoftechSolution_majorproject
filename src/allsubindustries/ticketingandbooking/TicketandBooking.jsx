import React from 'react'
import EventHero from './EventHero'
import EventSolutions from './EventSolutions'
import EventIntro from './EventIntro'
import WhyChooseUs from '../../pages/aboutpages/WhyChooseUs'
import Footer from '../../components/footer/Footer'

const TicketandBooking = () => {
  return (
    <div>
        <EventHero/>
        <EventIntro/>
        <EventSolutions/>
        <WhyChooseUs/>
        <Footer/>
    </div>
  )
}

export default TicketandBooking