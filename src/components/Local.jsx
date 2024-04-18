import React from 'react';
import Imagem from '../assets/alto_das_palmeiras.png';
import { Link } from 'react-router-dom';

const Local = () => {
  return (
    <div className="flex justify-center h-[90-dvh] md:h-[80dvh]">
      <div className=" w-[100%] p-7 max-w-[1400px] flex-col gap-10 md:flex-row flex justify-around">
        <div className=" h-[100%] hidden md:flex flex-col justify-around items-center ">
          <div className="max-md:hidden"> </div>
          <div className="max-md:hidden"> </div>
          <div className="max-md:hidden"> </div>
          <div className="max-md:hidden"> </div>
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
          <div> </div>
          <div> </div>
          <div></div>
        </div>
        <div>
          <div className=" md:hidden flex justify-center items-center">
            <h1 className="font-titleFont text-5xl">Local</h1>
          </div>
          <div className=" h-[100%] flex flex-col items-center justify-center">
            <img
              className=" aspect-square max-h-[80%] rounded-lg object-cover"
              src={Imagem}
              alt="Casal com seu pet."
            />
          </div>
        </div>
        <div className="flex flex-col md:hidden justify-around items-center ">
          <div className="max-md:hidden"> </div>
          <div className="max-md:hidden"> </div>
          <div className="max-md:hidden"> </div>
          <div className="max-md:hidden"> </div>
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
          <div> </div>
          <div> </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Local;
