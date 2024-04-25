import { useRef } from 'react';
import { HiSelector, HiUpload, HiOutlineChat } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-[100%] bg-[#7A7E5E] h-16 flex justify-around items-center text-white font-menuFont">
      <div className="flex flex-col items-center">
        <HiSelector size={20} className="inline" />
        <h2 className=" text-xs sm:text-sm md:text-base">
          Site feito pelo noivo
        </h2>
      </div>
      <button className="flex flex-col items-center" onClick={scrollToTop}>
        <HiUpload size={20} className="inline" />
        <h2 className=" text-xs sm:text-sm md:text-base">Voltar ao Topo</h2>
      </button>
      <Link
        className="flex flex-col items-center"
        to="https://wa.me/62991184403"
        target="_blank"
      >
        <HiOutlineChat size={20} className="inline" />
        <h2 className=" text-xs sm:text-sm md:text-base">Fale com a gente</h2>
      </Link>
    </div>
  );
};

export default Footer;
