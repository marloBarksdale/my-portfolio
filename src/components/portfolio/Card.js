import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div class='card'>
      <div class='card-content'>
        <h2 class='card-title'>Calculator</h2>
        <p class='card-body'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
          provident. Totam voluptatem velit aperiam vitae.
        </p>
        <a href='#' class='button'>
          View Code
        </a>
        <a href='#' class='button'>
          View Project
        </a>
      </div>
    </div>
  );
};

export default Card;
