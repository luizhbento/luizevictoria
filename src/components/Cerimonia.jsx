import React from 'react';
import Imagem from '../assets/home/cerimonia_clovis.png';

const Cerimonia = () => {
  const Dias = Math.round(
    (new Date('July 20, 2024').getTime() - new Date().getTime()) /
      (1000 * 60 * 60 * 24),
  );

  return (
    <div className="flex justify-center h-[90-dvh] md:h-[70dvh]">
      <div className="w-[100%] max-w-[1400px] flex-col md:gap-2 lg:gap-10 md:flex-row md:px-10 flex items-center justify-around">
        <div className=" md:hidden pt-4 text-center flex flex-col justify-center items-center ">
          <h1 className=" font-titleFont text-5xl">Cerimônia</h1>
        </div>
        <div className=" w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] lg:h-[450px] lg:w-[450px] xl:h-[480px] xl:w-[480px] max-sm:pb-2 flex flex-col items-center justify-center">
          <img
            className="h-full min-h-0 rounded-lg object-contain"
            src={Imagem}
            alt="Casal com seu pet."
          />
        </div>
        <div className="flex flex-col w-[40%] justify-around items-center ">
          <h1 className="font-titleFont max-md:hidden pb-5 text-5xl lg:text-6xl xl:text-7xl">
            Cerimônia
          </h1>
          <div className="flex flex-col justify-around items-center ">
            <div className="font-titleFont text-lg lg:text-xl xl:text-2xl ">
              dia
            </div>
            <h2 className="font-titleFont text-3xl lg:text-4xl xl:text-5xl ">
              20.07.2024
            </h2>
            <div className="font-titleFont text-lg lg:text-xl xl:text-2xl ">
              às
            </div>
            <h2 className="font-titleFont text-3xl  pb-4 lg:text-4xl xl:text-5xl ">
              16h30
            </h2>
          </div>
          <h3 className="font-titleFont text-xl lg:text-2xl xl:text-3xl ">
            Faltam <span className=" underline">{Dias}</span> dias!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Cerimonia;
