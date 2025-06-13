// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Industries from "../components/Industries/Industries";
import CompanyAbout from "../components/CompanyAbout/CompayAbout";
import InputForm from "../components/ContactForm/InputForm";
import WhatsAppChatButton from "../components/Whatsapp/WhatsAppChatButton";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Services />
      <Industries />
      <CompanyAbout />
      <InputForm />
      <WhatsAppChatButton />
      <Footer />
    </>
  );
};

export default Home;
