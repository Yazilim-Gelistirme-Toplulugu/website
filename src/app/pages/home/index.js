import { Button, Container, Text, useNCoreTheme } from 'ncore-web';
import React from 'react'
import useStyles from './style';
import MainSection from './views/main';
import Navbar from '../../components/navbar';
import AboutUsSection from './views/aboutUs';
import TeamsSection from './views/teams';
import KeywordsSection from './views/keywords';
import SponsorsSection from './views/sponsors';
import GallerySection from './views/gallery';

const Home = () => {

  const classes = useStyles();

  const {
    spaces,
    colors
  } = useNCoreTheme();

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
    {/* <GallerySection /> */}
  </div>
}

export default Home;
