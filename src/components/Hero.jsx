import React from 'react';
import Imagem from '../assets/home.png';

const Hero = () => {
  return (
    <div id="top" className="h-screen w-full">
      <img
        src={Imagem}
        alt="Casal caminhando em um bosque."
        className="object-cover h-screen w-full"
      />
    </div>
  );
};

export default Hero;
