import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
        <li>
          <a href='https://github.com/marlobarksdale' target='_blank'>
            Github
          </a>
        </li>
      </ul>

      <span>&copy;Lynden Flood</span>
    </footer>
  );
};

export default Footer;
