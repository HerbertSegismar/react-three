import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { logo, menu, close } from '../assets';

const Navbar = () => {

  const [active, setActive] = useState('');
  return (
    <nav className="paddingX w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <NavLink
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="size-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            <span>Herb &nbsp;</span>{" "}
            <span className="uppercase text-blue-500 font-bold tracking-widest">
              Segis
            </span>
          </p>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar