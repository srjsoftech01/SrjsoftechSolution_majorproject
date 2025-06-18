import React from 'react'
import GraphicDesignHero from './GraphicDesignHero';
import GraphicDesignOverview from './GraphicDesignOverview';
import GraphicDesignStats from './GraphicDesignStats';
import Footer from '../../components/footer/Footer'

const GraphicDesign = () => {
  return (
    <>
      <GraphicDesignHero/>
      <GraphicDesignOverview/>
      <GraphicDesignStats/>
              <Footer/>

    </>
  )
}

export default GraphicDesign;