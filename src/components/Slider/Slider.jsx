import React, { useState } from 'react';


const images = [
    'https://picsum.photos/id/1018/800/400',
    'https://picsum.photos/id/1021/800/400',
    'https://picsum.photos/id/1025/800/400',
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className='slider'>
      <button className='left-arrow' onClick={prevSlide}>&#10094;</button>
      <button className='right-arrow' onClick={nextSlide}>&#10095;</button>
      {images.map((image, index) => (
        <div className={index === current ? 'slide active' : 'slide'} key={index}>
          {index === current && <img src={image} alt='slide' className='image' />}
        </div>
      ))}
    </section>
  );
};

export default Slider;
