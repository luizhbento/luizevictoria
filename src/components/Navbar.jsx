import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { HiMenu, HiOutlineX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navBg, setNavBg] = useState(false);
  const [navMenu, setNavMenu] = useState(false);

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
        'fixed w-screen top-0 z-10 px-6 md:px-10 py-1 backdrop-filter backdrop-blur-md bg-opacity-70 text-[#73754F] text-xl ' +
        'select-none ease-in-out duration-500 border-b font-menuFont'
      }
    >
      <nav className="w-full h-[80px] md:h-[120px] flex justify-between lg:justify-evenly items-center ">
        <ul className="max-md:hidden w-full flex justify-evenly">
          <li>
            <Link to="/luizevictoria/">Home</Link>
          </li>
          <li>
            <Link to="/luizevictoria/viagem">Dicas de Viagem</Link>
          </li>
        </ul>
        <div className="h-full min-w-40 flex justify-center">
          <Link to="/luizevictoria/" className="w-full">
            <img
              src={Logo}
              alt="Logo do Casamento"
              className="h-full scale-90"
            />
          </Link>
        </div>
        <ul className="max-md:hidden w-full flex justify-evenly">
          <li>
            <Link to="/luizevictoria/presentes">Lista de Presentes</Link>
          </li>
          <li>
            <Link to="/luizevictoria/rsvp">RSVP</Link>
          </li>
        </ul>
        <HiMenu
          size={35}
          className={navMenu ? 'hidden' : 'md:hidden'}
          onClick={handleMenu}
        />
        <HiOutlineX
          size={35}
          className={!navMenu ? 'hidden' : 'md:hidden'}
          onClick={handleMenu}
        />
      </nav>
      {/* Menu  */}
      <div className="w-full -top-2">
        <div className={(!navMenu ? 'hidden' : 'md:hidden') + ' px-4 py-1'}>
          <div className="flex flex-col gap-1 items-end">
            <Link to="/luizevictoria/">Home</Link>
            <Link to="/luizevictoria/viagem">Dicas de Viagem</Link>
            <Link to="/luizevictoria/presentes">Lista de Presentes</Link>
            <Link to="/luizevictoria/rsvp">RSVP</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
