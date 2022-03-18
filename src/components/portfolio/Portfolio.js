import React from 'react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import 'swiper/css/virtual';
import { Swiper, SwiperSlide } from 'swiper/react';
import Skills from '../skills/Skills';
import Card from './Card';
import './Portfolio.css';
import img from '../../assets/harry.jpg';
const Portfolio = () => {
  const slides = Array.from({ length: 20 }).map(
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
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,

            depth: 100,
            modifier: 1,
          }}
          pagination={{ dynamicBullets: true }}
          modules={[EffectCoverflow, Pagination]}
          className='mySwiper'
          loop={true}
          breakpoints={{
            300: {
              slidesPerView: 1.27,
            },
            760: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {slides.map((slideContent, index) => (
            <SwiperSlide key={slideContent} virtualIndex={index}>
              {/* <Card /> */}
              <img src={img} alt='' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Skills />
    </section>
  );
};

export default Portfolio;
