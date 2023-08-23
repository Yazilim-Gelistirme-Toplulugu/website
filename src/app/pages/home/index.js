import { Button, Container, Text, useNCoreTheme } from 'ncore-web';
import React from 'react'
import useStyles from './style';
import MainSection from './views/main';
import Navbar from '../../components/navbar';
import AboutUsSection from './views/aboutUs';
import TeamsSection from './views/teams';

const Home = () => {

  const classes = useStyles();

  const {
    spaces,
    colors
  } = useNCoreTheme();

  return <div>
    <Navbar/>
    <MainSection />
    <AboutUsSection />
    <TeamsSection />
  </div>
}

export default Home;
