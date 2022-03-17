import React from 'react';
import {
  Virtual,
  Navigation,
  Pagination,
  Parallax,
  EffectCards,
  EffectCoverflow,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Portfolio.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import 'swiper/css/effect-coverflow';
import Skills from '../skills/Skills';
import Card from './Card';

const Portfolio = () => {
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`,
  );
  return (
    <section id='portfolio'>
      <h2>Projects</h2>
      <div className='container portfolio_container'>
        <Swiper
          // id='portfolio'
          modules={[Virtual, EffectCoverflow]}
          spaceBetween={50}
          slidesPerView={3}
          virtual
          effect='coverflow'
        >
          {slides.map((slideContent, index) => (
            <SwiperSlide key={slideContent} virtualIndex={index}>
              <Card />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Skills />
    </section>
  );
};

export default Portfolio;
