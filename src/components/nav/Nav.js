import React from 'react';
import * as Fa from 'react-icons/fa';
import * as Md from 'react-icons/md';
import { Link, animateScroll as scroll } from 'react-scroll';

import './Nav.css';
const Nav = () => {
  return (
    <nav>
      <Link
        to='#home'
        activeClass='active'
        spy={true}
        hashSpy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <Fa.FaHome />
      </Link>
      <Link
        to='portfolio'
        activeClass='active'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        hashSpy={true}
      >
        <Fa.FaCode />
      </Link>{' '}
      <Link
        to='contact'
        activeClass='active'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        hashSpy={true}
      >
        <Md.MdAlternateEmail />
      </Link>{' '}
      <a href='https://github.com/marlobarksdale' target='_blank'>
        <Fa.FaGithub />
      </a>
    </nav>
  );
};

export default Nav;
