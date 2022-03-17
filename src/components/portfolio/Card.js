import React from 'react';
import './Card.css';
import img from '../../assets/harry.jpg';

const Card = () => {
  return (
    <div className='car'>
      <img src={img} alt='' />
      {/* <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
        aliquid a, aperiam architecto ad cupiditate assumenda tempora quod?
        Earum, inventore rerum! Dolores eum nesciunt qui dolorem architecto quas
        tempora repudiandae.
      </p> */}
    </div>
  );
};

export default Card;
