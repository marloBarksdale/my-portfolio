import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import './header.css';

const Header = () => {
  return (
    <header id='#home'>
      <h1>
        {' '}
        <span className='text-highlight'>Hello</span> , I'm Lynden
      </h1>

      <h4>
        A <span className='text-highlight'> Fullstack Developer</span> based in
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
      <MdKeyboardArrowDown className='arrow first' />
      <MdKeyboardArrowDown className='arrow second' />
      <MdKeyboardArrowDown className='arrow third' />
    </header>
  );
};

export default Header;
