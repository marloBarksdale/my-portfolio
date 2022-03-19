import React from 'react';
import * as Fa from 'react-icons/fa';
import * as Md from 'react-icons/md';
import { Link } from 'react-scroll';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <Link
        to='#home'
        activeClass='active'
        spy={true}
        hashSpy={true}
        smooth='easeInOutQuad'
        duration={1000}
        isDynamic={true}
      >
        <Fa.FaHome />
      </Link>
      <Link
        to='portfolio'
        activeClass='active'
        spy={true}
        smooth='easeInOutQuad'
        duration={1000}
        hashSpy={true}
        isDynamic={true}
      >
        <Fa.FaCode />
      </Link>
      <Link
        to='contact'
        activeClass='active'
        spy={true}
        smooth='easeInOutQuad'
        duration={1000}
        hashSpy={true}
        isDynamic={true}
      >
        <Md.MdAlternateEmail />
      </Link>
      <a
        href='https://github.com/marlobarksdale'
        target='_blank'
        rel='noreferrer'
      >
        <Fa.FaGithub />
      </a>
    </nav>
  );
};

export default Nav;
