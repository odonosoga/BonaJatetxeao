import React from 'react';
import Carousel from './carousel/carousel';
import About from './about/about-eu';
import Testimonials from './testimonials/testimonials-eu';
import CTA_eu from './cta/cta-eu';

const Home = () => {
  return (
    <>
      <Carousel />
      <About />
      <Testimonials />
      <CTA_eu />
    </>
  );
};

export default Home;
