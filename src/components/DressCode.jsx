import React from 'react';

import Imagem from '../assets/cerimonia_clovis.png';

const DressCode = () => {
  return (
    <div className="flex justify-center max-h-[90-dvh] md:max-h-[85dvh]">
      <div className="p-5 max-w-[1400px] w-[100%] flex-col md:gap-2 lg:gap-10 md:flex-row md:px-10 flex items-center justify-around">
        <h1 className=" md:hidden font-titleFont text-5xl">Dress Code</h1>
        <div className=" h-[100%] flex flex-col items-center justify-center">
          <img
            className="max-h-[95%] md:max-h-[90%] rounded-lg object-cover"
            src={Imagem}
            alt="Casal com seu pet."
          />
        </div>

        <div className="flex flex-col justify-around items-center max-w-[100%] text-center lg:max-w-[40%] md:max-w-[30%]  ">
          <h1 className="font-titleFont max-md:hidden pb-5 text-5xl lg:text-6xl xl:text-7xl">
            Dress Code
          </h1>
          <div className="flex flex-col justify-around items-center ">
            <h2 className="font-titleFont pb-4 text-3xl lg:text-4xl xl:text-5xl ">
              Social Completo
            </h2>
            <div className="font-titleFont pb-4 text-center text-lg lg:text-xl xl:text-2xl ">
              Sem muitas restrições, só não pode ir de branco né, mulheres?! rs
            </div>
            <div className="font-titleFont text-center text-lg lg:text-xl xl:text-2xl ">
              Qualquer dúvida, não hesite em nos procurar!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressCode;
