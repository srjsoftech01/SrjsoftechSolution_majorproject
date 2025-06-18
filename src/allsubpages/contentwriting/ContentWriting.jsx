import React from 'react'
import ContentHero from './ContentHero'
import ContentOverview from './ContentOverview'
import ContentStats from './ContentStatus'
import Footer from '../../components/footer/Footer'


const ContentWriting = () => {
  return (
    <div>
      <ContentHero />
      <ContentOverview />
      <ContentStats />
      <Footer />

    </div>
  )
}

export default ContentWriting