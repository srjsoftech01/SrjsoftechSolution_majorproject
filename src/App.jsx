import "./App.css"

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import NavAbout from "./components/navcontainer/NavAbout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServicesNavbar from "./components/navcontainer/ServicesNavbar";
import Industries from "./pages/industries/industries";
import AppDev from "./pages/contents/content_services/appsection.jsx/AppDev";
import ContactUs from "./components/ContactUs/ContactUs";
import ContactUsNew from "./components/ContactUs/ContactUSNew";





const App = () => {
   
  return(
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<NavAbout/>}  />
        <Route path="/services" element={<ServicesNavbar/>}/>
        <Route path="/industries" element={<Industries/>}/>
        <Route path="/services/:appdev" element={<AppDev/>} />
        <Route path="/contact_us" element={<ContactUsNew/>} />
      </Routes>
     </Router>
  )
}

export default App;