import React from 'react';
import Presente from './Presente';
import { giftData } from '../data/GiftData';
import { toast, ToastContainer } from 'react-toastify';

const ListaPresentes = () => {
  return (
    <div className=" py-6 w-full flex flex-col justify-evenly items-center">
      <div className="px-10 md:px-18 pb-4 max-w-7xl">
        <h1 className="font-titleFont pb-3 text-center text-4xl md:text-5xl lg:text-6xl">
          Lista de Presentes
        </h1>
        <div className="flex justify-center gap-6 items-center">
          <div>
            <p className="font-titleFont pb-1 text-center text-md md:text-lg lg:text-xl ">
              Sua presença significa muito para nós e já é um grande presente.
            </p>
            <p className="font-titleFont pb-2 text-center text-md md:text-lg lg:text-xl ">
              Porém, se quiser também contribuir com nossa lista de casamento,
              seguem algumas sugestões e, ao fim, uma opção com valor
              personalizado.
            </p>
            <p className="font-titleFont pb-2 text-center text-md md:text-lg lg:text-xl">
              Ou, caso prefira levar um presente físico, chame a gente no
              Whatsapp para combinarmos!
            </p>
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
        </div>
      </div>
      {/* Container de Presentes */}
      <div className="w-[95%] grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-14">
        {giftData.map((data, index) => {
          return (
            <Presente
              key={index}
              titulo={data.titulo}
              imagem={data.imagem}
              preco={data.preco}
              descricao={data.descricao}
              linkCartao={data.linkCartao}
              linkPix={data.linkCPix}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListaPresentes;
