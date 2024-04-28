/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback } from 'react';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { FaLocationDot } from 'react-icons/fa6';
import { BsPlusCircleFill } from 'react-icons/bs';
import {
  tripData,
  hotelData,
  beautyData,
  restaurantData,
  barData,
  othersData,
} from '../data/TripData';
import { Link } from 'react-router-dom';

const Carousel = (props) => {
  const [myIndex, setMyIndex] = useState(0);

  let myData = null;

  switch (props.type) {
    case 'trip':
      myData = tripData;
      break;

    case 'hotel':
      myData = hotelData;
      break;

    case 'restaurants':
      myData = restaurantData;
      break;

    case 'bar':
      myData = barData;
      break;

    case 'others':
      myData = othersData;
      break;

    case 'beauty':
      myData = beautyData;
      break;
  }

  const handleNext = useCallback(() => {
    myIndex === myData.length - 1 ? setMyIndex(0) : setMyIndex(myIndex + 1);
  }, [myIndex, myData.length]);

  const handlePrevious = () => {
    myIndex === 0 ? setMyIndex(myData.length - 1) : setMyIndex(myIndex - 1);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 4000000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className=" flex items-center justify-center">
      {myData.map((data, index) => {
        return (
          <div
            key={index}
            className={
              (index === myIndex ? '' : 'hidden') + ' flex justify-center'
            }
          >
            <div className="p-3 max-w-[1400px] w-[100%] flex-col md:gap-2 lg:gap-10 md:flex-row md:px-10 flex items-center justify-between">
              <img
                className="max-md:max-h-[55%] md:max-w-[50%] md:max-h-[90%] rounded-lg object-contain"
                src={data.imagem}
                alt={data.titulo}
              />
              <div className="flex h-[300px] lg:h-[400px] md:w-[50%] flex-col items-center justify-between ">
                <h1 className=" py-2 text-2xl lg:text-3xl xl:text-4xl">
                  {data.titulo}
                </h1>
                <p className="text-md lg:text-lg xl:text-2xl font-bold">
                  {data.preco}
                </p>
                <p className="  text-md p-2 max-md:pt-4 lg:text-lg xl:text-2xl ">
                  {data.descricao}{' '}
                  <span className="text-md lg:text-lg xl:text-2xl font-bold">
                    {data.cupom}
                  </span>
                </p>

                <div className="flex h-[30%] w-[100%] items-center justify-between">
                  <Link
                    to={data.saibamais}
                    target="_blank"
                    className="hover:bg-[#7A7E5E] hover:text-white border bg-white border-[#7A7E5E] font-bold text-[#7A7E5E] w-[90%] h-10 duration-300 mx-4 rounded-lg flex justify-center items-center"
                  >
                    <BsPlusCircleFill className="mx-1 mb-[.15rem]" />
                    <button>Saiba Mais</button>
                  </Link>
                  <Link
                    to={data.local}
                    target="_blank"
                    className="hover:bg-[#7A7E5E] hover:text-white border bg-white border-[#7A7E5E] font-bold text-[#7A7E5E] w-[90%] h-10 duration-300 mx-4 rounded-lg flex justify-center items-center"
                  >
                    <FaLocationDot className="mx-1 mb-[.15rem]" />
                    <button>Localização</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="absolute left-0 flex justify-between p-4 sm:p-8 md:p-16 lg:p-24 2xl:p-36 w-[100%]">
        <button
          onClick={handleNext}
          className=" rounded-full transition-all hover:bg-gray-700 bg-gray-400 p-[0.2rem] bg-opacity-90"
        >
          <HiChevronLeft size={20} color="white" />
        </button>
        <button
          onClick={handlePrevious}
          className=" rounded-full transition-all hover:bg-gray-700 bg-gray-400 p-[0.2rem] bg-opacity-90"
        >
          <HiChevronRight size={20} color="white" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
