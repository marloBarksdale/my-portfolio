import React from 'react';
import * as Fa from 'react-icons/fa';
import * as Md from 'react-icons/md';
import './Nav.css';
const Nav = () => {
  return (
    <nav>
      <a href='#' className='active'>
        <Fa.FaHome />
      </a>
      <a href='#portfolio'>
        <Fa.FaCode />
      </a>{' '}
      <a href='#contact'>
        <Md.MdAlternateEmail />
      </a>{' '}
      <a href='https://github.com/marlobarksdale' target='_blank'>
        <Fa.FaGithub />
      </a>
    </nav>
  );
};

export default Nav;
