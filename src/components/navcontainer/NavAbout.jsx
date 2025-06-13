import AboutDetail from "../../pages/aboutpages/AboutDetail";
import AboutHero from "../../pages/aboutpages/AboutHero";
import CompanyStatus from "../../pages/aboutpages/CompanyStatus";
import TeamSection from "../../pages/aboutpages/TeamSection";
import WhyChooseUs from "../../pages/aboutpages/WhyChooseUs";
import Footer from "../footer/Footer";



const NavAbout = () =>{

    return(
        <>
         <AboutHero/>
         <AboutDetail/>
                 <CompanyStatus/>
         {/* <TeamSection/> */}
         <WhyChooseUs/>
         <Footer/>

         </>
    )
}

export default NavAbout;