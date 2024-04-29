import React from 'react';

const Itinerario = () => {
  return (
    <div className="bg-[#7A7E5E] md:flex-row md:px-10 flex items-center justify-around">
      <div className=" p-5 max-w-[1400px] w-[100%] flex-col md:gap-6 lg:gap-10 md:flex-row md:px-10 flex items-center justify-around">
        <h1 className=" font-titleFont text-white text-5xl lg:text-6xl xl:text-7xl">
          Itinerário
        </h1>
        <ol className="max-w-[800px] border-s border-white ">
          <li>
            <div className="flex-start flex items-center pt-3">
              <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-white "></div>
              <p className="text-md text-neutral-300 ">16h30</p>
            </div>
            <div className="mb-2 ms-4 mt-1">
              <h4 className="mb-1.5 text-white text-xl font-semibold">
                Recepção
              </h4>
              <p className="mb-3 text-neutral-300 ">
                Os convidados serão recepcionados e direcionados para o local da
                celebração, com direito a welcome drinks. Planejamos o casamento
                para ocorrer durante o pôr do sol, por isso,
                <span className="font-bold"> sem atrasos, hein?!</span>
              </p>
            </div>
          </li>

          <li>
            <div className="flex-start flex items-center pt-3">
              <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-white "></div>
              <p className="text-md text-neutral-300 ">17h</p>
            </div>
            <div className="mb-2 ms-4 mt-1">
              <h4 className="mb-1.5 text-white text-xl font-semibold">
                Cerimônia
              </h4>
              <p className="mb-3 text-neutral-300 ">
                Daremos início à cerimônia do casamento. Teremos uma celebração
                católica, presidida pelo Padre Marcel, mas em que todas as
                religiões e crenças serão muito bem vindas!
              </p>
            </div>
          </li>

          <li>
            <div className="flex-start flex items-center pt-3">
              <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-white "></div>
              <p className="text-md text-neutral-300 ">18h</p>
            </div>
            <div className="mb-2 ms-4 mt-1">
              <h4 className="mb-1.5 text-white text-xl font-semibold">
                Entrada no Salão
              </h4>
              <p className="mb-3 text-neutral-300 ">
                Os convidados serão alocados em suas mesas, daremos início aos
                serviços de Buffet e de bebidas. Hora de forrar o estômago pra
                aguentar o que vem na sequência rs.
              </p>
            </div>
          </li>

          <li>
            <div className="flex-start flex items-center pt-3">
              <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-white "></div>
              <p className="text-md text-neutral-300 ">19h</p>
            </div>
            <div className="mb-2 ms-4 mt-1">
              <h4 className="mb-1.5 text-white text-xl font-semibold">
                Festa | Pagode
              </h4>
              <p className="mb-3 text-neutral-300 ">
                Início do serviço de Drinks e abertura da boate com nossa
                primeira atração: pra felicidade dos paulistas, o grupo
                Sambafter traz o que temos de melhor do pagode e samba.
              </p>
            </div>
          </li>

          <li>
            <div className="flex-start flex items-center pt-3">
              <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-white "></div>
              <p className="text-md text-neutral-300 ">21h30</p>
            </div>
            <div className="mb-2 ms-4 mt-1">
              <h4 className="mb-1.5 text-white text-xl font-semibold">
                Festa | Sertanejo
              </h4>
              <p className="mb-3 text-neutral-300 ">
                Agora, pro agrado da turma do noivo, Gabriel Gadelha chega com
                um repertório variado: universitário, arrocha e, claro, modão.
                Canto, bebo e choro.
              </p>
            </div>
          </li>

          <li>
            <div className="flex-start flex items-center pt-3">
              <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-white "></div>
              <p className="text-md text-neutral-300 ">23h30</p>
            </div>
            <div className="mb-2 ms-4 mt-1">
              <h4 className="mb-1.5 text-white text-xl font-semibold">
                Festa | DJ
              </h4>
              <p className="mb-3 text-neutral-300 ">
                Achou que já ia acabar né?! Pra fechar a noite (será?), teremos
                um DJ tocando aquele repertório que não pode faltar num
                casamento.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Itinerario;
