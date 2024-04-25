import React from 'react';

const Background = () => {
  return (
    <>
      <div className=" overflow-hidden absolute -z-10 flex justify-center h-[calc(100dvh-64px)] w-full ">
        <div className=" absolute top-[60px] md:top-[100px] h-[80%] w-[80%] -z-10 bg-no-repeat bg-center bg-contain bg-[url('/src/assets/logo_full.png')]"></div>
        <div className=" absolute h-[100%] w-full -z-10 bg-white bg-opacity-85"></div>
      </div>
      <div className="w-full overflow-hidden h-[80px] md:h-[120px]"></div>
    </>
  );
};

export default Background;
