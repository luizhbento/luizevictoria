import React from 'react';
import Imagem from '../assets/home/cerimonia_clovis.png';

const Cerimonia = () => {
  const Dias = Math.round(
    (new Date('July 20, 2024').getTime() - new Date().getTime()) /
      (1000 * 60 * 60 * 24),
  );

  return (
    <div className="flex justify-center max-h-[90-dvh] md:max-h-[85dvh]">
      <div className="w-[100%] max-w-[1400px] p-5 flex-col md:gap-2 lg:gap-10 md:flex-row md:px-10 flex items-center justify-around">
        {/* Div do H1 */}
        <div className=" md:hidden flex justify-center items-center">
          <h1 className="font-titleFont text-5xl">Cerimônia</h1>
        </div>
        {/* Div da Imagem */}
        <div className="sm:h-[95%] sm:max-h-[90-dvh] md:max-h-[85dvh] flex flex-col items-center justify-center">
          <img
            className="h-[95%] md:h-[90%] rounded-lg object-contain"
            src={Imagem}
            alt="Casal com seu pet."
          />
        </div>
        {/* Div dos Detalhes */}
        <div className=" hidden text-center md:flex md:flex-col md:justify-center md:items-center ">
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
        <div className="flex flex-col md:hidden justify-around items-center ">
          <h1 className="font-titleFont max-md:hidden text-5xl lg:text-6xl xl:text-7xl">
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
