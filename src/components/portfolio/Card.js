import React from 'react';
import './Card.css';
import img from '../../assets/harry.jpg';

const Card = () => {
  return (
    <div className='car'>
      <img src={img} alt='' />
      {/* <div className='card-content'>
        <h2 className='card-title'>Harry Potter and The Philosophers Stone</h2>
        <p className='card-body'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
          provident. Totam voluptatem velit aperiam vitae.
        </p>
        <a href='#' className='button'>
          Learn More
        </a>
      </div>  */}
    </div>
  );
};

export default Card;
