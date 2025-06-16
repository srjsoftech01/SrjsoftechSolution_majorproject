import React from 'react'
import WordPressHero from './WordPressHero'
import WordPressOverview from './WordPressOverview'
import WordPressStats from './WordPressStats'
import Footer from '../../components/footer/Footer'

const WordPress = () => {
  return (
    <div>
        <WordPressHero/>
        <WordPressOverview/>
        <WordPressStats/>
        <Footer/>
    </div>
  )
}

export default WordPress