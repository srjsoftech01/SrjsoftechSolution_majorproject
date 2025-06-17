import "./App.css"

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import NavAbout from "./components/navcontainer/NavAbout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServicesNavbar from "./components/navcontainer/ServicesNavbar";
import Industries from "./pages/industries/industries";
<<<<<<< HEAD
import AppDev from "./pages/contents/content_services/appsection.jsx/AppDev";
import ContactUs from "./components/ContactUs/ContactUs";
import ContactUsNew from "./components/ContactUs/ContactUSNew";
=======
import AppDev from "./allsubpages/appdevelopment/AppDev";
import CustomWebsiteDesign from "./allsubpages/customwebsitedesign/CustomWebsiteDesign";
import DigitalMarketing from "./allsubpages/digialmarketing/DigitalMarketing";
import Domain from "./allsubpages/domainregistration/Domain";
import EcommerceDevelopment from "./allsubpages/ecommercedevelopment/EcommerceDevelopment";
import GraphicDesign from "./allsubpages/graphicdesign/GraphicDesign";
import Ppc from "./allsubpages/ppc/Ppc";
import Seo from "./allsubpages/seopt/Seo";
import WebDevelopment from "./allsubpages/webdevelopment/WebDevelopment";
import WebHosting from "./allsubpages/WebHosting/WebHosting";
import WebsiteDesign from "./allsubpages/websitedesign/WebsiteDesign";
import Whatsapp from "./allsubpages/whatsapp/Whatsapp";
import WordPress from "./allsubpages/wordpressdevelopment/WordPress";
import BulkSMS from "./allsubpages/bulksms/BulkSMS";
import ContentWriting from "./allsubpages/contentwriting/ContentWriting";
import LogoDesign from "./allsubpages/logodesign/LogoDesign";
>>>>>>> 8d63451d763278b765f23db6a0e1f5a7585fa60d





const App = () => {
   
  return(
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<NavAbout/>}  />
        <Route path="/services" element={<ServicesNavbar/>}/>
        <Route path="/industries" element={<Industries/>}/>
<<<<<<< HEAD
        <Route path="/services/:appdev" element={<AppDev/>} />
        <Route path="/contact_us" element={<ContactUsNew/>} />
=======
        <Route path="/services/appdev" element={<AppDev/>} />
        <Route path="/services/bulksms"   element={<BulkSMS/>} />
        <Route path="/services/contentwriting"   element={<ContentWriting/>} />
        <Route path="//services/customwebsitedesign"   element={<CustomWebsiteDesign/>} />
        <Route path="/services/DigitalMarketing"   element={<DigitalMarketing/>} />
        <Route path="/services/Domain"   element={<Domain/>} />
        <Route path="/services/Ecommercedevelopment"   element={<EcommerceDevelopment/>} />
        <Route path="/services/graphicgesign"   element={<GraphicDesign/>} />
        <Route path="/services/logodesign"   element={<LogoDesign/>} />
        <Route path="/services/ppc"   element={<Ppc/>} />
        <Route path="/services/seo"   element={<Seo/>} />
        <Route path="/services/webdevelopment" element={<WebDevelopment/>} />
        <Route path="/services/webhosting" element={<WebHosting/>} />
        <Route path="/services/websitedesign" element={<WebsiteDesign/>} />
        <Route path="/services/whatsapp" element={<Whatsapp/>} />
        <Route path="/services/wordpress" element={<WordPress/>} />
        <Route path="/industries/appdev" element={<AppDev/>} />
>>>>>>> 8d63451d763278b765f23db6a0e1f5a7585fa60d
      </Routes>
     </Router>
  )
}

export default App;