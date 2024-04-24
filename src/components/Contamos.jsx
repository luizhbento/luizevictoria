import React from 'react';

import Imagem from '../assets/contamos.png';
import { Link } from 'react-router-dom';

const Contamos = () => {
  return (
    <>
      <div className=" flex items-center justify-around">
        <div className="bg-[#7A7E5E] w-[90%] max-w-[1400px] h-64 md:h-96 text-white">
          <h1 className="font-titleFont py-5 md:py-14 xl:py-10 text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Contamos com você!
          </h1>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" flex justify-center w-[85%] h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] -top-44 md:-top-56 relative">
          <img
            className="rounded-full object-cover"
            src={Imagem}
            alt="Casal com seu pet."
          />
        </div>
        <div className="absolute w-[100%] max-w-[1400px] h-[35%] md:h-[500px] lg:h-[600px] xl:h-[700px]">
          <Link to="/luizevictoria/rsvp">
            <button className="hover:underline absolute w-32 md:w-40 lg:w-48 lg:h-20 h-16 rounded-2xl text-white bg-[#7A7E5E] left-[10%] top-[75%] md:top-[50%] font-menuFont text-center text-lg md:text-xl lg:text-2xl xl:text-3xl">
              Confirmar Presença
            </button>
          </Link>
          <Link to="/luizevictoria/presentes">
            <button className="hover:underline absolute w-32 md:w-40 lg:w-48 lg:h-20 h-16 rounded-2xl text-white bg-[#7A7E5E] right-[10%] top-[75%] md:top-[50%] font-menuFont text-center text-lg md:text-xl lg:text-2xl xl:text-3xl">
              Presentes
            </button>
          </Link>
          <Link to="/luizevictoria/viagem">
            <button className="hover:underline absolute w-32 md:w-40 lg:w-48 lg:h-20 h-16  rounded-2xl text-white bg-[#7A7E5E] left-[50%] top-[95%] md:top-[70%] xl:top-[75%] -translate-x-[50%] font-menuFont text-center text-lg md:text-xl lg:text-2xl xl:text-3xl">
              Dicas de Viagem
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Contamos;
