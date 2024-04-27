import React from 'react';
import Presente from './Presente';
import { giftData } from '../data/GiftData';

const ListaPresentes = () => {
  return (
    <div className=" md:h-[calc(100dvh-130px-64px)] py-6 w-full flex flex-col justify-evenly items-center">
      <h1 className="font-titleFont pb-10 md:pb-14 text-center text-4xl md:text-5xl lg:text-6xl">
        Lista de Presentes
      </h1>
      {/* Container de Presentes */}
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-14">
        {giftData.map((data, index) => {
          return (
            <Presente
              key={index}
              titulo={data.titulo}
              imagem={data.imagem}
              preco={data.preco}
              descricao={data.descricao}
              link={data.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListaPresentes;
