import React from 'react';
import './Card.css';
import img from '../../assets/harry.jpg';

const Card = () => {
  return (
    <div class='card'>
      <img src={img} alt='' />
      {/* <div class='card-content'>
        <h2 class='card-title'>Harry Potter and The Philosophers Stone</h2>
        <p class='card-body'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
          provident. Totam voluptatem velit aperiam vitae.
        </p>
        <a href='#' class='button'>
          Learn More
        </a>
      </div> */}
    </div>
  );
};

export default Card;
