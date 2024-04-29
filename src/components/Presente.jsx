/* eslint-disable react/prop-types */
import React from 'react';

import { Link } from 'react-router-dom';
import { FaPix, FaCreditCard } from 'react-icons/fa6';

const Presente = (props) => {
  return (
    <div className="flex justify-around gap-4">
      <div className="flex flex-col justify-center items-center">
        <img
          src={props.imagem}
          alt={props.titulo}
          className="w-32 h-32
         sm:w-48 sm:h-48 md:w-32 md:h-32 lg:h-48 lg:w-48 rounded-lg hover:scale-110 hover:-rotate-2 duration-300"
        />
      </div>
      <div className="flex flex-col w-[60%] items-center justify-between">
        <p className="font-bold text-center">{props.titulo}</p>
        <p className="text-sm">{props.descricao}</p>
        <p className="text-sm w-full py-1 text-[#7A7E5E] font-bold">
          {props.preco}
        </p>
        <div className="flex text-sm w-[100%] gap-2">
          <Link
            to={props.linkPix}
            target="_blank"
            className="hover:bg-[#7A7E5E] hover:text-white border bg-white border-[#7A7E5E] font-bold text-[#7A7E5E] w-[90%] h-8 duration-300 rounded-lg flex justify-center items-center"
          >
            <button>
              <FaPix className="mx-[.15rem] mb-[.15rem] inline" />
              Pix
            </button>
          </Link>
          <Link
            to={props.linkCartao}
            target="_blank"
            className="hover:bg-[#7A7E5E] hover:text-white border bg-white border-[#7A7E5E] font-bold text-[#7A7E5E] w-[90%] h-8 duration-300 rounded-lg flex justify-center items-center"
          >
            <button>
              <FaCreditCard className="mx-[.15rem] mb-[.15rem] inline" />
              Cartão
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Presente;
