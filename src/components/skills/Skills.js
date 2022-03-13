import React from 'react';
import { FaCss3, FaGit, FaHtml5, FaJava, FaJs, FaReact } from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si';

import './Skills.css';

const Skills = () => {
  return (
    <section id='skills'>
      <h2>Some of the tools I've used</h2>
      <div className='container skills'>
        <div className='skill-icon'>
          {' '}
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
        </div>{' '}
        <div className='skill-icon'>
          {' '}
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg' />
        </div>{' '}
        <div className='skill-icon'>
          {' '}
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' />
        </div>{' '}
        <div className='skill-icon'>
          {' '}
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' />
        </div>{' '}
        <div className='skill-icon'>
          {' '}
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' />
        </div>{' '}
        <div className='skill-icon'>
          {' '}
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' />
        </div>{' '}
        <div className='skill-icon'>
          {' '}
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' />
        </div>{' '}
        <div className='skill-icon'>
          {' '}
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' />
        </div>{' '}
        <div className='skill-icon'>
          {' '}
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' />
        </div>
      </div>
    </section>
  );
};

export default Skills;
