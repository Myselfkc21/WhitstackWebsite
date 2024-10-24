import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import HeroSectioon from "./Components/HeroSection/HeroSectioon";
import MainSection from "./Components/MainSection/MainSection";
import ServicesSection from "./Components/ServicesSection/ServicesSection";
import PartnersAndClients from "./Components/PartnersAndClients/PatnersAndClients";
import "./Home.css";
import FooterSection from "./Components/Footers/FooterSection";
import ClientSection from "./Components/ClientsSection/ClientSection";
import MainSection2 from "./Components/MainSection2/MainSection2";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Whitstack home page" />
        <link rel="canonical" href="/" />
      </Helmet>
      <NavBar></NavBar>

      <div className="Homes">
        <HeroSectioon></HeroSectioon>
        <MainSection></MainSection>
        {/* <MainSection2></MainSection2> */}
        <ServicesSection></ServicesSection>
        <PartnersAndClients></PartnersAndClients>
        <ClientSection></ClientSection>
        <FooterSection></FooterSection>
      </div>
    </>
  );
};

export default Home;
