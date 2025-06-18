import React from 'react'
import PPCHero from './PPCHero'
import PPCStats from './PPCStatus'
import Footer from '../../components/footer/Footer'


const Ppc = () => {
  return (
    <div>
      <PPCHero/>
      <PPCOverview/>
      <PPCStats/>
              <Footer/>

    </div>
  )
}

export default Ppc