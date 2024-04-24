import React from 'react';
import Hero from '../components/Hero';
import Cerimonia from '../components/Cerimonia';
import Local from '../components/Local';
import Itinerario from '../components/Itinerario';
import DressCode from '../components/DressCode';
import Contamos from '../components/Contamos';

const Home = () => {
  return (
    <>
      <Hero />
      <Cerimonia />
      <Local />
      <Itinerario />
      <DressCode />
      <Contamos />
    </>
  );
};

export default Home;
