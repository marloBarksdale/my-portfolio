import React from 'react';
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Portfolio.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';
import Skills from '../skills/Skills';

const Portfolio = () => {
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`,
  );
  return (
    <section id='portfolio'>
      <Swiper
        // id='portfolio'
        modules={[Virtual]}
        spaceBetween={50}
        slidesPerView={3}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
      <Skills />
    </section>
  );
};

export default Portfolio;
