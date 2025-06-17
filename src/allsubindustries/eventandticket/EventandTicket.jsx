import React from 'react'
import EventHero from './EventHero'
import EventIntro from './EventIntro'
import EventSolutions from './EventSolutions'
import WhyChooseUs from '../../pages/aboutpages/WhyChooseUs'
import Footer from '../../components/footer/Footer'

const EventandTicketInd = () => {
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

export default EventandTicketInd