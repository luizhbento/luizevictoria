import React from 'react';
import Imagem from '../assets/home/obrigado.webp';

const Obrigado = () => {
  return (
    <div className="md:h-[calc(100dvh-130px-64px)] py-12 w-full flex flex-col justify-center items-center">
      <div className="w-[80%] bg-[#7A7E5E] rounded-2xl text-white max-w-[1400px] flex-col md:gap-2 lg:gap-10 md:flex-row md:px-4 flex items-center justify-around">
        <div className=" md:hidden pt-4 text-center flex flex-col justify-center items-center ">
          <h1 className=" font-titleFont text-center text-5xl">
            Muito Obrigado!!
          </h1>
        </div>
        <div className=" w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] lg:h-[450px] lg:w-[450px] xl:h-[480px] xl:w-[480px] max-sm:pb-2 flex flex-col items-center justify-center">
          <img
            className="h-[95%] md:h-[90%] min-h-0 rounded-lg object-contain"
            src={Imagem}
            alt="Casal com seu pet."
          />
        </div>
        <div className="flex flex-col w-[40%] justify-around items-center ">
          <h1 className="font-titleFont max-md:hidden text-center pb-5 text-5xl lg:text-6xl xl:text-7xl">
            Muito Obrigado!!
          </h1>
          <div className="flex flex-col justify-around items-center ">
            <p className="font-titleFont text-2xl text-center pb-2 lg:text-2xl xl:text-3xl ">
              Se prepara que a festa vai ser boa... Nos vemos lá!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Obrigado;
