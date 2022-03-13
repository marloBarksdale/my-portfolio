import React from 'react';
import { FaLongArrowAltDown } from 'react-icons/fa';
import './header.css';

const Header = () => {
  return (
    <header>
      <h1>
        {' '}
        <span className='text-light'>Hello</span> , I'm Lynden
      </h1>

      <h4>
        A <span className='text-light'> Fullstack Developer</span> based in
        Toronto Canada. I enjoy using a wide range of technologies and languages
        to build beautiful and responsive applications.
      </h4>
      <div className='header_buttons'>
        <a className='btn' href='#portfolio'>
          My Projects
        </a>
        <a className='btn btn-primary' href=''>
          Resume
        </a>
      </div>
      <FaLongArrowAltDown className='arrow' />
    </header>
  );
};

export default Header;
