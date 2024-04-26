import React from 'react';

import Imagem from '../assets/contamos.png';
import { Link } from 'react-router-dom';

const Contamos = () => {
  return (
    <>
      <div className=" flex flex-col items-center justify-center">
        <div className="bg-[#7A7E5E] w-[90%] max-w-[1400px] h-64 md:h-96 text-white">
          <h1 className="font-titleFont py-5 md:py-14 xl:py-10 text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Contamos com você!
          </h1>
        </div>
        <div className="h-52 sm:h-60 md:h-68 lg:h-80 xl:h-96"></div>
      </div>
      <div className="relative">
        <div className="absolute left-[50%] max-w-[90%] -translate-x-[50%] aspect-square -top-[410px] sm:-top-[450px] md:-top-[500px] lg:-top-[575px] xl:-top-[660px] h-[450px] md:h-[500px] lg:h-[600px] xl:h-[700px] flex flex-col items-center justify-center">
          <img
            className="max-h-[95%] md:max-h-[90%] rounded-full object-cover"
            src={Imagem}
            alt="Casal com seu pet."
          />
        </div>
        <Link
          className="w-[100%] p-6 items-center flex justify-center"
          to="/luizevictoria/rsvp"
        >
          <button className="hover:underline w-32 md:w-40 lg:w-48 lg:h-20 h-16 rounded-2xl text-white bg-[#7A7E5E] font-menuFont text-center text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Confirmar Presença
          </button>
        </Link>
      </div>
    </>
  );
};

export default Contamos;
