import "./App.css"
import About from "./components/About/About.jsx";
import CompanyAbout from "./components/CompanyAbout/CompayAbout.jsx";
import Footer from "./components/footer/footer.jsx";

import HeroSection from "./components/HeroSection/HeroSection.jsx";
import Industries from "./components/Industries/Industries.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Services from "./components/Services/Services.jsx";

const App = () =>{


  return(
    <>
    <Navbar/>
    <HeroSection/>
    <About/>
    <Services/>
    <Industries/>
    <CompanyAbout/>
    <Footer/>
    </>
  )
}

export default App;