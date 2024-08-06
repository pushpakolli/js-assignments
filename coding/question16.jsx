// 16. Write a React component that implements a carousel.

import React, { useState } from 'react';

function Carousel() {
  const [current, setCurrent] = useState(0);
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div>
      <button onClick={prevSlide}>Previous</button>
      <img src={images[current]} alt="carousel" style={{ width: '300px', height: '200px' }} />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
}

export default Carousel;
