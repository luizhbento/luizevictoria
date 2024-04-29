import React, { useState } from 'react';
import Logo from '../assets/home/logo.webp';
import { HiMenu, HiOutlineX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navBg, setNavBg] = useState(false);
  const [navMenu, setNavMenu] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
    setNavMenu(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  const handleMenu = () => {
    !navMenu ? setNavBg(true) : changeBackground();
    setNavMenu(!navMenu);
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <header
      className={
        (navBg ? 'bg-[#FAF9F6] border-[#7A7E5E] ' : 'border-transparent ') +
        'fixed w-screen top-0 z-10 px-6 md:px-10 py-1 backdrop-filter backdrop-blur-md bg-opacity-70 text-[#73754F] text-lg lg:text-xl ' +
        'select-none transition easy-in-out duration-500 border-b font-menuFont'
      }
    >
      <nav className="w-full h-[80px] md:h-[120px] flex justify-between lg:justify-evenly items-center ">
        <ul className=" h-full w-full flex justify-between md:justify-evenly items-center">
          <li className="max-md:hidden ">
            <Link
              className=" transition-all duration-1000 hover:underline"
              to="/luizevictoria/"
              onClick={scrollToTop}
            >
              Home
            </Link>
          </li>
          <li className="max-md:hidden ">
            <Link
              className="hover:underline"
              to="/luizevictoria/viagem"
              onClick={scrollToTop}
            >
              Dicas de Viagem
            </Link>
          </li>
          <div className=" h-full">
            <Link to="/luizevictoria/" onClick={scrollToTop}>
              <img
                src={Logo}
                alt="Logo do Casamento"
                className="max-w-full h-full scale-90"
              />
            </Link>
          </div>
          <li className="max-md:hidden ">
            <Link
              onClick={scrollToTop}
              className="hover:underline"
              to="/luizevictoria/presentes"
            >
              Lista de Presentes
            </Link>
          </li>
          <li className="max-md:hidden ">
            <Link
              onClick={scrollToTop}
              className="hover:underline"
              to="/luizevictoria/rsvp"
            >
              RSVP
            </Link>
          </li>
          <HiMenu
            size={45}
            className={navMenu ? 'hidden' : 'md:hidden'}
            onClick={handleMenu}
          />
          <HiOutlineX
            size={45}
            className={!navMenu ? 'hidden' : 'md:hidden'}
            onClick={handleMenu}
          />
        </ul>
      </nav>
      {/* Menu  */}
      <div className=" w-full -top-2">
        <div className={(!navMenu ? ' hidden' : ' md:hidden') + ' px-4 py-1'}>
          <div className=" flex flex-col gap-1 items-end">
            <Link
              onClick={scrollToTop}
              className="hover:underline"
              to="/luizevictoria/"
            >
              Home
            </Link>
            <Link
              onClick={scrollToTop}
              className="hover:underline"
              to="/luizevictoria/viagem"
            >
              Dicas de Viagem
            </Link>
            <Link
              onClick={scrollToTop}
              className="hover:underline"
              to="/luizevictoria/presentes"
            >
              Lista de Presentes
            </Link>
            <Link
              onClick={scrollToTop}
              className="hover:underline"
              to="/luizevictoria/rsvp"
            >
              RSVP
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
