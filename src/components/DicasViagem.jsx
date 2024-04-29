import React from 'react';
import CarouselViagem from '../components/CarouselViagem';

const Viagem = () => {
  return (
    <div className=" pt-6 w-full flex flex-col items-center justify-center">
      <div className="px-10 pb-4 max-w-7xl">
        <h1 className="font-titleFont pb-6 text-center text-4xl md:text-5xl lg:text-6xl">
          Dicas de Viagem
        </h1>
        <div className="flex justify-center items-center">
          <div>
            <p className="font-titleFont pb-1 text-center text-md md:text-lg lg:text-xl ">
              Reunimos aqui algumas dicas do que fazer, onde ficar, onde se
              arrumar. Se ficar alguma dúvida, ou precisar de alguma outra
              informação que não está aqui, pode chamar a gente!
            </p>
          </div>
        </div>
      </div>
      {/* Hoteis */}
      <div className=" px-4 md:px-10 pb-4 max-w-7xl">
        <h1 className="font-titleFont text-center text-3xl md:text-4xl lg:text-5xl">
          Hoteis
        </h1>
        <div className="flex justify-center items-center">
          <div className="max-w-[90%]">
            <CarouselViagem type="hotel" />
          </div>
        </div>
      </div>
      {/* Fim Hoteis */}
      {/* Salões */}
      <div className=" px-4 md:px-10 pt-2 pb-4 max-w-7xl">
        <h1 className="font-titleFont text-center text-3xl md:text-4xl lg:text-5xl">
          Salões de Beleza
        </h1>
        <div className="flex justify-center items-center">
          <div className="max-w-[90%]">
            <CarouselViagem type="beauty" />
          </div>
        </div>
      </div>
      {/* Fim Salões */}
      {/* Passeios */}
      <div className=" px-4 md:px-10 pt-2 pb-4 max-w-7xl">
        <h1 className="font-titleFont text-center text-3xl md:text-4xl lg:text-5xl">
          Passeios
        </h1>
        <div className="flex justify-center items-center">
          <div className="max-w-[90%]">
            <CarouselViagem type="trip" />
          </div>
        </div>
      </div>
      {/* Fim Passeios */}
      {/* Restaurantes */}
      <div className=" px-4 md:px-10 pt-2 pb-4 max-w-7xl">
        <h1 className="font-titleFont text-center text-3xl md:text-4xl lg:text-5xl">
          Restaurantes
        </h1>
        <div className="flex justify-center items-center">
          <div className="max-w-[90%]">
            <CarouselViagem type="restaurants" />
          </div>
        </div>
      </div>
      {/* Fim Restaurantes */}
      {/* Bares */}
      <div className=" px-4 md:px-10 pt-2 pb-4 max-w-7xl">
        <h1 className="font-titleFont text-center text-3xl md:text-4xl lg:text-5xl">
          Bares
        </h1>
        <div className="flex justify-center items-center">
          <div className="max-w-[90%]">
            <CarouselViagem type="bar" />
          </div>
        </div>
      </div>
      {/* Fim Bares */}
      {/* Outros */}
      <div className=" px-4 md:px-10 pt-2 pb-4 max-w-7xl">
        <h1 className="font-titleFont text-center text-3xl md:text-4xl lg:text-5xl">
          Outros
        </h1>
        <div className="flex justify-center items-center">
          <div className="max-w-[90%]">
            <CarouselViagem type="others" />
          </div>
        </div>
      </div>
      {/* Fim Outros */}
    </div>
  );
};

export default Viagem;
