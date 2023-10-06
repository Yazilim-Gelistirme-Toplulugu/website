import { Button, Container, Text, useNCoreTheme } from 'ncore-web';
import React, { useEffect } from 'react'
import useStyles from './style';
import MainSection from './views/main';
import Navbar from '../../components/navbar';
import AboutUsSection from './views/aboutUs';
import TeamsSection from './views/teams';
import KeywordsSection from './views/keywords';
import SponsorsSection from './views/sponsors';
import GallerySection from './views/gallery';
import Footer from '../../components/footer';

const Home = () => {

  const classes = useStyles();

  const {
    spaces,
    colors
  } = useNCoreTheme();

  useEffect(() => {
    console.log(window.location.search)
  }, [window.location.search])

  return <div
    style={{
      display: "flex",
      flexDirection: "column"
    }}
  >
    <Navbar/>
    <MainSection />
    <AboutUsSection />
    <TeamsSection /> 
    <KeywordsSection />
    <SponsorsSection />
    <GallerySection />
    <Footer />
  </div>
}

export default Home;
