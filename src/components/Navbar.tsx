import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { logo, menu, close } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {

  const [active, setActive] = useState('');
  return (
    <nav className="paddingX w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
      <div className="w-full h-24 flex justify-between items-center max-w-7xl mx-auto">
        <NavLink
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="size-10 object-contain" />
          <p className="text-white text-2xl font-bold cursor-pointer flex">
            <span>herb&nbsp;</span>
            <span className="uppercase text-blue-500 font-bold tracking-wider">
              Segis
            </span>
          </p>
        </NavLink>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link: { id: string; title: string }) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? 'text-white'
                  : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            > 
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar

