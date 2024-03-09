import React from 'react'
import KeywordsSection from './views/keywords';
import SponsorsSection from './views/sponsors';
import AboutUsSection from './views/aboutUs';
import GallerySection from './views/gallery';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import TeamsSection from './views/teams';
import MainSection from './views/main';

const Home = () => {

  return <div
    style={{
      display: "flex",
      flexDirection: "column",
      overflowX: "hidden",
    }}
  >
    <Navbar/>
    <MainSection />
    <AboutUsSection />
    <TeamsSection /> 
    <KeywordsSection />
    <SponsorsSection />
    <Footer />
  </div>
}

export default Home;
