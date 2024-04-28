/* eslint-disable react/prop-types */
import React from 'react';

import { Link } from 'react-router-dom';

const Presente = (props) => {
  return (
    <div className="flex gap-4">
      <img
        src={props.imagem}
        alt={props.titulo}
        className="w-32 h-32
         sm:w-48 sm:h-48 rounded-lg hover:scale-110 hover:-rotate-2 duration-300"
      />
      <div className="flex flex-col items-center justify-between">
        <p className="font-bold text-center">{props.titulo}</p>
        <p className="text-sm">{props.descricao}</p>
        <Link
          to={props.link}
          target="_blank"
          className="hover:bg-[#7A7E5E] hover:text-white border border-[#7A7E5E] font-bold text-[#7A7E5E] w-[90%] h-10 duration-300 px-5 rounded-lg flex justify-center items-center"
        >
          <button>{props.preco}</button>
        </Link>
      </div>
    </div>
  );
};

export default Presente;
