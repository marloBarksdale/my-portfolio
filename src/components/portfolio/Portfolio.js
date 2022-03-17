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
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 80,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ dynamicBullets: true }}
          modules={[EffectCoverflow, Pagination]}
          className='mySwiper'
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
