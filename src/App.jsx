import "./App.css"
import About from "./components/About/About.jsx";
import CompanyAbout from "./components/CompanyAbout/CompayAbout.jsx";
import Footer from "./components/footer/Footer.jsx";

import HeroSection from "./components/HeroSection/HeroSection.jsx";
import Industries from "./components/Industries/Industries.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Services from "./components/Services/Services.jsx";
import WhatsAppChatButton from "./components/Whatsapp/WhatsAppChatButton.jsx";


const App = () =>{


  return(
    <>
    <Navbar/>
    <HeroSection/>
    <About/>
    <Services/>
    <Industries/>
    <CompanyAbout/>
    <WhatsAppChatButton/>
    <Footer/>
    </>
  )
}

export default App;