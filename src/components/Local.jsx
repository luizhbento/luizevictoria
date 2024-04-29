import React from 'react';
import Imagem from '../assets/home/alto_das_palmeiras.png';
import { Link } from 'react-router-dom';

const Local = () => {
  return (
    <div className="flex justify-center max-h-[90-dvh] md:max-h-[85dvh]">
      <div className=" w-[100%] max-w-[1400px] flex-col md:gap-2 lg:gap-10 md:flex-row md:px-10 flex justify-around items-center">
        <div className=" hidden text-center md:flex flex-col justify-center items-center ">
          <h1 className="font-titleFont pb-7 max-md:hidden text-5xl lg:text-6xl xl:text-7xl">
            Local
          </h1>
          <div className="flex flex-col justify-around items-center ">
            <h2 className="font-titleFont text-3xl lg:text-4xl xl:text-5xl ">
              Alto das Palmeiras
            </h2>
            <div className="font-titleFont text-lg lg:text-xl xl:text-2xl ">
              em
            </div>
            <h2 className="font-titleFont pb-4 text-2xl lg:text-3xl xl:text-4xl ">
              Vinhedo, SP
            </h2>
            <h3 className="font-titleFont pb-2 text-md lg:text-l xl:text-xl ">
              Estrada Estadual Vinhedo-Louveira, 2693
            </h3>
            <Link
              target="_blank"
              to={'https://goo.gl/maps/qDGp3A9WN442'}
              className="font-titleFont underline text-xl lg:text-2xl xl:text-3xl"
            >
              Mapa
            </Link>
          </div>
        </div>
        <div className=" md:hidden pt-10 flex justify-center items-center">
          <h1 className="font-titleFont text-5xl">Local</h1>
        </div>
        <div className="w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] lg:h-[450px] lg:w-[450px] xl:h-[480px] xl:w-[480px] max-sm:pb-2 flex flex-col items-center justify-center">
          <img
            className="h-[95%] md:h-[90%] min-h-0 rounded-lg object-contain"
            src={Imagem}
            alt="Foto do Alto das Palmeiras - Local do Casamento."
          />
        </div>
        <div className="flex flex-col pb-4 md:hidden justify-around items-center ">
          <h1 className="font-titleFont max-md:hidden text-5xl lg:text-6xl xl:text-7xl">
            Local
          </h1>
          <div className="flex flex-col justify-around items-center ">
            <div className="font-titleFont text-lg lg:text-xl xl:text-2xl "></div>
            <h2 className="font-titleFont text-3xl lg:text-4xl xl:text-5xl ">
              Alto das Palmeiras
            </h2>
            <div className="font-titleFont text-lg lg:text-xl xl:text-2xl ">
              em
            </div>
            <h2 className="font-titleFont text-2xl lg:text-3xl xl:text-4xl ">
              Vinhedo, SP
            </h2>
            <div className="p-2"> </div>
            <h3 className="font-titleFont text-md lg:text-l xl:text-xl ">
              Estrada Estadual Vinhedo-Louveira, 2693
            </h3>
            <div className="p-2"> </div>
            <Link
              target="_blank"
              to={'https://goo.gl/maps/qDGp3A9WN442'}
              className="font-titleFont underline text-xl lg:text-2xl xl:text-3xl"
            >
              Mapa
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Local;
