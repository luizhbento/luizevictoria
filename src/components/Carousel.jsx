import { useState, useEffect, useCallback } from 'react';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { carouselData } from '../data/CarouselData';

const Carousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const handleNext = useCallback(() => {
    imgIndex === carouselData.length - 1
      ? setImgIndex(0)
      : setImgIndex(imgIndex + 1);
  }, [imgIndex]);

  const handlePrevious = () => {
    imgIndex === 0
      ? setImgIndex(carouselData.length - 1)
      : setImgIndex(imgIndex - 1);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className="relative w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] lg:h-[450px] lg:w-[450px] xl:h-[480px] xl:w-[480px] max-sm:pb-2 flex flex-col items-center justify-center">
      {carouselData.map((data, index) => {
        return (
          <img
            className={
              (index === imgIndex ? '' : 'hidden') +
              ' h-[95%] md:h-[90%] rounded-lg object-cover'
            }
            src={data.img}
            alt={data.subtitle}
            key={index}
          />
        );
      })}

      <div className="absolute flex justify-between p-2 w-[95%] md:w-[90%]">
        <button
          onClick={handleNext}
          className=" rounded-full transition-all hover:bg-gray-700 bg-gray-400 p-[0.1rem] bg-opacity-90"
        >
          <HiChevronLeft size={20} color="white" />
        </button>
        <button
          onClick={handlePrevious}
          className=" rounded-full transition-all hover:bg-gray-700 bg-gray-400 p-[0.1rem] bg-opacity-90"
        >
          <HiChevronRight size={20} color="white" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
