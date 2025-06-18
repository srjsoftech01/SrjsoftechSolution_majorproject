import "./App.css"

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import NavAbout from "./components/navcontainer/NavAbout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServicesNavbar from "./components/navcontainer/ServicesNavbar";
// import Industries from "./pages/industries/industries";


// import ContactUsNew from "./components/ContactUs/ContactUSNew";

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

import Business_Startup from "./allsubindustries/business_startup/Business_Startup";

import IndustriesAll from "./pages/industries/IndustriesAll";
import DigitalMarketingInd from "./allsubindustries/digitalmarketing/DigitalMarketingInd";
// import EcommerceandRetail from "./allsubindustries/ecommerceandretail/EcommerceandRetailInd";
import EcommerceandRetailInd from "./allsubindustries/ecommerceandretail/EcommerceandRetailInd";
import EducationInd from "./allsubindustries/educationandlearning/EducationInd";
import EnterpriseInd from "./allsubindustries/enterprise_service/EnterpriseInd";
import EventandTicketInd from "./allsubindustries/eventandticket/EventandTicket";
import FoodandWebvrageInd from "./allsubindustries/foodandbeverage/FoodandWebvrageInd";
import OtherInd from "./allsubindustries/other/OtherInd";
// import SocialSolutions from "./allsubindustries/socialnetworking/SocialSolutions";
import TicketandBooking from "./allsubindustries/ticketingandbooking/TicketandBooking";
import SocialNetworking from "./allsubindustries/socialnetworking/SocialNetworking";
import HealthCare from "./allsubindustries/healthcare/HealthCare";
import MediaInd from "./allsubindustries/media/MediaInd";






const App = () => {
   
  return(
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<NavAbout/>}  />
        <Route path="/services" element={<ServicesNavbar/>}/>
        <Route path="/industries" element={<IndustriesAll/>}/>

{/* <Route path="/about" element={<NewAbout />} /> */}

      


        <Route path="/services/appdev" element={<AppDev/>} />
        <Route path="/services/bulksms"   element={<BulkSMS/>} />
        <Route path="/services/contentwriting"   element={<ContentWriting/>} />
        <Route path="/services/customwebsitedesign"   element={<CustomWebsiteDesign/>} />
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
{/*         
<<<<<<< HEAD
        <Route path="/industries/appdev" element={<AppDev/>} />
======= */}
        <Route path="/industries/business_startup"  element={<Business_Startup/>}/>
        <Route path="/industries/digitalmark"  element={<DigitalMarketingInd/>}/> 
        <Route path="/industries/ecommerceandretail" element={<EcommerceandRetailInd/>}  /> 
        <Route path="/industries/educationind" element={<EducationInd/>}  />
        <Route path="/industries/enterpriseind" element={<EnterpriseInd/>}  />
        <Route path="/industries/eventandticketind" element={<EventandTicketInd/>}  />
        <Route path="/industries/foodandwebind" element={<FoodandWebvrageInd/>}  />
        <Route path="/industries/otherind" element={<OtherInd/>}  />
        <Route path="/industries/socialnetworking" element={<SocialNetworking/>}  />
        <Route path="/industries/ticketandbooking" element={<TicketandBooking/>}  />
        <Route path="/industries/healthcare" element={<HealthCare/>}/>
        <Route path="/industries/media"  element={<MediaInd/>} />
        


      </Routes>
     </Router>
  )
}

export default App;