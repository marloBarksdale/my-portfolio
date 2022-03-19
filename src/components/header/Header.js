import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import './header.css';
import { Link } from 'react-scroll';
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
        <Link
          to='portfolio'
          activeClass='active'
          spy={true}
          hashSpy={true}
          smooth='easeInOutQuad'
          duration={1000}
          isDynamic={true}
          className='btn'
        >
          My Projects
        </Link>
        <a className='btn btn-primary'>Resume</a>
      </div>
      <MdKeyboardArrowDown className='arrow first' />
      <MdKeyboardArrowDown className='arrow second' />
      <MdKeyboardArrowDown className='arrow third' />
    </header>
  );
};

export default Header;
